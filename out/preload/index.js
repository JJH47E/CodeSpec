"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("api", {
  repo: {
    openDirectory: () => electron.ipcRenderer.invoke("repo:openDirectory"),
    listPackages: (dirPath) => electron.ipcRenderer.invoke("repo:listPackages", dirPath),
    hasAppFiles: (dirPath) => electron.ipcRenderer.invoke("repo:hasAppFiles", dirPath),
    checkPath: (p) => electron.ipcRenderer.invoke("repo:checkPath", p),
    dirHasEntries: (dirPath) => electron.ipcRenderer.invoke("repo:dirHasEntries", dirPath)
  },
  prefs: {
    get: () => electron.ipcRenderer.invoke("prefs:get"),
    set: (update) => electron.ipcRenderer.invoke("prefs:set", update)
  },
  changes: {
    readChangeList: (repoPath) => electron.ipcRenderer.invoke("changes:readChangeList", repoPath),
    readProposal: (changePath) => electron.ipcRenderer.invoke("changes:readProposal", changePath),
    readArtifact: (changePath, filename) => electron.ipcRenderer.invoke("changes:readArtifact", changePath, filename),
    delete: (changePath) => electron.ipcRenderer.invoke("changes:delete", changePath),
    archive: (changePath) => electron.ipcRenderer.invoke("changes:archive", changePath)
  },
  cli: {
    invoke: (opts) => electron.ipcRenderer.invoke("cli:invoke", opts),
    cancel: () => electron.ipcRenderer.invoke("cli:cancel"),
    write: (text) => electron.ipcRenderer.invoke("cli:write", text),
    resize: (size) => electron.ipcRenderer.invoke("cli:resize", size),
    detectTools: () => electron.ipcRenderer.invoke("cli:detectTools"),
    onData: (cb) => {
      const handler = (_event, data) => cb(data);
      electron.ipcRenderer.on("cli:data", handler);
      return () => electron.ipcRenderer.removeListener("cli:data", handler);
    },
    onProposalReady: (cb) => {
      const handler = () => cb();
      electron.ipcRenderer.on("cli:proposalReady", handler);
      return () => electron.ipcRenderer.removeListener("cli:proposalReady", handler);
    }
  },
  onboard: {
    exec: (opts) => electron.ipcRenderer.invoke("onboard:exec", opts),
    cancel: () => electron.ipcRenderer.invoke("onboard:cancel"),
    write: (text) => electron.ipcRenderer.invoke("onboard:write", text),
    resize: (size) => electron.ipcRenderer.invoke("onboard:resize", size),
    onData: (cb) => {
      const handler = (_event, data) => cb(data);
      electron.ipcRenderer.on("onboard:data", handler);
      return () => electron.ipcRenderer.removeListener("onboard:data", handler);
    }
  }
});
