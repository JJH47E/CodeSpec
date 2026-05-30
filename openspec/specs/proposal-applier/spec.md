## Requirements

### Requirement: Show "Apply Proposal" button for active changes
The system SHALL display an "Apply Proposal" button in the `ChangeDetail` header for changes with status `active`, allowing the user to invoke the CLI apply command for that change.

#### Scenario: Button is visible for active change
- **WHEN** an active change is selected in the sidebar
- **THEN** an "Apply Proposal" button appears in the change detail header alongside the "Continue" button

#### Scenario: Button is absent for archived change
- **WHEN** an archived change is selected in the sidebar
- **THEN** no "Apply Proposal" button is shown in the change detail header

### Requirement: Open apply sheet with tool selector and terminal
The system SHALL open a modal sheet when the user clicks "Apply Proposal", containing a CLI tool selector pre-populated with the per-change tool preference (falling back to the global default), a terminal pane, and a run button.

#### Scenario: Sheet opens with per-change tool pre-selected
- **WHEN** the user clicks "Apply Proposal" and a per-change tool preference exists
- **THEN** the sheet opens with that tool pre-selected

#### Scenario: Sheet opens with default tool when no per-change preference
- **WHEN** the user clicks "Apply Proposal" and no per-change tool preference exists
- **THEN** the sheet opens with the global default tool pre-selected

#### Scenario: Sheet is dismissed before running
- **WHEN** the user presses Escape, clicks outside the sheet, or clicks Cancel while in input state
- **THEN** the sheet closes without invoking any CLI tool

### Requirement: Invoke the CLI apply command automatically
The system SHALL invoke the selected CLI tool with a command derived from the tool type — no manual instruction entry is required. For Claude Code (`id: "claude-code"`), the command SHALL be `/opsx:apply "<changeName>"`. For all other tools, the command SHALL be a natural language prompt instructing the tool to read the change's openspec files and implement all incomplete tasks.

#### Scenario: Apply session starts with Claude Code
- **WHEN** the user clicks the run button with Claude Code selected
- **THEN** the sheet transitions to terminal state running `/opsx:apply "<changeName>"`

#### Scenario: Apply session starts with a non-Claude Code tool
- **WHEN** the user clicks the run button with any tool other than Claude Code selected
- **THEN** the sheet transitions to terminal state running a natural language prompt describing the implementation task

#### Scenario: Apply session completes successfully
- **WHEN** the CLI tool exits with code 0
- **THEN** the sheet shows a success state and the change detail view re-reads and refreshes the proposal content on close

#### Scenario: Apply session fails
- **WHEN** the CLI tool exits with a non-zero code
- **THEN** the sheet shows an error banner with the exit code, the terminal output remains visible, and a "Try Again" button returns the sheet to input state

#### Scenario: User cancels in-progress apply session
- **WHEN** the user clicks "Cancel" while the apply CLI session is running
- **THEN** the CLI process is terminated and the sheet closes

### Requirement: Kill CLI process when apply sheet is dismissed
The system SHALL call `cli.cancel()` on every dismiss path of the apply sheet, ensuring the underlying PTY process is terminated regardless of the current session phase.

#### Scenario: User closes apply sheet via X button while process is running
- **WHEN** the user clicks the X button while a CLI apply process is running
- **THEN** the CLI process is killed and the sheet closes

#### Scenario: User closes apply sheet after completion
- **WHEN** the apply session completed and the user clicks Done
- **THEN** `cli.cancel()` is called (no-op) and the sheet closes, triggering a proposal refresh
