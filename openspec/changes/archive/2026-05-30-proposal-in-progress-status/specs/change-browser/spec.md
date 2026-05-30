## ADDED Requirements

### Requirement: Derive in-progress status from task completion
The system SHALL examine `tasks.md` within each active change directory at list-load time and set the change status to `in-progress` when at least one task is marked complete (`- [x]`) and at least one task remains incomplete (`- [ ]`). Changes with no `tasks.md`, no checkboxes, or all tasks complete SHALL retain `active` status.

#### Scenario: Change with some tasks complete
- **WHEN** a change's `tasks.md` contains at least one `- [x]` line and at least one `- [ ]` line
- **THEN** that change is loaded with status `in-progress`

#### Scenario: Change with no tasks file
- **WHEN** a change directory has no `tasks.md`
- **THEN** that change is loaded with status `active`

#### Scenario: Change with all tasks complete
- **WHEN** a change's `tasks.md` contains only `- [x]` lines (no `- [ ]` lines)
- **THEN** that change is loaded with status `active`

#### Scenario: Change with no checkboxes in tasks file
- **WHEN** a change's `tasks.md` exists but contains no checkbox lines
- **THEN** that change is loaded with status `active`

### Requirement: Display in-progress changes with distinct visual treatment
The system SHALL render changes with `in-progress` status using a distinct icon, badge label, and icon-background colour in both the sidebar list item and the change detail header badge, differentiating them visually from `active` and `archived` changes.

#### Scenario: In-progress change in sidebar
- **WHEN** a change with status `in-progress` appears in the sidebar list
- **THEN** its list item icon background and icon colour reflect the in-progress state (distinct from active and archived), and its badge reads "In Progress"

#### Scenario: In-progress change in detail header
- **WHEN** a change with status `in-progress` is selected
- **THEN** the change detail header badge reads "In Progress" with a visually distinct tone

## MODIFIED Requirements

### Requirement: List active and archived changes in sidebar
The system SHALL read the `openspec/changes/` and `openspec/archive/` directories of the active repository and render the discovered changes in a sidebar list, grouped by status. Changes with status `in-progress` SHALL appear within the Active group alongside `active` changes.

#### Scenario: Repository with active changes
- **WHEN** a repository is loaded that contains one or more directories under `openspec/changes/`
- **THEN** the sidebar displays each change as a list item under an "Active" group, showing the change name and creation date from `.openspec.yaml`

#### Scenario: Repository with archived changes
- **WHEN** a repository contains one or more directories under `openspec/archive/`
- **THEN** the sidebar displays those changes under an "Archived" group below the active group

#### Scenario: Repository with no changes
- **WHEN** the `openspec/changes/` directory exists but contains no change subdirectories
- **THEN** the sidebar shows an empty state message within the list area

#### Scenario: openspec/changes directory does not exist
- **WHEN** the loaded repository has no `openspec/changes/` directory at all
- **THEN** the sidebar shows an empty state message indicating no changes have been created yet

#### Scenario: In-progress changes appear in Active group
- **WHEN** a change has status `in-progress` and the filter is set to "Active" or "All"
- **THEN** the change appears in the Active group of the sidebar list

#### Scenario: In-progress changes are excluded from Archived filter
- **WHEN** the user selects the "Archived" filter
- **THEN** changes with status `in-progress` are not shown
