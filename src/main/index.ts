import { app, BrowserWindow, shell, ipcMain, dialog } from 'electron'
import { join } from 'path'
import { existsSync, readFileSync, writeFileSync, readdirSync } from 'fs'
import { spawn } from 'child_process'
import type { ChildProcess } from 'child_process'
import type { Prefs, Change } from '../shared/types'

const isDev = !app.isPackaged

// ---- Prefs -----------------------------------------------------------------

function prefsPath(): string {
  return join(app.getPath('userData'), 'prefs.json')
}

function readPrefs(): Prefs {
  const p = prefsPath()
  if (!existsSync(p)) return { repoPath: null, cliTools: [], defaultTool: null }
  try {
    return JSON.parse(readFileSync(p, 'utf-8')) as Prefs
  } catch {
    return { repoPath: null, cliTools: [], defaultTool: null }
  }
}

function writePrefs(prefs: Prefs): void {
  writeFileSync(prefsPath(), JSON.stringify(prefs, null, 2), 'utf-8')
}

// ---- YAML mini-parser ------------------------------------------------------

function parseSimpleYaml(text: string): Record<string, string> {
  const out: Record<string, string> = {}
  for (const line of text.split('\n')) {
    const m = line.match(/^([\w-]+):\s*(.*)$/)
    if (m) out[m[1]] = m[2].trim()
  }
  return out
}

// ---- Change list reader ----------------------------------------------------

function readChangesDir(dir: string, status: 'active' | 'archived'): Change[] {
  if (!existsSync(dir)) return []
  const changes: Change[] = []
  try {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue
      const changePath = join(dir, entry.name)
      const yamlPath = join(changePath, '.openspec.yaml')
      if (!existsSync(yamlPath)) continue
      const meta = parseSimpleYaml(readFileSync(yamlPath, 'utf-8'))
      changes.push({
        name: entry.name,
        path: changePath,
        status,
        createdAt: meta['created'] ?? '',
        schema: meta['schema'] ?? '',
      })
    }
  } catch {
    // return what we have
  }
  return changes
}

// ---- CLI process -----------------------------------------------------------

let activeProcess: ChildProcess | null = null

// ---- Window ----------------------------------------------------------------

function createWindow(): void {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    show: false,
    backgroundColor: '#f6f8fa',
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: true,
    },
  })

  win.on('ready-to-show', () => win.show())

  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url)
    return { action: 'deny' }
  })

  if (isDev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    win.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// ---- IPC handlers ----------------------------------------------------------

// 1.1 repo:openDirectory — opens OS directory picker, validates openspec/ exists
ipcMain.handle('repo:openDirectory', async (event) => {
  const win = BrowserWindow.fromWebContents(event.sender)
  const result = await dialog.showOpenDialog(win!, { properties: ['openDirectory'] })
  if (result.canceled || !result.filePaths[0]) return null
  const selected = result.filePaths[0]
  if (!existsSync(join(selected, 'openspec'))) return { error: 'not-openspec-repo' }
  return { path: selected }
})

// 1.2 prefs:get / prefs:set
ipcMain.handle('prefs:get', () => readPrefs())

ipcMain.handle('prefs:set', (_e, update: Partial<Prefs>) => {
  writePrefs({ ...readPrefs(), ...update })
})

// 1.3 changes:readChangeList — scans changes/ and archive/, returns typed Change[]
ipcMain.handle('changes:readChangeList', (_e, repoPath: string) => {
  const active   = readChangesDir(join(repoPath, 'openspec', 'changes'), 'active')
  const archived = readChangesDir(join(repoPath, 'openspec', 'archive'), 'archived')
  return [...active, ...archived].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
})

// 1.4 changes:readProposal — returns raw proposal.md text or null
ipcMain.handle('changes:readProposal', (_e, changePath: string) => {
  const p = join(changePath, 'proposal.md')
  if (!existsSync(p)) return null
  return readFileSync(p, 'utf-8')
})

// 1.5 cli:invoke — spawns the CLI tool, streams stdout/stderr via cli:output events
ipcMain.handle('cli:invoke', (event, opts: { toolId: string; command: string; repoPath: string }) => {
  const prefs = readPrefs()
  const tool = prefs.cliTools.find(t => t.id === opts.toolId)
  if (!tool) return Promise.resolve({ exitCode: 1 })

  const resolvedArgs = tool.args.map(a => a.replace('{command}', opts.command))

  return new Promise<{ exitCode: number }>((resolve) => {
    let proc: ChildProcess
    try {
      proc = spawn(tool.command, resolvedArgs, {
        cwd: opts.repoPath,
        env: { ...process.env },
        stdio: ['pipe', 'pipe', 'pipe'],
      })
      activeProcess = proc
      // Close stdin immediately (equivalent to < /dev/null).
      // True interactive clarification requires node-pty; plain pipes don't support it.
      proc.stdin?.end()
    } catch {
      resolve({ exitCode: 1 })
      return
    }

    const forward = (data: Buffer) => {
      for (const line of data.toString().split('\n')) {
        if (line.trim()) event.sender.send('cli:output', line)
      }
    }

    proc.stdout?.on('data', forward)
    proc.stderr?.on('data', forward)

    proc.on('error', (err) => {
      const isEnoent = (err as NodeJS.ErrnoException).code === 'ENOENT'
      event.sender.send('cli:output', `Error: ${err.message}`)
      activeProcess = null
      resolve({ exitCode: isEnoent ? -2 : 1 })
    })

    proc.on('close', (code) => {
      activeProcess = null
      resolve({ exitCode: code ?? -1 })
    })
  })
})

// 1.6 cli:cancel — kills the active CLI process
ipcMain.handle('cli:cancel', () => {
  if (activeProcess) {
    activeProcess.kill()
    activeProcess = null
  }
})

// cli:write — forwards text to the active process's stdin (for interactive responses)
ipcMain.handle('cli:write', (_e, text: string) => {
  activeProcess?.stdin?.write(text)
})

// ---- App lifecycle ---------------------------------------------------------

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (!BrowserWindow.getAllWindows().length) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
