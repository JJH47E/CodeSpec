## Context

`NewProposalSheet` builds the CLI command by hardcoding `/opsx:propose "{description}"` for every tool. This slash command is a Claude Code skill — it is meaningless when passed to `gh copilot suggest` or `gemini`. `ApplyProposalSheet` is slightly better: it branches on `toolId === 'claude-code'` for `/opsx:apply`, but every other tool receives the same generic natural-language fallback regardless of what the tool actually expects. Gemini CLI is not in the `KNOWN_TOOLS` registry at all, so it cannot be auto-detected.

The command-building logic is duplicated (once per sheet) and lives in the renderer, which makes it harder to keep consistent.

## Goals / Non-Goals

**Goals:**
- One place in the codebase that maps `(toolId, operation, params)` → correct command string
- Claude Code continues to use `/opsx:propose` and `/opsx:apply` (slash commands)
- GitHub Copilot CLI and Gemini CLI receive natural-language prompts that accurately describe the OpenSpec task
- Aider receives a natural-language prompt via `--message` (already works; just consolidate)
- Gemini CLI is detectable via the known-tool registry
- Both sheets call the shared utility; no per-sheet branching

**Non-Goals:**
- Adding new IPC channels or changing the tool-invocation pipeline
- Supporting tools beyond the four in the registry (users can still add custom tools manually)
- Changing the `CliTool` schema or how args templates work

## Decisions

### 1 — Shared command-builder module at `src/shared/cliCommands.ts`

A single exported function `buildCliCommand(toolId, operation, params)` returns the correct string for the `{command}` placeholder:

```ts
type Operation =
  | { type: 'propose'; description: string }
  | { type: 'apply';   changeName: string  }

export function buildCliCommand(toolId: string, op: Operation): string
```

Centralising here means both `NewProposalSheet` and `ApplyProposalSheet` import the same function, and adding support for a new tool is a one-line change.

**Alternative considered:** Per-tool command template stored in `CliTool.commandTemplates`. Rejected — it would require a settings UI migration and makes the prefs file responsible for OpenSpec-specific knowledge.

### 2 — Per-tool command strings

| Tool | Propose | Apply |
|------|---------|-------|
| `claude-code` | `/opsx:propose "{description}"` | `/opsx:apply "{changeName}"` |
| `gh-copilot` | Natural-language prompt describing the OpenSpec propose task | Natural-language prompt describing the OpenSpec apply task |
| `gemini` | Natural-language prompt describing the OpenSpec propose task | Natural-language prompt describing the OpenSpec apply task |
| `aider` | Natural-language prompt (same pattern) | Natural-language prompt (same pattern) |
| unknown | Natural-language fallback (same as aider) | Natural-language fallback |

Natural-language propose template:
```
Create a new OpenSpec change proposal for the following request: "{description}".
Set up the change directory under openspec/changes/ with .openspec.yaml, proposal.md, design.md, a specs/ folder, and tasks.md, following the spec-driven OpenSpec workflow.
```

Natural-language apply template:
```
Read openspec/changes/{changeName}/proposal.md, design.md, specs/, and tasks.md,
then implement all incomplete tasks marked "- [ ]", updating each to "- [x]" as you complete it.
```

**Why separate strings and not a single fallback?** The slash-command path and the natural-language path have different information density. Keeping them explicit makes it easy to tune per-tool wording without risk of accidentally changing the Claude Code path.

### 3 — Gemini CLI added to `KNOWN_TOOLS`

```ts
{ id: 'gemini', label: 'Gemini CLI', command: 'gemini', args: ['-p', '{command}'] }
```

`gemini -p "{prompt}"` runs non-interactively. Detection uses `which gemini`, consistent with the other entries.

**Why `-p` and not `--prompt`?** The Gemini CLI short flag `-p` is the documented non-interactive prompt flag and is less likely to conflict with future flags than a long-form variant.

## Risks / Trade-offs

**[Natural-language prompts are not slash commands]** → GitHub Copilot and Gemini will attempt to fulfill the prompt as a coding task but have no knowledge of the OpenSpec file structure conventions. Quality depends on the model. Mitigation: the prompts are explicit about paths and file names; this is the best we can do without native OpenSpec support in those tools.

**[`gh copilot suggest` is shell-command-oriented]** → The `gh copilot suggest` subcommand is designed to suggest shell commands, not author code. A user who adds GitHub Copilot CLI as a tool will find it unsuitable for propose/apply. Mitigation: out of scope for this change — the registry entry exists so the tool can be auto-detected; the user remains responsible for choosing the right tool for the job.

**[Gemini `-p` flag may change]** → If Google changes the non-interactive flag, detection still succeeds but invocation fails. Mitigation: the flag is set in `KNOWN_TOOLS` and is easy to update; no action needed now.
