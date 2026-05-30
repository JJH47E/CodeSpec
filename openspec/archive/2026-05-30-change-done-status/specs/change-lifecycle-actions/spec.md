## MODIFIED Requirements

### Requirement: Archive a started change
The system SHALL provide an Archive action for all non-archived changes. Archiving moves the change directory to `openspec/archive/YYYY-MM-DD-<name>/`. The Archive button SHALL be visible for all non-archived changes regardless of task state.

#### Scenario: User archives a done change
- **WHEN** a `done` change is selected and the user clicks Archive and confirms
- **THEN** the change directory is moved to `openspec/archive/` with a date-prefixed name, the sidebar refreshes, and the detail pane shows the empty state

#### Scenario: User archives an active change
- **WHEN** an `active` change (with or without tasks) is selected and the user clicks Archive and confirms
- **THEN** the change directory is moved to `openspec/archive/` with a date-prefixed name, the sidebar refreshes, and the detail pane shows the empty state

#### Scenario: Archive button is visible for all non-archived changes
- **WHEN** any non-archived change is selected
- **THEN** an Archive button is visible in the detail header

#### Scenario: Archive button is not shown for archived changes
- **WHEN** a change with status `archived` is selected
- **THEN** no Archive button is visible in the detail header

#### Scenario: Archive target already exists
- **WHEN** the user confirms archive but a directory with the same date-prefixed name already exists in `openspec/archive/`
- **THEN** the operation fails and an error message is shown; the change remains in `openspec/changes/`

### Requirement: Warn before acting on an in-progress change
When the user initiates Delete or Archive on an `in-progress` change, the system SHALL display a warning that includes the count of incomplete tasks and require explicit confirmation before proceeding. No warning is shown for `done` or `active` changes.

#### Scenario: Delete on in-progress change shows incomplete task count
- **WHEN** the user clicks Delete on an `in-progress` change
- **THEN** the confirmation dialog shows a warning message and the number of incomplete tasks (e.g., "3 tasks are not yet complete")

#### Scenario: Archive on in-progress change shows incomplete task count
- **WHEN** the user clicks Archive on an `in-progress` change
- **THEN** the confirmation dialog shows a warning message and the number of incomplete tasks

#### Scenario: No warning shown for done changes
- **WHEN** the user clicks Delete or Archive on a `done` change
- **THEN** the confirmation dialog shows a neutral message with no task-count warning

#### Scenario: User confirms action after warning
- **WHEN** the warning dialog is shown and the user clicks Confirm
- **THEN** the delete or archive operation proceeds


## REMOVED Requirements

### Requirement: Unstarted active changes cannot be archived
**Reason**: All non-archived changes are now archivable regardless of task state; the distinction between started and unstarted is no longer relevant for the archive action.
**Migration**: No migration needed; the IPC handler no longer rejects unstarted changes and the Archive button is visible for all non-archived changes.
