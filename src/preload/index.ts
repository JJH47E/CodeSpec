import { contextBridge, ipcRenderer } from 'electron'

// 1.7 — Typed window.api exposed via contextBridge
contextBridge.exposeInMainWorld('api', {
  repo: {
    openDirectory: () =>
      ipcRenderer.invoke('repo:openDirectory') as Promise<{ path: string } | { error: string } | null>,
  },
  prefs: {
    get:  ()             => ipcRenderer.invoke('prefs:get'),
    set:  (update: unknown) => ipcRenderer.invoke('prefs:set', update),
  },
  changes: {
    readChangeList: (repoPath: string)  => ipcRenderer.invoke('changes:readChangeList', repoPath),
    readProposal:   (changePath: string) => ipcRenderer.invoke('changes:readProposal', changePath),
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
  },
})
