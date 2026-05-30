## Requirements

### Requirement: Build tool-appropriate propose command
The system SHALL provide a shared `buildCliCommand` function that, given a tool ID and a propose operation with a description string, returns the correct command string to substitute into the `{command}` placeholder. For `claude-code` it SHALL return `/opsx:propose "{description}"`. For all other tool IDs it SHALL return a natural-language prompt that instructs the AI to create an OpenSpec change under `openspec/changes/`.

#### Scenario: Claude Code propose command
- **WHEN** `buildCliCommand` is called with `toolId = "claude-code"` and `operation = { type: "propose", description: "add user auth" }`
- **THEN** the returned string is `/opsx:propose "add user auth"`

#### Scenario: GitHub Copilot propose command
- **WHEN** `buildCliCommand` is called with `toolId = "gh-copilot"` and a propose operation
- **THEN** the returned string is a natural-language prompt (not a slash command) that describes creating an OpenSpec change for the given description

#### Scenario: Gemini CLI propose command
- **WHEN** `buildCliCommand` is called with `toolId = "gemini"` and a propose operation
- **THEN** the returned string is a natural-language prompt describing the OpenSpec propose task

#### Scenario: Unknown tool propose command
- **WHEN** `buildCliCommand` is called with an unrecognised tool ID and a propose operation
- **THEN** the returned string is the same natural-language fallback used for non-Claude-Code tools

### Requirement: Build tool-appropriate apply command
The system SHALL provide the same `buildCliCommand` function handling an apply operation with a change name. For `claude-code` it SHALL return `/opsx:apply "{changeName}"`. For all other tool IDs it SHALL return a natural-language prompt that instructs the AI to read the change's artifacts and implement all incomplete tasks.

#### Scenario: Claude Code apply command
- **WHEN** `buildCliCommand` is called with `toolId = "claude-code"` and `operation = { type: "apply", changeName: "my-feature" }`
- **THEN** the returned string is `/opsx:apply "my-feature"`

#### Scenario: Non-Claude-Code apply command
- **WHEN** `buildCliCommand` is called with `toolId = "gemini"` and an apply operation for change `"my-feature"`
- **THEN** the returned string instructs the AI to read `openspec/changes/my-feature/` and implement incomplete tasks, marking each done as it completes

### Requirement: NewProposalSheet uses shared command builder
The system SHALL construct the propose command via `buildCliCommand` rather than hardcoding `/opsx:propose`, so the correct command is sent regardless of which CLI tool is selected.

#### Scenario: Propose with Claude Code selected
- **WHEN** the user submits a new proposal with Claude Code selected as the tool
- **THEN** the invoked command string is `/opsx:propose "{description}"`

#### Scenario: Propose with a non-Claude-Code tool selected
- **WHEN** the user submits a new proposal with GitHub Copilot or Gemini selected
- **THEN** the invoked command string is a natural-language prompt, not a slash command

### Requirement: ApplyProposalSheet uses shared command builder
The system SHALL construct the apply command via `buildCliCommand`, replacing the inline `buildCommand()` function, so both sheets share the same per-tool logic.

#### Scenario: Apply with Claude Code selected
- **WHEN** the user triggers apply with Claude Code selected
- **THEN** the invoked command string is `/opsx:apply "{changeName}"`

#### Scenario: Apply with a non-Claude-Code tool selected
- **WHEN** the user triggers apply with GitHub Copilot or Gemini selected
- **THEN** the invoked command string is a natural-language prompt describing the apply task
