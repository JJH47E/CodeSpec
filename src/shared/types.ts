export interface CliTool {
  id: string
  label: string
  command: string
  args: string[]
}

export interface Prefs {
  repoPath: string | null
  cliTools: CliTool[]
  defaultTool: string | null
}

export interface Change {
  name: string
  path: string
  status: 'active' | 'archived'
  createdAt: string
  schema: string
}
