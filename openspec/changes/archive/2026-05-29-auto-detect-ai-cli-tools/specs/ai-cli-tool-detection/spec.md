## ADDED Requirements

### Requirement: Probe known AI CLI tools via PATH
The system SHALL maintain a static registry of known AI CLI tools and, when detection is requested, probe each entry by running `which <command>` using the resolved login-shell PATH. Each tool found is returned as a `DetectedTool` with its pre-configured label, command, and args defaults.

#### Scenario: One or more tools are installed
- **WHEN** `cli:detectTools` is called and at least one known tool's command resolves via `which`
- **THEN** the IPC handler returns an array of `DetectedTool` objects for each found tool, in registry order

#### Scenario: No known tools are installed
- **WHEN** `cli:detectTools` is called and no known tool command resolves via `which`
- **THEN** the IPC handler returns an empty array

#### Scenario: Detection results are cached
- **WHEN** `cli:detectTools` is called more than once in the same app session
- **THEN** the second and subsequent calls return the cached result without re-probing the filesystem

### Requirement: Known-tool registry covers major AI CLI tools
The system SHALL include at minimum the following entries in the known-tool registry: Claude Code (`claude`), Aider (`aider`), and GitHub Copilot CLI extension (`gh` with `copilot suggest`-style args).

#### Scenario: Claude Code is installed
- **WHEN** `claude` resolves via `which` on the resolved PATH
- **THEN** the detected tool entry has label "Claude Code", command "claude", and args "-p {command}"

#### Scenario: Aider is installed
- **WHEN** `aider` resolves via `which` on the resolved PATH
- **THEN** the detected tool entry has label "Aider", command "aider", and args "--message {command}"
