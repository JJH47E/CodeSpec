"use strict";
const electron = require("electron");
const path = require("path");
const fs = require("fs");
const pty = require("node-pty");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const pty__namespace = /* @__PURE__ */ _interopNamespaceDefault(pty);
const isDev = !electron.app.isPackaged;
function prefsPath() {
  return path.join(electron.app.getPath("userData"), "prefs.json");
}
function readPrefs() {
  const p = prefsPath();
  if (!fs.existsSync(p)) return { repoPath: null, cliTools: [], defaultTool: null };
  try {
    return JSON.parse(fs.readFileSync(p, "utf-8"));
  } catch {
    return { repoPath: null, cliTools: [], defaultTool: null };
  }
}
function writePrefs(prefs) {
  fs.writeFileSync(prefsPath(), JSON.stringify(prefs, null, 2), "utf-8");
}
function parseSimpleYaml(text) {
  const out = {};
  for (const line of text.split("\n")) {
    const m = line.match(/^([\w-]+):\s*(.*)$/);
    if (m) out[m[1]] = m[2].trim();
  }
  return out;
}
function readChangesDir(dir, status) {
  if (!fs.existsSync(dir)) return [];
  const changes = [];
  try {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const changePath = path.join(dir, entry.name);
      const yamlPath = path.join(changePath, ".openspec.yaml");
      if (!fs.existsSync(yamlPath)) continue;
      const meta = parseSimpleYaml(fs.readFileSync(yamlPath, "utf-8"));
      changes.push({
        name: entry.name,
        path: changePath,
        status,
        createdAt: meta["created"] ?? "",
        schema: meta["schema"] ?? ""
      });
    }
  } catch {
  }
  return changes;
}
let activeProcess = null;
function createWindow() {
  const win = new electron.BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    show: false,
    backgroundColor: "#f6f8fa",
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      sandbox: true
    }
  });
  win.on("ready-to-show", () => win.show());
  win.webContents.setWindowOpenHandler(({ url }) => {
    electron.shell.openExternal(url);
    return { action: "deny" };
  });
  if (isDev && process.env["ELECTRON_RENDERER_URL"]) {
    win.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    win.loadFile(path.join(__dirname, "../renderer/index.html"));
  }
}
electron.ipcMain.handle("repo:openDirectory", async (event) => {
  const win = electron.BrowserWindow.fromWebContents(event.sender);
  const result = await electron.dialog.showOpenDialog(win, { properties: ["openDirectory"] });
  if (result.canceled || !result.filePaths[0]) return null;
  const selected = result.filePaths[0];
  if (!fs.existsSync(path.join(selected, "openspec"))) return { error: "not-openspec-repo" };
  return { path: selected };
});
electron.ipcMain.handle("prefs:get", () => readPrefs());
electron.ipcMain.handle("prefs:set", (_e, update) => {
  writePrefs({ ...readPrefs(), ...update });
});
electron.ipcMain.handle("changes:readChangeList", (_e, repoPath) => {
  const active = readChangesDir(path.join(repoPath, "openspec", "changes"), "active");
  const archived = readChangesDir(path.join(repoPath, "openspec", "archive"), "archived");
  return [...active, ...archived].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
});
electron.ipcMain.handle("changes:readProposal", (_e, changePath) => {
  const p = path.join(changePath, "proposal.md");
  if (!fs.existsSync(p)) return null;
  return fs.readFileSync(p, "utf-8");
});
electron.ipcMain.handle("cli:invoke", (event, opts) => {
  const prefs = readPrefs();
  const tool = prefs.cliTools.find((t) => t.id === opts.toolId);
  if (!tool) return Promise.resolve({ exitCode: 1 });
  const resolvedArgs = tool.args.map((a) => a.replace("{command}", opts.command));
  return new Promise((resolve) => {
    let proc;
    try {
      proc = pty__namespace.spawn(tool.command, resolvedArgs, {
        name: "xterm-256color",
        cols: opts.cols ?? 80,
        rows: opts.rows ?? 24,
        cwd: opts.repoPath,
        env: process.env
      });
      activeProcess = proc;
    } catch {
      resolve({ exitCode: 1 });
      return;
    }
    proc.onData((data) => {
      event.sender.send("cli:data", data);
    });
    proc.onExit(({ exitCode }) => {
      activeProcess = null;
      resolve({ exitCode });
    });
  });
});
electron.ipcMain.handle("cli:cancel", () => {
  if (activeProcess) {
    activeProcess.kill();
    activeProcess = null;
  }
});
electron.ipcMain.handle("cli:write", (_e, text) => {
  activeProcess?.write(text);
});
electron.ipcMain.handle("cli:resize", (_e, { cols, rows }) => {
  activeProcess?.resize(cols, rows);
});
electron.app.whenReady().then(() => {
  createWindow();
  electron.app.on("activate", () => {
    if (!electron.BrowserWindow.getAllWindows().length) createWindow();
  });
});
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") electron.app.quit();
});
