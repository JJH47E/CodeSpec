## Why

`NewProposalSheet` hardcodes `/opsx:propose` for every CLI tool, but that slash command only works in Claude Code. GitHub Copilot CLI and Gemini CLI require different invocation formats, so triggering either tool for a propose action sends a command that does nothing useful. The apply path has partial per-tool logic (`claude-code` gets `/opsx:apply`, everything else gets a generic fallback), but neither GitHub Copilot nor Gemini has a tailored prompt — and Gemini isn't in the known-tool registry at all.

## What Changes

- **Add per-tool command-building utility** (`src/shared/cliCommands.ts`) that maps tool IDs to correct propose and apply command strings, covering Claude Code, GitHub Copilot CLI, Gemini CLI, and Aider.
- **Fix `NewProposalSheet`** to call the shared utility instead of hardcoding `/opsx:propose`.
- **Fix `ApplyProposalSheet`** to use the same utility, replacing the inline `buildCommand()` switch.
- **Add Gemini CLI to the known-tool registry** in `main/index.ts` (currently absent).

## Capabilities

### New Capabilities

- `per-tool-command-routing`: Shared logic that produces the correct CLI command string for a given tool ID and operation (propose / apply). Each tool gets either its native slash command (Claude Code) or a self-contained natural-language prompt that describes the OpenSpec task.

### Modified Capabilities

- `ai-cli-tool-detection`: Extend the `KNOWN_TOOLS` registry to include Gemini CLI (`gemini -p {command}`).

## Impact

- `src/shared/cliCommands.ts` — new file
- `src/main/index.ts` — add Gemini entry to `KNOWN_TOOLS`
- `src/renderer/NewProposalSheet.tsx` — replace hardcoded command with shared utility call
- `src/renderer/ApplyProposalSheet.tsx` — replace inline `buildCommand()` with shared utility call
- No IPC changes; no new dependencies
