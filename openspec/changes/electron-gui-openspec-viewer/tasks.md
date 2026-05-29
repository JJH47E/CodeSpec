## 1. IPC Foundation

- [x] 1.1 Add `repo.openDirectory` IPC channel — `dialog.showOpenDialog` with `openDirectory` property, validates `openspec/` sub-folder exists
- [x] 1.2 Add `prefs.get` and `prefs.set` IPC channels — read/write `{userData}/prefs.json` synchronously; initialise with empty `cliTools: []` if file absent
- [x] 1.3 Add `changes.readChangeList` IPC channel — scans `openspec/changes/` and `openspec/archive/`, reads each `.openspec.yaml`, returns typed `Change[]`
- [x] 1.4 Add `changes.readProposal` IPC channel — reads and returns raw text of `proposal.md` for a given change path
- [x] 1.5 Add `cli.invoke` IPC channel — resolves the tool record from prefs, substitutes `{command}` in the args template, spawns with `child_process.spawn({ cwd: repoPath, env: { ...process.env } })`, and forwards stdout/stderr lines via `webContents.send('cli:output', line)`; returns `{ exitCode }` on process close
- [x] 1.6 Add `cli.cancel` IPC channel — kills the currently running CLI child process if one exists
- [x] 1.7 Expose all new channels through `contextBridge` in `preload/index.ts` with typed `window.api` additions; add renderer-side listener helper for `cli:output` events

## 2. Repository Selector

- [x] 2.1 Create `RepoSelectorScreen` component — full-viewport empty state with app name, subtitle, and primary "Open Repository" button
- [x] 2.2 Wire "Open Repository" button to `window.api.repo.openDirectory`; on valid selection persist path via `prefs.set` and transition to the app shell
- [x] 2.3 Show inline error when selected directory is not an OpenSpec repository
- [x] 2.4 On app start, read `prefs.get` for last repo path; if it exists load it, otherwise show `RepoSelectorScreen`
- [x] 2.5 Handle missing/deleted persisted path gracefully — show `RepoSelectorScreen` without error

## 3. App Shell Layout

- [x] 3.1 Replace placeholder `App.tsx` content with a three-panel layout: `<Header>`, `<Sidebar>`, `<MainPane>` — rendered only when a repo is loaded
- [x] 3.2 Build `Header` component — repo name (truncated path), "New Proposal" button, refresh icon button, repo-switch icon button, settings icon button
- [x] 3.3 Wire repo-switch button to `openDirectory` flow (same as empty state)

## 4. Change Browser

- [x] 4.1 Build `ChangeList` sidebar component — renders `Change` items grouped under "Active" and "Archived" headings using design-system Card/Badge tokens
- [x] 4.2 Add filter tabs (All / Active / Archived) above the list; default to "All"
- [x] 4.3 Build `ChangeListItem` — shows change name, formatted creation date, status Badge
- [x] 4.4 Build `ChangeDetail` main pane — renders selected change's `proposal.md` with minimal inline renderer (H2 headings, bold, bullets using semantic CSS variables)
- [x] 4.5 Show "No proposal written yet" placeholder when `proposal.md` is absent
- [x] 4.6 Show neutral empty state in main pane when no change is selected
- [x] 4.7 Show empty state in sidebar when no changes exist
- [x] 4.8 Wire sidebar item click to `changes.readProposal` and update detail pane

## 5. CLI Tool Manager

- [x] 5.1 Build `SettingsSheet` component — modal sheet opened from header settings icon; contains "CLI Tools" section with a list of registered tools and an "Add Tool" button
- [x] 5.2 Build `ToolForm` — inline form with fields: Label (text), Command (text), Args template (text with `{command}` hint); validate all required, warn if `{command}` absent from template
- [x] 5.3 Wire "Add Tool" to create a new tool record via `prefs.set`; assign a generated `id` (slugified label)
- [x] 5.4 Wire "Edit" per tool row to populate `ToolForm` inline and save on confirm
- [x] 5.5 Wire "Remove" per tool row with a confirmation step; clear `defaultTool` in prefs if the removed tool was the default
- [x] 5.6 Add "Set as Default" action per tool row; show a "Default" Badge on the current default
- [x] 5.7 Show empty state in `SettingsSheet` when no tools are registered, with an example snippet for Claude Code (`command: claude`, `args: ["-p", "{command}"]`)

## 6. Proposal Creator

- [x] 6.1 Build `NewProposalSheet` component — modal with a description `<textarea>`, CLI tool `<Select>` (pre-filled with default), and "Create Proposal" submit button; auto-focus textarea on open
- [x] 6.2 Disable submit when description is empty or no tool is selected; show "Add a CLI tool in Settings" link if no tools registered
- [x] 6.3 On submit, transition sheet to "In progress" state: replace submit button with spinner + "Cancel" button, show a scrollable log area
- [x] 6.4 Wire `window.api.cli.invoke({ toolId, command: '/opsx:propose "${description}"', repoPath })` and stream `cli:output` lines into the log area, auto-scrolling to the bottom
- [x] 6.5 On exit code 0: close sheet, re-fetch change list via `changes.readChangeList`, auto-select the newest change in sidebar
- [x] 6.6 On non-zero exit: show red error banner above log; add "Try Again" button that returns sheet to input state with description preserved
- [x] 6.7 Wire "Cancel" button to `window.api.cli.cancel()`; close sheet without refreshing change list
- [x] 6.8 Wire Escape key to dismiss when sheet is in input state; disable Escape during active invocation
- [x] 6.9 Handle ENOENT: show specific "Executable not found" error with instruction to verify the command in Settings or launch the app from a terminal

## 7. Integration & Polish

- [x] 7.1 Wire the header refresh button to re-call `changes.readChangeList` and update sidebar
- [x] 7.2 Audit all new components — replace any hardcoded colors with `var(--*)` design-system tokens
- [x] 7.3 Verify keyboard navigation: Tab order is logical within sheets and sidebar
- [x] 7.4 Remove all placeholder/stub content from the original App.tsx scaffold
