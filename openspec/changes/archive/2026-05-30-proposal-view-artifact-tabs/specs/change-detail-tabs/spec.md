## ADDED Requirements

### Requirement: Tab bar for artifact navigation
The change detail pane SHALL display a tab bar with three tabs — Proposal, Design, and Tasks — allowing the user to switch between the corresponding artifact files for the selected change.

#### Scenario: Tab bar is visible when a change is selected
- **WHEN** the user selects a change from the sidebar
- **THEN** a tab bar with "Proposal", "Design", and "Tasks" tabs is rendered at the top of the detail content area

#### Scenario: Proposal tab is active by default
- **WHEN** the user selects a change
- **THEN** the "Proposal" tab is active and the proposal.md content is displayed

#### Scenario: User switches to Design tab
- **WHEN** the user clicks the "Design" tab
- **THEN** the design.md content for the selected change is rendered in the content area

#### Scenario: User switches to Tasks tab
- **WHEN** the user clicks the "Tasks" tab
- **THEN** the tasks.md content for the selected change is rendered in the content area

### Requirement: Empty state for missing artifact files
For any tab whose corresponding artifact file does not exist, the system SHALL display an empty state message rather than hiding the tab.

#### Scenario: Design artifact does not exist
- **WHEN** the user clicks the "Design" tab and the change has no design.md file
- **THEN** the content area shows a neutral placeholder (e.g., "No design document yet.") instead of an error

#### Scenario: Tasks artifact does not exist
- **WHEN** the user clicks the "Tasks" tab and the change has no tasks.md file
- **THEN** the content area shows a neutral placeholder (e.g., "No tasks written yet.") instead of an error

### Requirement: Tab resets on change selection
The active tab SHALL reset to "Proposal" whenever the user selects a different change.

#### Scenario: User selects a second change while Design tab is active
- **WHEN** the Design tab is active and the user clicks a different change in the sidebar
- **THEN** the active tab switches back to "Proposal" and the new change's proposal.md is displayed
