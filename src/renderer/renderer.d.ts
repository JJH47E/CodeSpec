import type { Prefs, Change } from '../shared/types'

export {}

declare global {
  interface Window {
    api: {
      repo: {
        openDirectory: () => Promise<{ path: string } | { error: string } | null>
      }
      prefs: {
        get: () => Promise<Prefs>
        set: (update: Partial<Prefs>) => Promise<void>
      }
      changes: {
        readChangeList: (repoPath: string) => Promise<Change[]>
        readProposal:   (changePath: string) => Promise<string | null>
      }
      cli: {
        invoke:   (opts: { toolId: string; command: string; repoPath: string; cols?: number; rows?: number }) => Promise<{ exitCode: number }>
        cancel:   () => Promise<void>
        write:    (text: string) => Promise<void>
        resize:   (size: { cols: number; rows: number }) => Promise<void>
        onData:   (cb: (data: string) => void) => () => void
      }
    }
  }
}
