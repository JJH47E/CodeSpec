export type Operation =
  | { type: 'propose'; description: string }
  | { type: 'apply';   changeName: string  }

export function buildCliCommand(toolId: string, op: Operation): string {
  if (toolId === 'claude-code') {
    if (op.type === 'propose') return `/opsx:propose "${op.description}"`
    return `/opsx:apply "${op.changeName}"`
  }

  if (op.type === 'propose') {
    return (
      `Create a new OpenSpec change proposal for the following request: "${op.description}". ` +
      `Set up the change directory under openspec/changes/ with .openspec.yaml, proposal.md, design.md, ` +
      `a specs/ folder, and tasks.md, following the spec-driven OpenSpec workflow.`
    )
  }

  return (
    `Read openspec/changes/${op.changeName}/proposal.md, design.md, specs/, and tasks.md, ` +
    `then implement all incomplete tasks marked "- [ ]", updating each to "- [x]" as you complete it.`
  )
}
