import type { Prefs, Change, DetectedTool } from '../shared/types'

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
        readArtifact:   (changePath: string, filename: string) => Promise<string | null>
        delete:         (changePath: string) => Promise<{ ok: true } | { error: string }>
        archive:        (changePath: string) => Promise<{ ok: true } | { error: string }>
      }
      cli: {
        invoke:      (opts: { toolId: string; command: string; repoPath: string; cols?: number; rows?: number }) => Promise<{ exitCode: number }>
        cancel:      () => Promise<void>
        write:       (text: string) => Promise<void>
        resize:      (size: { cols: number; rows: number }) => Promise<void>
        detectTools: () => Promise<DetectedTool[]>
        onData:          (cb: (data: string) => void) => () => void
        onProposalReady: (cb: () => void) => () => void
      }
    }
  }
}
