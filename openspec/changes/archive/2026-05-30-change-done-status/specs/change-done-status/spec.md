## ADDED Requirements

### Requirement: Derive done status from completed tasks
The system SHALL derive a `done` status for a change when its `tasks.md` exists, contains at least one checkbox line, and all checkbox lines are marked complete (`- [x]`). No incomplete (`- [ ]`) lines may be present.

#### Scenario: All tasks checked
- **WHEN** a change's `tasks.md` contains at least one `- [x]` line and zero `- [ ]` lines
- **THEN** that change is loaded with status `done`

#### Scenario: Mix of complete and incomplete tasks
- **WHEN** a change's `tasks.md` contains both `- [x]` and `- [ ]` lines
- **THEN** that change retains `in-progress` status (not `done`)

#### Scenario: No tasks file
- **WHEN** a change directory has no `tasks.md`
- **THEN** that change retains `active` status (not `done`)

### Requirement: Render done changes with distinct visuals
The system SHALL render `done` changes with a success-toned badge labelled "Done" and a check-circle icon in both the sidebar list item and the change detail header, distinguishing them visually from `active`, `in-progress`, and `archived` changes.

#### Scenario: Done change in sidebar list
- **WHEN** a change with status `done` appears in the sidebar
- **THEN** its list item displays a success-toned icon background and a "Done" badge

#### Scenario: Done change in detail header
- **WHEN** a change with status `done` is selected
- **THEN** the detail header badge reads "Done" with a success tone

### Requirement: Done changes appear in the Active sidebar group
The system SHALL include `done` changes in the Active sidebar group alongside `active` and `in-progress` changes.

#### Scenario: Done change visible under Active filter
- **WHEN** the user selects the "Active" filter
- **THEN** changes with status `done` are visible in the sidebar

#### Scenario: Done change not shown under Archived filter
- **WHEN** the user selects the "Archived" filter
- **THEN** changes with status `done` are not shown
