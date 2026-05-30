## Requirements

### Requirement: Render CLI output in a full-featured terminal widget
The system SHALL display CLI process output inside an xterm.js terminal widget that preserves ANSI colour, bold, cursor movement, and screen-clearing sequences.

#### Scenario: ANSI-formatted output is rendered with colour
- **WHEN** the CLI tool emits text containing ANSI colour escape sequences
- **THEN** the terminal widget displays the text with the correct colours applied, not as raw escape characters

#### Scenario: Cursor movement sequences produce correct layout
- **WHEN** the CLI tool emits cursor-movement or screen-clearing control sequences
- **THEN** the terminal widget moves the cursor or clears the screen accordingly, matching standard VT100 behaviour

#### Scenario: Output scrolls as content grows
- **WHEN** the CLI process emits enough output to exceed the visible terminal area
- **THEN** the terminal widget auto-scrolls to keep the latest output in view

### Requirement: Accept user keyboard input during a running session
The system SHALL forward keyboard input typed into the terminal widget to the running CLI process's PTY stdin, so the user can respond to prompts without restarting the invocation.

#### Scenario: User responds to an interactive prompt
- **WHEN** a CLI process is running and emits a prompt requiring user input
- **THEN** text the user types in the terminal widget is sent to the process's stdin in real time

#### Scenario: User sends EOF or interrupt signal
- **WHEN** the user presses Ctrl+C in the terminal widget while a process is running
- **THEN** the interrupt signal (SIGINT) is forwarded to the CLI process

### Requirement: Keep terminal dimensions in sync with widget size
The system SHALL inform the PTY of the terminal's column and row count whenever the terminal widget is resized, so line-wrapping and layout in the CLI tool match the visible area.

#### Scenario: User resizes the sheet containing the terminal
- **WHEN** the sheet or pane containing the terminal widget is resized
- **THEN** the PTY process receives an updated (cols, rows) value matching the new dimensions within one animation frame

#### Scenario: Terminal initialised with correct size
- **WHEN** the terminal widget is first mounted
- **THEN** the PTY is started with cols/rows derived from the widget's initial rendered size, not a hardcoded default

### Requirement: Run CLI processes in a real pseudo-terminal
The system SHALL spawn CLI tool processes via node-pty so that the process's stdout is connected to a PTY and `isatty()` returns true, enabling ANSI output and interactive behaviour in tools that disable these features when not connected to a terminal.

#### Scenario: CLI tool detects a TTY
- **WHEN** a CLI process is spawned via the system
- **THEN** calling `isatty(1)` (or the equivalent check) inside that process returns true

#### Scenario: Process exit is reported
- **WHEN** the CLI process exits (normally or via cancel)
- **THEN** the IPC invoke call resolves with the process's exit code and the terminal widget enters a non-interactive ended state

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
