## Why

When a user opens a directory that doesn't have OpenSpec initialized, the app currently dead-ends with an error message. This misses an opportunity to convert interested users into active ones — a guided onboarding flow can take them from "no OpenSpec" to a running, baseline-generated project without ever leaving the app.

## What Changes

- When a directory without `openspec/` is opened, the app enters an onboarding flow instead of showing a static error
- The onboarding flow walks the user step-by-step: explains OpenSpec, prompts npm install + `openspec init` (with monorepo vs single-app selection), guides CLI tool registration, runs the baseline generation command via the registered CLI tool, and ends with a quick how-to on creating and applying proposals
- If the user abandons onboarding at any step, the project is deselected and the app returns to the repository-selector empty state prompting them to pick another project
- The existing "directory is not an OpenSpec repository" error scenario is replaced by this flow

## Capabilities

### New Capabilities
- `openspec-onboarding`: Multi-step onboarding wizard shown when an unopened project is selected — covers explanation, npm install, `openspec init`, CLI tool setup, and baseline generation via CLI invocation

### Modified Capabilities
- `repository-selector`: The scenario where a user selects a directory without `openspec/` now transitions to the onboarding flow instead of showing a static inline error; abandoning onboarding deselects the project and returns to the no-repository empty state

## Impact

- `src/renderer/` — new onboarding wizard component and step sub-components
- Repository selector logic — detect uninitialized projects and hand off to onboarding instead of erroring
- CLI tool detection and registration — onboarding reuses existing `cli:detectTools` IPC and tool-manager flows
- CLI invocation infrastructure — baseline generation step uses the PTY-backed CLI session already in place
- No new IPC channels required; no breaking changes to existing initialized-project paths
