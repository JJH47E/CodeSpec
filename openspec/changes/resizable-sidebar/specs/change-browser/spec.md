## MODIFIED Requirements

### Requirement: List active and archived changes in sidebar
The system SHALL read the `openspec/changes/` and `openspec/archive/` directories of the active repository and render the discovered changes in a sidebar list, grouped by status. Changes with status `in-progress` or `done` SHALL appear within the Active group alongside `active` changes. The sidebar width SHALL be user-adjustable via a drag handle on its right edge.

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

#### Scenario: Done changes appear in Active group
- **WHEN** a change has status `done` and the filter is set to "Active" or "All"
- **THEN** the change appears in the Active group of the sidebar list

#### Scenario: In-progress changes are excluded from Archived filter
- **WHEN** the user selects the "Archived" filter
- **THEN** changes with status `in-progress` are not shown

#### Scenario: Done changes are excluded from Archived filter
- **WHEN** the user selects the "Archived" filter
- **THEN** changes with status `done` are not shown
