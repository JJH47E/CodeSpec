## Requirements

### Requirement: Derive done status from completed tasks
The system SHALL examine `tasks.md` within each active change directory at list-load time and set the change status to `done` when a `tasks.md` exists, contains at least one checkbox line, and every checkbox line is marked complete (`- [x]`). Changes with no `tasks.md`, no checkboxes, or at least one incomplete task SHALL NOT receive `done` status.

#### Scenario: Change with all tasks complete
- **WHEN** a change's `tasks.md` contains only `- [x]` lines (no `- [ ]` lines)
- **THEN** that change is loaded with status `done`

#### Scenario: Change with some tasks incomplete
- **WHEN** a change's `tasks.md` contains at least one `- [ ]` line
- **THEN** that change is loaded with status `in-progress`, not `done`

#### Scenario: Change with no tasks file
- **WHEN** a change directory has no `tasks.md`
- **THEN** that change is loaded with status `active`, not `done`

#### Scenario: Change with no checkboxes in tasks file
- **WHEN** a change's `tasks.md` exists but contains no checkbox lines
- **THEN** that change is loaded with status `active`, not `done`

### Requirement: Render done changes with distinct visuals
The system SHALL render changes with `done` status using a distinct icon, badge label, and icon-background colour in both the sidebar list item and the change detail header badge, differentiating them visually from `active`, `in-progress`, and `archived` changes.

#### Scenario: Done change in sidebar
- **WHEN** a change with status `done` appears in the sidebar list
- **THEN** its list item icon background and icon colour reflect the done state (distinct from active, in-progress, and archived), and its badge reads "Done"

#### Scenario: Done change in detail header
- **WHEN** a change with status `done` is selected
- **THEN** the change detail header badge reads "Done" with a visually distinct tone

### Requirement: Done changes appear in the Active sidebar group
The system SHALL display changes with `done` status within the Active group of the sidebar alongside `active` and `in-progress` changes, and SHALL exclude them from the Archived group.

#### Scenario: Done changes appear in Active group
- **WHEN** a change has status `done` and the filter is set to "Active" or "All"
- **THEN** the change appears in the Active group of the sidebar list

#### Scenario: Done changes are excluded from Archived filter
- **WHEN** the user selects the "Archived" filter
- **THEN** changes with status `done` are not shown
