## ADDED Requirements

### Requirement: Display onboarding wizard for uninitialized projects
The system SHALL display a full-screen, multi-step onboarding wizard when the user selects a directory that does not contain an `openspec/` folder, in place of a static error message.

#### Scenario: User opens an uninitialized directory
- **WHEN** the user selects a directory via the OS file picker and the directory does not contain an `openspec/` folder
- **THEN** the app transitions to the onboarding wizard full-screen view, passing the selected directory path as the target project

#### Scenario: Wizard renders step indicator
- **WHEN** the onboarding wizard is displayed
- **THEN** a step indicator shows all wizard steps and highlights the current step

---

### Requirement: Welcome step explains OpenSpec
The system SHALL present a welcome step that explains what OpenSpec is and what the onboarding flow will accomplish, before asking the user to take any action.

#### Scenario: User sees welcome step on entry
- **WHEN** the onboarding wizard is first shown
- **THEN** the welcome step is displayed with a description of OpenSpec and a summary of the setup steps the wizard will perform

#### Scenario: User proceeds from welcome
- **WHEN** the user clicks "Get Started" on the welcome step
- **THEN** the wizard advances to the npm install step

---

### Requirement: npm install step guides package installation
The system SHALL guide the user through installing the OpenSpec npm package by running `npm install -g openspec` in an embedded PTY terminal within the wizard.

#### Scenario: User initiates npm install
- **WHEN** the user clicks "Install" on the npm install step
- **THEN** the wizard spawns `npm install -g openspec` in a PTY-backed embedded terminal and streams the output

#### Scenario: npm install succeeds
- **WHEN** the npm install process exits with code 0
- **THEN** the wizard marks the step complete and enables the "Continue" button

#### Scenario: npm install fails
- **WHEN** the npm install process exits with a non-zero code
- **THEN** the wizard shows an error state with a "Retry" button; the user may retry or abandon onboarding

---

### Requirement: Init step runs openspec init in the project
The system SHALL run `openspec init` in the selected directory via a PTY-backed terminal to initialize the OpenSpec folder structure, with support for both single-application repositories and monorepos.

#### Scenario: User is prompted to choose repo type
- **WHEN** the wizard reaches the init step
- **THEN** the user is shown a choice between "Single app" and "Monorepo" before the init command runs

#### Scenario: Single-app init
- **WHEN** the user selects "Single app" and clicks "Initialize"
- **THEN** the wizard runs `openspec init` in the selected directory root and streams the output in an embedded terminal

#### Scenario: Monorepo init — user selects packages
- **WHEN** the user selects "Monorepo" and the wizard detects `package.json` files in subdirectories
- **THEN** the wizard displays a checklist of detected sub-packages so the user can choose which ones to initialize

#### Scenario: Monorepo init runs per selected package
- **WHEN** the user confirms their package selection and clicks "Initialize"
- **THEN** the wizard runs `openspec init` sequentially in each selected sub-package directory and streams output for each run

#### Scenario: Init succeeds
- **WHEN** all `openspec init` processes exit with code 0
- **THEN** the wizard marks the step complete and enables "Continue"

#### Scenario: Init fails
- **WHEN** any `openspec init` process exits with a non-zero code
- **THEN** the wizard shows an error state with a "Retry" button

---

### Requirement: CLI tool setup step registers a tool
The system SHALL guide the user to register a CLI tool during onboarding using an inline, simplified tool-registration form within the wizard (not the full Settings sheet).

#### Scenario: Auto-detection finds tools
- **WHEN** the wizard reaches the CLI tool step
- **THEN** it calls `cli:detectTools`, and if tools are found, displays a picker pre-filled with the first detected tool's defaults

#### Scenario: User confirms a detected tool
- **WHEN** the user selects a detected tool and clicks "Add Tool"
- **THEN** the tool is saved to prefs as the default CLI tool and the wizard advances

#### Scenario: No tools are auto-detected
- **WHEN** `cli:detectTools` returns an empty array
- **THEN** the wizard shows a manual entry form for label, command, and args

#### Scenario: User manually enters a tool
- **WHEN** the user completes the manual form and clicks "Add Tool"
- **THEN** the tool is saved to prefs as the default CLI tool and the wizard advances

#### Scenario: User skips tool setup
- **WHEN** the user clicks "Skip for now" on the CLI tool step
- **THEN** the wizard advances without registering a tool, and baseline generation is skipped in the next step

---

### Requirement: Baseline generation step runs the CLI tool
The system SHALL run the OpenSpec baseline generation command via the registered CLI tool, so the project has a starting baseline before the user creates any changes.

#### Scenario: Baseline runs via registered tool
- **WHEN** a CLI tool was registered in the previous step
- **THEN** the wizard invokes the tool with the `openspec baseline` command using the PTY-backed terminal session and streams the output

#### Scenario: Baseline succeeds
- **WHEN** the CLI tool process exits with code 0
- **THEN** the wizard marks the step complete and enables "Finish"

#### Scenario: Baseline fails
- **WHEN** the CLI tool process exits with a non-zero code
- **THEN** the wizard shows an error state with a "Retry" button; the user may also skip and finish without a baseline

#### Scenario: Baseline step skipped (no CLI tool)
- **WHEN** the user skipped the CLI tool step
- **THEN** the baseline generation step is shown as skipped with an explanation that the user can run it later from Settings

---

### Requirement: Proposal how-to step introduces the core workflow
The system SHALL display a concise, interactive how-to that explains how to create and apply a proposal before completing onboarding, so the user understands the core CodeSpec workflow.

#### Scenario: How-to is shown after baseline
- **WHEN** the baseline step is complete (or skipped)
- **THEN** the wizard displays the how-to step explaining the create-proposal → apply-proposal cycle with a brief annotated walkthrough

#### Scenario: User completes how-to
- **WHEN** the user clicks "Finish" on the how-to step
- **THEN** the wizard completes onboarding and transitions the app to the main shell with the newly initialized project loaded

---

### Requirement: Abandoning onboarding deselects the project
The system SHALL allow the user to abandon onboarding at any step, resulting in the project being deselected and the app returning to the no-repository empty state.

#### Scenario: User abandons during onboarding
- **WHEN** the user clicks "Cancel" or "Back to project selector" at any step in the wizard
- **THEN** the `pendingOnboardingPath` is cleared, no repo is loaded, and the app renders the `RepoSelectorScreen` empty state

#### Scenario: Previously loaded repo is preserved after abandonment
- **WHEN** the user had a previously loaded repo, then opens an uninitialized directory and abandons onboarding
- **THEN** the previously loaded repo is NOT automatically restored; the user sees the empty state and must re-open a repository
