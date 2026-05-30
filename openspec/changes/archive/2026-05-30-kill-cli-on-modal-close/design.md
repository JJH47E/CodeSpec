## Context

Both modals (`NewProposalSheet` and `ConversationSheet`) share the same lifecycle pattern: they spawn a PTY process via `window.api.cli.invoke`, track it via `activeProcess` in the main process, and expose `window.api.cli.cancel()` to kill it. The explicit "Cancel while running" button already calls `cli.cancel()`. However, every other dismiss path — the X button in the header, clicking the overlay, Escape, the "Close" button in the error state, and the "Done" button — calls `onClose()` or `onSuccess()` directly without first terminating the process. If the process is still running (or in an intermediate state), it continues making file-system changes after the modal has unmounted.

## Goals / Non-Goals

**Goals:**
- Ensure `cli.cancel()` is called on every modal-dismiss path in both sheets.
- Make the call unconditional and safe — `cli.cancel()` is already a no-op when `activeProcess` is null.
- Require no changes to the main process or IPC layer.

**Non-Goals:**
- Changing the visual flow or UX of either sheet.
- Adding confirmation dialogs before killing the process.
- Handling the case where a new CLI session could start in the same sheet after cancellation.

## Decisions

**Wrap all dismiss functions with a `killAndClose` helper.**

Each sheet gets a small internal helper that calls `window.api.cli.cancel()` then delegates to `onClose` or `onSuccess`. All dismiss paths (header X, overlay click, Escape handler, footer buttons) route through it. This keeps the change minimal and easy to audit.

Alternative considered: call `cancel()` inside the `onClose`/`onSuccess` callbacks at the App level. Rejected because the sheets own the process lifecycle (they start it) and the App layer shouldn't need to know about it.

**Call `cancel()` unconditionally, including on success.**

When a session completes successfully (`phase === 'complete'`), the process has already exited and `activeProcess` is already null — `cancel()` becomes a no-op. Calling it unconditionally is simpler than checking phase.

## Risks / Trade-offs

- [Race] A future process spawned in a new modal immediately after close could be killed if `activeProcess` is set during the brief window between dismiss and unmount. → Mitigation: the dismiss is synchronous and React unmounts the old sheet before the new one mounts; no real race in practice.
- [UX] Users who click "Done" on a complete session will now also trigger `cancel()`. → No observable effect because the process is already dead.

## Migration Plan

1. Add `killAndClose` helper to `ConversationSheet` and `NewProposalSheet`.
2. Route all dismiss paths through the helper.
3. Manual smoke-test: start a session, close mid-run via X and overlay — verify no further file changes appear.
4. No rollback concern; change is purely additive.
