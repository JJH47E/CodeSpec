## MODIFIED Requirements

### Requirement: Refresh change list
The system SHALL provide a manual refresh control so the user can reload changes after external modifications. The control SHALL display a refresh icon and be labelled "Refresh" so its purpose is unambiguous.

#### Scenario: User triggers refresh
- **WHEN** the user clicks the refresh button in the header
- **THEN** the system re-reads `openspec/changes/` and `openspec/archive/` from disk
- **AND** the sidebar list is updated to reflect the current state
