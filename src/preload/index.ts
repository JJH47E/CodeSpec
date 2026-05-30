import { contextBridge, ipcRenderer } from 'electron'

// 1.7 — Typed window.api exposed via contextBridge
contextBridge.exposeInMainWorld('api', {
  repo: {
    openDirectory: () =>
      ipcRenderer.invoke('repo:openDirectory') as Promise<{ path: string } | { error: string; path: string } | null>,
    listPackages: (dirPath: string) =>
      ipcRenderer.invoke('repo:listPackages', dirPath) as Promise<{ name: string; path: string }[]>,
    hasAppFiles: (dirPath: string) =>
      ipcRenderer.invoke('repo:hasAppFiles', dirPath) as Promise<boolean>,
    checkPath: (p: string) =>
      ipcRenderer.invoke('repo:checkPath', p) as Promise<boolean>,
    dirHasEntries: (dirPath: string) =>
      ipcRenderer.invoke('repo:dirHasEntries', dirPath) as Promise<boolean>,
  },
  prefs: {
    get:  ()             => ipcRenderer.invoke('prefs:get'),
    set:  (update: unknown) => ipcRenderer.invoke('prefs:set', update),
  },
  changes: {
    readChangeList: (repoPath: string)  => ipcRenderer.invoke('changes:readChangeList', repoPath),
    readProposal:   (changePath: string) => ipcRenderer.invoke('changes:readProposal', changePath),
    readArtifact:   (changePath: string, filename: string) => ipcRenderer.invoke('changes:readArtifact', changePath, filename),
    delete:         (changePath: string) => ipcRenderer.invoke('changes:delete', changePath),
    archive:        (changePath: string) => ipcRenderer.invoke('changes:archive', changePath),
  },
  cli: {
    invoke:      (opts: unknown) => ipcRenderer.invoke('cli:invoke', opts),
    cancel:      ()             => ipcRenderer.invoke('cli:cancel'),
    write:       (text: string) => ipcRenderer.invoke('cli:write', text),
    resize:      (size: { cols: number; rows: number }) => ipcRenderer.invoke('cli:resize', size),
    detectTools: ()             => ipcRenderer.invoke('cli:detectTools'),
    onData: (cb: (data: string) => void) => {
      const handler = (_event: unknown, data: string) => cb(data)
      ipcRenderer.on('cli:data', handler as Parameters<typeof ipcRenderer.on>[1])
      return () => ipcRenderer.removeListener('cli:data', handler as Parameters<typeof ipcRenderer.on>[1])
    },
    onProposalReady: (cb: () => void) => {
      const handler = () => cb()
      ipcRenderer.on('cli:proposalReady', handler as Parameters<typeof ipcRenderer.on>[1])
      return () => ipcRenderer.removeListener('cli:proposalReady', handler as Parameters<typeof ipcRenderer.on>[1])
    },
  },
  onboard: {
    exec: (opts: { command: string; args: string[]; cwd: string; cols?: number; rows?: number }) =>
      ipcRenderer.invoke('onboard:exec', opts) as Promise<{ exitCode: number }>,
    cancel: () => ipcRenderer.invoke('onboard:cancel'),
    write: (text: string) => ipcRenderer.invoke('onboard:write', text),
    resize: (size: { cols: number; rows: number }) => ipcRenderer.invoke('onboard:resize', size),
    onData: (cb: (data: string) => void) => {
      const handler = (_event: unknown, data: string) => cb(data)
      ipcRenderer.on('onboard:data', handler as Parameters<typeof ipcRenderer.on>[1])
      return () => ipcRenderer.removeListener('onboard:data', handler as Parameters<typeof ipcRenderer.on>[1])
    },
  },
})
