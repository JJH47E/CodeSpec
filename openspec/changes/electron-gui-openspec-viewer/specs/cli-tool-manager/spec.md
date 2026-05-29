## ADDED Requirements

### Requirement: Register a CLI tool
The system SHALL allow the user to add an AI CLI tool by providing a display name, the executable command, and an invocation argument template containing the `{command}` placeholder.

#### Scenario: User adds a valid tool
- **WHEN** the user fills in a tool name, command, and args template containing `{command}` and saves
- **THEN** the tool is persisted to app preferences and appears in the CLI tool list

#### Scenario: User submits an incomplete form
- **WHEN** the user attempts to save a tool with a missing name, command, or args template
- **THEN** each missing field shows an inline validation error and the form is not saved

#### Scenario: Args template missing {command} placeholder
- **WHEN** the user enters an args template that does not contain the `{command}` placeholder
- **THEN** an inline warning is shown explaining that `{command}` is required for OpenSpec invocations

### Requirement: Edit and remove CLI tools
The system SHALL allow the user to edit or remove any registered CLI tool.

#### Scenario: User edits a tool
- **WHEN** the user clicks edit on a registered tool, modifies a field, and saves
- **THEN** the tool record is updated in preferences

#### Scenario: User removes a tool that is not the default
- **WHEN** the user clicks remove on a non-default tool and confirms
- **THEN** the tool is removed from the list

#### Scenario: User removes the default tool
- **WHEN** the user removes the tool that is currently set as default
- **THEN** the system clears the default and prompts the user to set a new default before the next CLI invocation

### Requirement: Set a default CLI tool
The system SHALL allow the user to designate one registered tool as the default. The default tool is pre-selected whenever a CLI invocation is required.

#### Scenario: User sets a default
- **WHEN** the user marks a tool as default
- **THEN** that tool is stored as `defaultTool` in preferences and shown with a "Default" badge in the list

#### Scenario: No default set
- **WHEN** no default tool is configured and a CLI invocation is triggered
- **THEN** the app prompts the user to select a tool from the registered list before proceeding

### Requirement: Access tool configuration from the header
The system SHALL provide a settings control in the app header that opens the CLI tool configuration panel.

#### Scenario: User opens settings
- **WHEN** the user clicks the settings icon in the header
- **THEN** a settings panel or sheet opens showing the registered CLI tools and controls to add, edit, or remove them

#### Scenario: No tools registered — settings opened for the first time
- **WHEN** the user opens settings with no tools registered
- **THEN** the panel shows an empty state with a prominent "Add Tool" button and a hint showing an example configuration (e.g. Claude Code)
