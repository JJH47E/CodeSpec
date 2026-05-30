## ADDED Requirements

### Requirement: Delete a change
The system SHALL provide a Delete action for any non-archived change that permanently removes the change directory from `openspec/changes/`. The action SHALL require explicit user confirmation before executing.

#### Scenario: User deletes an active change
- **WHEN** the user clicks the Delete button on an `active` change and confirms
- **THEN** the change directory is removed from disk, the sidebar refreshes, and the detail pane shows the empty state

#### Scenario: User cancels delete
- **WHEN** the user clicks the Delete button but then cancels the confirmation dialog
- **THEN** no files are removed and the change remains selected

#### Scenario: Delete button is not shown for archived changes
- **WHEN** a change with status `archived` is selected
- **THEN** no Delete button is visible in the detail header

### Requirement: Archive a started change
The system SHALL provide an Archive action for `active` changes that have tasks started (tasks.md exists with at least one checkbox line) and for `in-progress` changes. Archiving moves the change directory to `openspec/archive/YYYY-MM-DD-<name>/`.

#### Scenario: User archives an active change with tasks
- **WHEN** an `active` change has a tasks.md with checkbox lines and the user clicks Archive and confirms
- **THEN** the change directory is moved to `openspec/archive/` with a date-prefixed name, the sidebar refreshes, and the detail pane shows the empty state

#### Scenario: Archive button is not shown for unstarted changes
- **WHEN** an `active` change has no tasks.md or no checkbox lines in tasks.md
- **THEN** no Archive button is visible in the detail header

#### Scenario: Archive button is not shown for archived changes
- **WHEN** a change with status `archived` is selected
- **THEN** no Archive button is visible in the detail header

#### Scenario: Archive target already exists
- **WHEN** the user confirms archive but a directory with the same date-prefixed name already exists in `openspec/archive/`
- **THEN** the operation fails and an error message is shown; the change remains in `openspec/changes/`

### Requirement: Warn before acting on an in-progress change
When the user initiates Delete or Archive on an `in-progress` change, the system SHALL display a warning that includes the count of incomplete tasks and require explicit confirmation before proceeding.

#### Scenario: Delete on in-progress change shows incomplete task count
- **WHEN** the user clicks Delete on an `in-progress` change
- **THEN** the confirmation dialog shows a warning message and the number of incomplete tasks (e.g., "3 tasks are not yet complete")

#### Scenario: Archive on in-progress change shows incomplete task count
- **WHEN** the user clicks Archive on an `in-progress` change
- **THEN** the confirmation dialog shows a warning message and the number of incomplete tasks

#### Scenario: User confirms action after warning
- **WHEN** the warning dialog is shown and the user clicks Confirm
- **THEN** the delete or archive operation proceeds

### Requirement: Unstarted active changes cannot be archived
The system SHALL prevent archiving a change that has not been started. When the user attempts to archive such a change, the system SHALL redirect them to delete instead.

#### Scenario: User attempts to archive an unstarted change via IPC
- **WHEN** `changes:archive` is called for a change with no tasks.md or no checkbox lines
- **THEN** the handler returns an error indicating the change has not been started

#### Scenario: Archive affordance is absent for unstarted changes
- **WHEN** the selected change is `active` with no tasks
- **THEN** only the Delete button is shown; no Archive button is present
