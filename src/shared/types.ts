export interface CliTool {
  id: string
  label: string
  command: string
  args: string[]
}

export type DetectedTool = CliTool

export interface Prefs {
  repoPath: string | null
  cliTools: CliTool[]
  defaultTool: string | null
  perChangeTool: Record<string, string>
}

export interface Change {
  name: string
  path: string
  status: 'active' | 'in-progress' | 'done' | 'archived'
  createdAt: string
  schema: string
}
