## 1. Extend Types and Prefs

- [x] 1.1 Add `perChangeTool: Record<string, string>` field to the `Prefs` interface in `src/shared/types.ts`
- [x] 1.2 Update `prefs:get` handler in `src/main/index.ts` to default `perChangeTool` to `{}` when absent
- [x] 1.3 Update `App.tsx` `handlePrefsChange` to forward the full updated prefs (no change needed if already passing the full object)

## 2. Build ConversationSheet Component

- [x] 2.1 Create `src/renderer/ConversationSheet.tsx` mirroring the phase state machine from `NewProposalSheet` (input → running → complete | error)
- [x] 2.2 Accept props: `repoPath`, `changeName`, `prefs`, `onSuccess`, `onClose`
- [x] 2.3 Pre-select tool from `prefs.perChangeTool[changeName]` falling back to `prefs.defaultTool`
- [x] 2.4 On tool change, persist the new tool to `prefs.perChangeTool[changeName]` via `window.api.prefs.set`
- [x] 2.5 On submit, invoke CLI with the raw instruction text as the command and `repoPath` as working directory
- [x] 2.6 On success (exit code 0), call `onSuccess` to trigger proposal re-read in parent
- [x] 2.7 On failure, show error banner with exit code and "Try Again" button that returns to input state with instruction preserved
- [x] 2.8 Wire `TerminalPane` with same data/resize/fit lifecycle as `NewProposalSheet`

## 3. Add Continue Button to ChangeDetail

- [x] 3.1 Add `prefs`, `onContinue` props to `ChangeDetail` component interface
- [x] 3.2 Render a "Continue Conversation" button in the detail header, visible only when `change.status === 'active'`
- [x] 3.3 Wire `onContinue` callback to the button's onClick

## 4. Wire Up in App

- [x] 4.1 Add `conversationOpen` boolean state to `App.tsx`
- [x] 4.2 Pass `prefs` and `onContinue={() => setConversationOpen(true)}` to `ChangeDetail`
- [x] 4.3 Render `ConversationSheet` when `conversationOpen && selectedChange` with correct props
- [x] 4.4 On `ConversationSheet` `onSuccess`: close sheet, re-read proposal for `selectedChange` (re-trigger the `readProposal` effect)
- [x] 4.5 On `ConversationSheet` `onClose`: set `conversationOpen` to false
