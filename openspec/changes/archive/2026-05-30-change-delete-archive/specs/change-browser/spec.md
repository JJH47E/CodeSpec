## ADDED Requirements

### Requirement: Refresh change list after lifecycle action
The system SHALL refresh the sidebar change list and clear the selected change after a successful delete or archive action, returning the detail pane to the empty state.

#### Scenario: Change list refreshes after delete
- **WHEN** a change is successfully deleted
- **THEN** the sidebar re-reads `openspec/changes/` and the deleted change no longer appears

#### Scenario: Change list refreshes after archive
- **WHEN** a change is successfully archived
- **THEN** the sidebar re-reads both `openspec/changes/` and `openspec/archive/`, the change appears under the Archived group, and the detail pane shows the empty state
