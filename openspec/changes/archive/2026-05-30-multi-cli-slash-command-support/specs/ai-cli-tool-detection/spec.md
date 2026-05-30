## MODIFIED Requirements

### Requirement: Known-tool registry covers major AI CLI tools
The system SHALL include at minimum the following entries in the known-tool registry: Claude Code (`claude`), Aider (`aider`), GitHub Copilot CLI extension (`gh` with `copilot suggest`-style args), and Gemini CLI (`gemini` with `-p` flag).

#### Scenario: Claude Code is installed
- **WHEN** `claude` resolves via `which` on the resolved PATH
- **THEN** the detected tool entry has label "Claude Code", command "claude", and args `["{command}"]`

#### Scenario: Aider is installed
- **WHEN** `aider` resolves via `which` on the resolved PATH
- **THEN** the detected tool entry has label "Aider", command "aider", and args `["--message", "{command}"]`

#### Scenario: GitHub Copilot CLI is installed
- **WHEN** `gh` resolves via `which` on the resolved PATH
- **THEN** the detected tool entry has label "GitHub Copilot", command "gh", and args `["copilot", "suggest", "{command}"]`

#### Scenario: Gemini CLI is installed
- **WHEN** `gemini` resolves via `which` on the resolved PATH
- **THEN** the detected tool entry has label "Gemini CLI", command "gemini", and args `["-p", "{command}"]`
