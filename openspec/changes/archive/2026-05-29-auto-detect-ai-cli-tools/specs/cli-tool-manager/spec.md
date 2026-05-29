## MODIFIED Requirements

### Requirement: Register a CLI tool
The system SHALL allow the user to add an AI CLI tool. When the Settings sheet is opened, the system SHALL request detected tools via `cli:detectTools` and display a "Quick add" dropdown listing detected tools. Selecting a detected tool pre-populates the add form with the tool's default label, command, and args. The user MAY still enter tool details manually by choosing "Enter manually" from the dropdown or by typing directly into the form fields.

#### Scenario: User quick-adds a detected tool
- **WHEN** the Settings sheet opens and one or more tools are detected, and the user selects a tool from the "Quick add" dropdown
- **THEN** the add form opens pre-filled with the tool's default label, command, and args

#### Scenario: User manually adds a tool when none are detected
- **WHEN** the Settings sheet opens and no tools are detected
- **THEN** the "Add Tool" flow falls back to the manual form with no dropdown shown

#### Scenario: User chooses manual entry despite detected tools being available
- **WHEN** detected tools are shown in the dropdown and the user selects "Enter manually"
- **THEN** the add form opens empty, ready for manual input

#### Scenario: User submits an incomplete form
- **WHEN** the user attempts to save a tool with a missing name, command, or args template
- **THEN** each missing field shows an inline validation error and the form is not saved

#### Scenario: Args template missing {command} placeholder
- **WHEN** the user enters an args template that does not contain the `{command}` placeholder
- **THEN** an inline warning is shown explaining that `{command}` is required for OpenSpec invocations

#### Scenario: Detection is in progress when Settings opens
- **WHEN** the Settings sheet opens before `cli:detectTools` has resolved
- **THEN** the Quick add dropdown shows a loading state until detection completes, then updates with results
