## 1. ConversationSheet

- [x] 1.1 Add `killAndClose` helper that calls `window.api.cli.cancel()` then delegates to `onClose` or `onSuccess`
- [x] 1.2 Route the header X button (`handleClose` when not complete) through `killAndClose`
- [x] 1.3 Route the overlay click through `killAndClose`
- [x] 1.4 Route the Escape key handler through `killAndClose`
- [x] 1.5 Route the error-state "Close" footer button through `killAndClose`
- [x] 1.6 Route the complete-state "Done" button through `killAndClose` (calls cancel as no-op, then onSuccess)

## 2. NewProposalSheet

- [x] 2.1 Add `killAndClose` helper that calls `window.api.cli.cancel()` then delegates to `onClose` or `onSuccess`
- [x] 2.2 Route the header X button (`handleClose` when not complete) through `killAndClose`
- [x] 2.3 Route the overlay click through `killAndClose`
- [x] 2.4 Route the Escape key handler through `killAndClose`
- [x] 2.5 Route the error-state "Close" footer button through `killAndClose`
- [x] 2.6 Route the complete-state "Done" button through `killAndClose` (calls cancel as no-op, then onSuccess)
- [x] 2.7 Route the `proposalReady` "Done" button (shown while running) through `killAndClose` → onSuccess

## 3. Verification

- [ ] 3.1 Smoke-test: open Continue Conversation, start a session, click X mid-run — confirm no further file changes occur
- [ ] 3.2 Smoke-test: open New Proposal, start a session, click outside the modal mid-run — confirm process is killed
- [ ] 3.3 Confirm normal happy path (Done after success) still works correctly

