## Requirements

### Requirement: Show "Continue" action for active changes
The system SHALL display a "Continue Conversation" button in the `ChangeDetail` header for changes with status `active`, allowing the user to open a follow-up CLI session for that change.

#### Scenario: Button is visible for active change
- **WHEN** an active change is selected in the sidebar
- **THEN** a "Continue Conversation" button appears in the change detail header

#### Scenario: Button is absent for archived change
- **WHEN** an archived change is selected in the sidebar
- **THEN** no "Continue Conversation" button is shown in the change detail header

### Requirement: Open conversation sheet with instruction input
The system SHALL open a modal sheet when the user clicks "Continue Conversation", containing a textarea for a follow-up instruction, a CLI tool selector pre-populated with the per-change tool preference (falling back to the global default tool), and a submit button.

#### Scenario: Sheet opens with per-change tool pre-selected
- **WHEN** the user clicks "Continue Conversation" and a per-change tool preference exists
- **THEN** the sheet opens with that tool pre-selected in the selector

#### Scenario: Sheet opens with default tool when no per-change preference
- **WHEN** the user clicks "Continue Conversation" and no per-change tool preference exists
- **THEN** the sheet opens with the global default tool pre-selected

#### Scenario: Sheet is dismissed before submitting
- **WHEN** the user presses Escape or clicks outside the sheet while it is in input state
- **THEN** the sheet closes without invoking any CLI tool

### Requirement: Validate instruction before submission
The system SHALL require a non-empty instruction before the conversation session can be started.

#### Scenario: Instruction is empty
- **WHEN** the instruction textarea is empty
- **THEN** the submit button is disabled

#### Scenario: Instruction is non-empty
- **WHEN** the user has typed at least one non-whitespace character
- **THEN** the submit button is enabled (assuming a tool is also selected)

### Requirement: Invoke the CLI tool with the follow-up instruction
The system SHALL invoke the selected CLI tool using the user's instruction as the command, with the active repository's root directory as the working directory.

#### Scenario: Session starts
- **WHEN** the user submits the form
- **THEN** the sheet transitions to a terminal session state showing live output from the CLI tool

#### Scenario: Session completes successfully
- **WHEN** the CLI tool exits with code 0
- **THEN** the sheet shows a success state
- **AND** the change detail view re-reads and refreshes the proposal content

#### Scenario: Session fails
- **WHEN** the CLI tool exits with a non-zero code
- **THEN** the sheet shows an error banner with the exit code
- **AND** the terminal output remains visible
- **AND** a "Try Again" button returns the sheet to input state with the instruction preserved

#### Scenario: User cancels in-progress session
- **WHEN** the user clicks "Cancel" while the CLI session is running
- **THEN** the CLI process is terminated
- **AND** the sheet closes without refreshing the change detail

### Requirement: Persist per-change CLI tool preference
The system SHALL save the CLI tool selected in the conversation sheet to a per-change tool preference, keyed by change name, so it is pre-selected on future opens.

#### Scenario: Tool preference is saved on submit
- **WHEN** the user submits the conversation sheet with a specific tool selected
- **THEN** that tool is stored as the per-change preference for this change

#### Scenario: Per-change preference is restored on re-open
- **WHEN** the user closes and re-opens the conversation sheet for the same change
- **THEN** the previously selected tool is pre-selected
