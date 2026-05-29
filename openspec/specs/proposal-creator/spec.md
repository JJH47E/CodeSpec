## Requirements

### Requirement: Open new-proposal sheet
The system SHALL provide a "New Proposal" action in the header that opens a modal sheet where the user describes what they want to build in natural language.

#### Scenario: User opens the sheet
- **WHEN** the user clicks the "New Proposal" button
- **THEN** a modal sheet opens containing a description textarea, a CLI tool selector, and a submit button
- **AND** the description textarea receives focus automatically

#### Scenario: Sheet opened with no CLI tools configured
- **WHEN** the user clicks "New Proposal" and no CLI tools are registered
- **THEN** the sheet shows an inline prompt to add a CLI tool first, with a link to the settings panel
- **AND** the submit button is disabled

#### Scenario: Sheet is dismissed before submitting
- **WHEN** the user presses Escape or clicks outside the sheet while it is in input state
- **THEN** the sheet closes and no invocation is made

### Requirement: Select CLI tool for invocation
The system SHALL show a CLI tool selector in the new-proposal sheet pre-populated with the default tool.

#### Scenario: Default tool is selected automatically
- **WHEN** the sheet opens and a default tool is configured
- **THEN** the CLI tool selector shows the default tool pre-selected

#### Scenario: User changes the tool
- **WHEN** the user selects a different tool from the selector
- **THEN** that tool will be used for the invocation when the form is submitted

### Requirement: Validate description before submission
The system SHALL require a non-empty description before the form can be submitted.

#### Scenario: Description is empty
- **WHEN** the description textarea is empty
- **THEN** the submit button is disabled

#### Scenario: Description is non-empty
- **WHEN** the user has typed at least one non-whitespace character in the description
- **THEN** the submit button is enabled (assuming a tool is also selected)

### Requirement: Invoke the CLI tool to create the proposal
The system SHALL invoke the selected CLI tool using its configured command and args template, substituting `{command}` with `/opsx:propose "<description>"`, run in the active repository's root directory.

#### Scenario: Invocation starts
- **WHEN** the user submits the form
- **THEN** the sheet transitions to a read-only "In progress" state
- **AND** the submit button is replaced with a spinner and a "Cancel" button
- **AND** the sheet begins displaying streamed CLI output line by line in a scrollable log area

#### Scenario: Invocation succeeds
- **WHEN** the CLI tool exits with code 0
- **THEN** the sheet closes automatically
- **AND** the change list refreshes
- **AND** the most recently created change is selected in the sidebar

#### Scenario: Invocation fails
- **WHEN** the CLI tool exits with a non-zero code
- **THEN** the sheet remains open in an error state showing the full output log
- **AND** a red error banner is shown above the log
- **AND** a "Try Again" button is shown that returns the sheet to input state with the description preserved

#### Scenario: User cancels in-progress invocation
- **WHEN** the user clicks "Cancel" while an invocation is running
- **THEN** the CLI process is terminated
- **AND** the sheet closes without refreshing the change list

### Requirement: CLI tool not found
The system SHALL handle the case where the configured CLI tool executable cannot be found on PATH.

#### Scenario: Command not found
- **WHEN** the spawn fails with ENOENT
- **THEN** the sheet shows a specific error message explaining the executable was not found and suggesting the user launch the app from a terminal or verify the command in settings
