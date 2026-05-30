## MODIFIED Requirements

### Requirement: Open repository via OS file picker
The system SHALL provide a mechanism for the user to select a local directory as the active repository using the operating system's native file-selection dialog.

#### Scenario: User opens a valid repository
- **WHEN** the user clicks the "Open Repository" action
- **THEN** the native directory-picker dialog opens
- **AND** upon selecting a directory that contains an `openspec/` sub-folder, the app loads that repository as the active repo

#### Scenario: User selects a directory without openspec
- **WHEN** the user selects a directory that does NOT contain an `openspec/` sub-folder
- **THEN** the app transitions to the onboarding wizard for that directory instead of showing an inline error
- **AND** the previously active repo (if any) is deselected for the duration of onboarding

#### Scenario: User cancels the dialog
- **WHEN** the user dismisses the file-picker without selecting a directory
- **THEN** no change is made to the active repository state
