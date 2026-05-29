## MODIFIED Requirements

### Requirement: Invoke a CLI tool and stream output to the terminal
The system SHALL invoke the selected CLI tool via a PTY-backed process, streaming raw terminal data to the xterm.js widget in the renderer, and accepting user keyboard input forwarded to the process stdin for the duration of the session.

#### Scenario: User triggers a CLI invocation
- **WHEN** the user submits a command in the proposal sheet with a valid tool selected
- **THEN** the system spawns the tool in a PTY with the correct working directory and the terminal widget begins receiving output

#### Scenario: User sends a follow-up response mid-run
- **WHEN** the CLI process is running and the user types in the terminal widget
- **THEN** the keystrokes are forwarded to the process's PTY stdin in real time

#### Scenario: User cancels a running invocation
- **WHEN** the user clicks Cancel while a CLI process is running
- **THEN** the PTY process is terminated and the terminal widget shows no further output
