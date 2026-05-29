"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("api", {
  versions: {
    node: process.versions.node,
    chrome: process.versions.chrome,
    electron: process.versions.electron
  }
});
