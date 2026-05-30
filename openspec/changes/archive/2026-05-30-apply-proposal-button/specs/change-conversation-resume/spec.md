## ADDED Requirements

### Requirement: Apply Proposal button coexists with Continue button
The system SHALL render both the "Apply Proposal" and "Continue" buttons in the `ChangeDetail` header for active changes, with Apply Proposal appearing before Continue.

#### Scenario: Both buttons visible for active change
- **WHEN** an active change is selected
- **THEN** both "Apply Proposal" and "Continue" buttons are visible in the change detail header

#### Scenario: Neither button visible for archived change
- **WHEN** an archived change is selected
- **THEN** neither "Apply Proposal" nor "Continue" buttons are shown
