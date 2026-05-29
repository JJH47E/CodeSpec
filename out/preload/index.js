"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("api", {
  repo: {
    openDirectory: () => electron.ipcRenderer.invoke("repo:openDirectory")
  },
  prefs: {
    get: () => electron.ipcRenderer.invoke("prefs:get"),
    set: (update) => electron.ipcRenderer.invoke("prefs:set", update)
  },
  changes: {
    readChangeList: (repoPath) => electron.ipcRenderer.invoke("changes:readChangeList", repoPath),
    readProposal: (changePath) => electron.ipcRenderer.invoke("changes:readProposal", changePath)
  },
  cli: {
    invoke: (opts) => electron.ipcRenderer.invoke("cli:invoke", opts),
    cancel: () => electron.ipcRenderer.invoke("cli:cancel"),
    write: (text) => electron.ipcRenderer.invoke("cli:write", text),
    // 1.7 — renderer-side listener helper; returns unsubscribe function
    onOutput: (cb) => {
      const handler = (_event, line) => cb(line);
      electron.ipcRenderer.on("cli:output", handler);
      return () => electron.ipcRenderer.removeListener("cli:output", handler);
    }
  }
});
