## ADDED Requirements

### Requirement: Resolve full login-shell PATH on startup
The system SHALL spawn the user's default login shell with the `-l` flag at app startup to capture the full `PATH` environment variable, including entries added by Homebrew, NVM, pyenv, and similar tools.

#### Scenario: Shell probe succeeds
- **WHEN** the login-shell probe exits 0 and returns a non-empty PATH string
- **THEN** the resolved PATH is stored and used for all subsequent PTY spawns and tool detection calls

#### Scenario: Shell probe fails or times out
- **WHEN** the login-shell probe exits non-zero, produces no output, or exceeds a 3-second timeout
- **THEN** the system falls back to `process.env.PATH` and continues normally without blocking startup

#### Scenario: PATH is applied to PTY spawns
- **WHEN** a CLI tool is invoked via `cli:invoke`
- **THEN** the PTY process is spawned with an `env` containing the resolved PATH rather than the bare Electron process PATH
