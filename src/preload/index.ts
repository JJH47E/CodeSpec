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
    invoke: (opts: unknown) => ipcRenderer.invoke('cli:invoke', opts),
    cancel: ()             => ipcRenderer.invoke('cli:cancel'),
    write:  (text: string) => ipcRenderer.invoke('cli:write', text),
    // 1.7 — renderer-side listener helper; returns unsubscribe function
    onOutput: (cb: (line: string) => void) => {
      const handler = (_event: unknown, line: string) => cb(line)
      ipcRenderer.on('cli:output', handler as Parameters<typeof ipcRenderer.on>[1])
      return () => ipcRenderer.removeListener('cli:output', handler as Parameters<typeof ipcRenderer.on>[1])
    },
  },
})
