## ADDED Requirements

### Requirement: Kill CLI process when modal is dismissed
The system SHALL call `cli.cancel()` on every modal-dismiss path in both the New Proposal and Continue Conversation sheets, ensuring the underlying PTY process is terminated when the modal closes regardless of the current session phase.

#### Scenario: User closes modal via X button while process is running
- **WHEN** the user clicks the X button in the modal header while a CLI process is running
- **THEN** the CLI process is killed and the modal unmounts

#### Scenario: User clicks outside the modal while process is not running
- **WHEN** the user clicks the overlay backdrop while no CLI process is running
- **THEN** `cli.cancel()` is called (as a safe no-op) and the modal closes

#### Scenario: User closes modal after successful session
- **WHEN** the session completed successfully and the user clicks Done
- **THEN** `cli.cancel()` is called before the modal unmounts (no-op since process already exited)

#### Scenario: User closes modal after error state
- **WHEN** the CLI process exited with a non-zero code and the user clicks Close
- **THEN** `cli.cancel()` is called before the modal unmounts
