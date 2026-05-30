## Requirements

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

### Requirement: Persist last-opened repository path
The system SHALL save the most recently opened repository path to persistent storage so it can be restored on subsequent launches.

#### Scenario: App relaunches after a repo was opened
- **WHEN** the user relaunches the app after previously opening a repository
- **THEN** the app automatically loads the previously opened repository on startup without requiring the user to pick it again

#### Scenario: Persisted path no longer exists
- **WHEN** the app starts and the persisted repository path no longer exists on disk
- **THEN** the app shows the "No repository loaded" empty state instead of an error

### Requirement: No-repository empty state
The system SHALL display a clear empty state with a call-to-action when no repository is loaded.

#### Scenario: First launch with no persisted repo
- **WHEN** the app launches for the first time and no repository path is persisted
- **THEN** the app displays the empty state screen with an "Open Repository" button as the primary action

#### Scenario: Empty state CTA opens picker
- **WHEN** the user clicks the "Open Repository" button in the empty state
- **THEN** the native directory-picker dialog opens (same flow as the header action)
