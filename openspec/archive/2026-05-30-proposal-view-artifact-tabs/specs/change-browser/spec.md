## MODIFIED Requirements

### Requirement: Display change detail in main pane
The system SHALL render the contents of a selected change's artifact files in the main detail pane via a tab bar. The Proposal tab (showing `proposal.md`) SHALL be selected by default. Additional tabs for `design.md` and `tasks.md` SHALL be available.

#### Scenario: User selects a change
- **WHEN** the user clicks a change in the sidebar
- **THEN** the main pane renders the change's `proposal.md` content with basic formatting (headings, bold, bullet lists)
- **AND** a tab bar with "Proposal", "Design", and "Tasks" tabs is visible at the top of the content area

#### Scenario: Change has no proposal.md
- **WHEN** the selected change directory does not contain a `proposal.md` file
- **THEN** the main pane shows a placeholder message indicating the proposal has not been written yet

#### Scenario: No change selected
- **WHEN** a repository is loaded but no change has been selected yet
- **THEN** the main pane shows a neutral empty state prompting the user to select a change
