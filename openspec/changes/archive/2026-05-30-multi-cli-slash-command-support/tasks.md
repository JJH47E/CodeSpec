## 1. Shared command-builder module

- [x] 1.1 Create `src/shared/cliCommands.ts` exporting `buildCliCommand(toolId, operation)` with the `Operation` union type
- [x] 1.2 Implement Claude Code branch: propose returns `/opsx:propose "{description}"`, apply returns `/opsx:apply "{changeName}"`
- [x] 1.3 Implement natural-language fallback branch for all other tool IDs (propose and apply templates)

## 2. Registry update

- [x] 2.1 Add Gemini CLI entry to `KNOWN_TOOLS` in `src/main/index.ts`: `{ id: 'gemini', label: 'Gemini CLI', command: 'gemini', args: ['-p', '{command}'] }`

## 3. Fix NewProposalSheet

- [x] 3.1 Import `buildCliCommand` in `src/renderer/NewProposalSheet.tsx`
- [x] 3.2 Replace the hardcoded `/opsx:propose "${escapedDesc}"` with a call to `buildCliCommand(toolId, { type: 'propose', description: escapedDesc })`

## 4. Fix ApplyProposalSheet

- [x] 4.1 Import `buildCliCommand` in `src/renderer/ApplyProposalSheet.tsx`
- [x] 4.2 Replace the inline `buildCommand()` function with a call to `buildCliCommand(toolId, { type: 'apply', changeName })`
- [x] 4.3 Remove the now-unused `buildCommand` function declaration
