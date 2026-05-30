## 1. ApplyProposalSheet component

- [x] 1.1 Create `src/renderer/ApplyProposalSheet.tsx` with Props: `repoPath`, `changeName`, `prefs`, `onPrefsChange`, `onSuccess`, `onClose`
- [x] 1.2 Add phase state machine (`input` | `running` | `complete` | `error`) and supporting state (`toolId`, `exitCode`)
- [x] 1.3 Mount `TerminalPane` always; wire `cli.onData` to write to terminal ref
- [x] 1.4 Add `killAndClose` helper that calls `window.api.cli.cancel()` then delegates to callback
- [x] 1.5 Implement `handleSubmit`: build command — `/opsx:apply "<changeName>"` when `toolId` is `claude-code`, otherwise a natural language prompt pointing to the change's openspec files; invoke CLI, set phase to `running`, resolve to `complete` or `error`
- [x] 1.6 Implement `handleCancel` (running phase): set `cancelledRef`, call `killAndClose(onClose)`
- [x] 1.7 Implement `handleClose`: call `killAndClose(onSuccess)` on complete, `killAndClose(onClose)` otherwise
- [x] 1.8 Add Escape key handler (closes when not running)
- [x] 1.9 Render header with play-circle icon and title "Apply Proposal" / phase-specific titles
- [x] 1.10 Render body: tool selector (input phase), error banner (error phase), success banner (complete phase), TerminalPane (running/complete/error)
- [x] 1.11 Render footer: Cancel + Apply button (input), Cancel danger button (running), Done button (complete), Close + Try Again (error)
- [x] 1.12 Route overlay click through `killAndClose` (when not running)
- [x] 1.13 Route header X button through `handleClose`

## 2. ChangeDetail — Apply Proposal button

- [x] 2.1 Add `onApply?: () => void` prop to `ChangeDetail` Props interface
- [x] 2.2 Render "Apply Proposal" button before "Continue" in the header action area, visible only when `change.status === 'active' && onApply`

## 3. App wiring

- [x] 3.1 Add `applyOpen` boolean state to `App`
- [x] 3.2 Implement `handleApplySuccess`: close sheet and bump `proposalVersion` to trigger proposal re-read
- [x] 3.3 Pass `onApply={() => setApplyOpen(true)}` to `ChangeDetail`
- [x] 3.4 Render `ApplyProposalSheet` conditionally when `applyOpen && selectedChange`, passing all required props
- [x] 3.5 Import `ApplyProposalSheet` in `App.tsx`

## 4. Verification

- [x] 4.1 Smoke-test: Apply button appears for active changes, absent for archived
- [x] 4.2 Smoke-test: clicking Apply opens the sheet, runs the correct command, terminal shows output
- [x] 4.3 Smoke-test: closing mid-run via X kills the process (no further file changes)
- [x] 4.4 Smoke-test: Done after success closes sheet and refreshes proposal content
