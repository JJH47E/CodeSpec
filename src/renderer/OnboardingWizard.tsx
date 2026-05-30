import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import { Terminal } from '@xterm/xterm'
import { FitAddon } from '@xterm/addon-fit'
import { Icon, Button, Spinner } from './components'
import type { CliTool, DetectedTool, Prefs } from '../shared/types'

// ---- Types ------------------------------------------------------------------

type Step = 'welcome' | 'npm-install' | 'init' | 'cli-tool' | 'baseline' | 'how-to'
type TermStatus = 'idle' | 'running' | 'success' | 'error'

const STEP_ORDER: Step[] = ['welcome', 'npm-install', 'init', 'cli-tool', 'baseline', 'how-to']

const STEP_LABELS: Record<Step, string> = {
  'welcome':     'Welcome',
  'npm-install': 'Install',
  'init':        'Initialize',
  'cli-tool':    'CLI Tool',
  'baseline':    'Baseline',
  'how-to':      'How-To',
}

interface Props {
  projectPath: string
  prefs: Prefs
  onPrefsChange: (updated: Prefs) => void
  onComplete: (path: string) => void
  onAbandon: () => void
}

// ---- Embedded Terminal (uses onboard:* IPC) ----------------------------------

interface EmbeddedTerminalHandle {
  write: (data: string) => void
  clear: () => void
  getDimensions: () => { cols: number; rows: number }
}

const EmbeddedTerminal = forwardRef<EmbeddedTerminalHandle, { style?: React.CSSProperties }>(
  function EmbeddedTerminal({ style }, ref) {
    const containerRef = useRef<HTMLDivElement>(null)
    const termRef      = useRef<Terminal | null>(null)
    const fitRef       = useRef<FitAddon | null>(null)

    useImperativeHandle(ref, () => ({
      write(data: string) { termRef.current?.write(data) },
      clear() { termRef.current?.clear() },
      getDimensions() {
        const t = termRef.current
        return { cols: t?.cols || 80, rows: t?.rows || 24 }
      },
    }))

    useEffect(() => {
      if (!containerRef.current) return
      const term = new Terminal({
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        fontSize: 12,
        lineHeight: 1.5,
        cursorBlink: true,
        theme: {
          background:    '#0d1117',
          foreground:    '#c9d1d9',
          cursor:        '#c9d1d9',
          black:         '#0d1117',
          red:           '#ff7b72',
          green:         '#3fb950',
          yellow:        '#d29922',
          blue:          '#58a6ff',
          magenta:       '#bc8cff',
          cyan:          '#39c5cf',
          white:         '#b1bac4',
          brightBlack:   '#6e7681',
          brightRed:     '#ffa198',
          brightGreen:   '#56d364',
          brightYellow:  '#e3b341',
          brightBlue:    '#79c0ff',
          brightMagenta: '#d2a8ff',
          brightCyan:    '#56d4dd',
          brightWhite:   '#f0f6fc',
        },
      })
      const fit = new FitAddon()
      term.loadAddon(fit)
      term.open(containerRef.current)

      const dataDispose = term.onData(data => window.api.onboard.write(data))

      const ro = new ResizeObserver(() => {
        if (!containerRef.current) return
        const { offsetWidth, offsetHeight } = containerRef.current
        if (offsetWidth === 0 || offsetHeight === 0) return
        fit.fit()
        window.api.onboard.resize({ cols: term.cols, rows: term.rows })
      })
      ro.observe(containerRef.current)

      requestAnimationFrame(() => {
        fit.fit()
        window.api.onboard.resize({ cols: term.cols, rows: term.rows })
      })

      termRef.current = term
      fitRef.current  = fit

      return () => {
        dataDispose.dispose()
        ro.disconnect()
        term.dispose()
        termRef.current = null
        fitRef.current  = null
      }
    }, [])

    return (
      <div
        ref={containerRef}
        style={{
          background: '#0d1117',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          ...style,
        }}
      />
    )
  }
)

// ---- Step Indicator ---------------------------------------------------------

function StepIndicator({ current }: { current: Step }) {
  const currentIdx = STEP_ORDER.indexOf(current)
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      marginBottom: 32,
    }}>
      {STEP_ORDER.map((step, idx) => {
        const done    = idx < currentIdx
        const active  = idx === currentIdx
        const pending = idx > currentIdx
        return (
          <div key={step} style={{ display: 'flex', alignItems: 'center', flex: idx < STEP_ORDER.length - 1 ? 1 : 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 12,
                fontWeight: 'var(--weight-semibold)',
                transition: 'background 0.2s, color 0.2s',
                background: done
                  ? 'var(--accent-fg)'
                  : active
                    ? 'var(--accent-muted)'
                    : 'var(--bg-inset)',
                color: done
                  ? 'var(--bg-app)'
                  : active
                    ? 'var(--accent-fg)'
                    : 'var(--fg-faint)',
                border: active ? '2px solid var(--accent-fg)' : '2px solid transparent',
              }}>
                {done
                  ? <Icon name="check" size={12} />
                  : idx + 1
                }
              </div>
              <span style={{
                fontSize: 10,
                fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-normal)',
                color: pending ? 'var(--fg-faint)' : active ? 'var(--accent-fg)' : 'var(--fg-muted)',
                whiteSpace: 'nowrap',
              }}>
                {STEP_LABELS[step]}
              </span>
            </div>
            {idx < STEP_ORDER.length - 1 && (
              <div style={{
                flex: 1,
                height: 2,
                background: done ? 'var(--accent-fg)' : 'var(--border-muted)',
                marginBottom: 22,
                marginLeft: 4,
                marginRight: 4,
                transition: 'background 0.2s',
              }} />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ---- Abandon button ---------------------------------------------------------

function AbandonLink({ onAbandon }: { onAbandon: () => void }) {
  return (
    <button
      onClick={onAbandon}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--fg-subtle)',
        fontSize: 'var(--text-sm)',
        padding: '4px 0',
        marginTop: 8,
        textDecoration: 'underline',
        textDecorationColor: 'var(--border-muted)',
      }}
    >
      Back to project selector
    </button>
  )
}

// ---- Step: Welcome ----------------------------------------------------------

function WelcomeStep({ onNext, onAbandon }: { onNext: () => void; onAbandon: () => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{
        width: 56,
        height: 56,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--accent-muted)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--accent-fg)',
      }}>
        <Icon name="rocket-launch" size={28} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-semibold)', color: 'var(--fg-default)' }}>
          Set up OpenSpec
        </div>
        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--fg-subtle)', lineHeight: 'var(--leading-relaxed)' }}>
          This project doesn't have OpenSpec initialized yet. OpenSpec is a spec-driven workflow that
          lets you define what to build before asking your AI coding tool to implement it — keeping
          changes reviewable, structured, and trackable.
        </div>
      </div>

      <div style={{
        background: 'var(--bg-inset)',
        border: '1px solid var(--border-muted)',
        borderRadius: 'var(--radius-md)',
        padding: '14px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}>
        <div style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)', color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          This wizard will
        </div>
        {[
          { icon: 'package' as const,   label: 'Install the OpenSpec npm package' },
          { icon: 'folder-open' as const, label: 'Initialize OpenSpec in your project' },
          { icon: 'terminal' as const,  label: 'Register an AI CLI tool (Claude Code, Aider, etc.)' },
          { icon: 'sparkle' as const,   label: 'Generate specs for each capability of your app' },
          { icon: 'book-open' as const, label: 'Show you how to create and apply changes' },
        ].map(({ icon, label }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon name={icon} size={15} style={{ color: 'var(--accent-fg)', flexShrink: 0 }} />
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--fg-default)' }}>{label}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
        <Button variant="primary" size="md" onClick={onNext}>Get Started</Button>
        <AbandonLink onAbandon={onAbandon} />
      </div>
    </div>
  )
}

// ---- Step: npm install ------------------------------------------------------

function NpmInstallStep({ onNext, onAbandon }: { onNext: () => void; onAbandon: () => void }) {
  const [status, setStatus] = useState<TermStatus>('idle')
  const termRef = useRef<EmbeddedTerminalHandle>(null)

  useEffect(() => {
    const unsub = window.api.onboard.onData(data => termRef.current?.write(data))
    return unsub
  }, [])

  async function handleInstall() {
    termRef.current?.clear()
    setStatus('running')
    // npm install always exits; use exit code directly
    const { exitCode } = await window.api.onboard.exec({
      command: 'npm',
      args: ['install', '-g', 'openspec'],
      cwd: '/',
    })
    setStatus(exitCode === 0 ? 'success' : 'error')
  }

  async function handleContinue() {
    await window.api.onboard.cancel()
    onNext()
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-semibold)', color: 'var(--fg-default)' }}>
          Install OpenSpec
        </div>
        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--fg-subtle)', lineHeight: 'var(--leading-relaxed)' }}>
          Install the OpenSpec CLI globally via npm. This gives you the <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, background: 'var(--bg-inset)', padding: '1px 5px', borderRadius: 4 }}>openspec</code> command used throughout this workflow.
        </div>
      </div>

      <div style={{
        background: 'var(--bg-inset)',
        border: '1px solid var(--border-muted)',
        borderRadius: 'var(--radius-md)',
        padding: '10px 14px',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--fg-muted)',
      }}>
        npm install -g openspec
      </div>

      <EmbeddedTerminal
        ref={termRef}
        style={{ height: 320, display: status === 'idle' ? 'none' : 'block' }}
      />

      {status === 'error' && (
        <StatusBanner type="error">
          Installation failed. Check the output above and ensure npm is available on your PATH, then retry.
        </StatusBanner>
      )}

      {status === 'success' && (
        <StatusBanner type="success">OpenSpec installed successfully.</StatusBanner>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {status === 'idle' && (
            <Button variant="primary" size="md" onClick={handleInstall}>Install</Button>
          )}
          {status === 'running' && (
            <Button variant="primary" size="md" loading>Installing…</Button>
          )}
          {status === 'error' && (
            <Button variant="secondary" size="md" onClick={handleInstall}>Retry</Button>
          )}
          {status === 'success' && (
            <Button variant="primary" size="md" onClick={handleContinue}>Continue</Button>
          )}
        </div>
        <AbandonLink onAbandon={onAbandon} />
      </div>
    </div>
  )
}

// ---- Step: Init -------------------------------------------------------------

type RepoType = 'single' | 'monorepo'

interface PackageEntry {
  name: string
  path: string
  checked: boolean
}

function InitStep({ projectPath, onNext, onAbandon }: { projectPath: string; onNext: () => void; onAbandon: () => void }) {
  const [repoType, setRepoType]     = useState<RepoType>('single')
  const [packages, setPackages]     = useState<PackageEntry[]>([])
  const [scanning, setScanning]     = useState(false)
  const [status, setStatus]         = useState<TermStatus>('idle')
  const [currentPkg, setCurrentPkg] = useState('')
  const termRef   = useRef<EmbeddedTerminalHandle>(null)
  const statusRef = useRef<TermStatus>('idle')
  const pollRef   = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const unsub = window.api.onboard.onData(data => termRef.current?.write(data))
    return () => { unsub(); if (pollRef.current) clearInterval(pollRef.current) }
  }, [])

  function markStatus(s: TermStatus) { statusRef.current = s; setStatus(s) }

  async function handleRepoTypeChange(type: RepoType) {
    setRepoType(type)
    markStatus('idle')
    if (type === 'monorepo' && packages.length === 0) {
      setScanning(true)
      const found = await window.api.repo.listPackages(projectPath)
      setPackages(found.map(p => ({ ...p, checked: true })))
      setScanning(false)
    }
  }

  function togglePackage(path: string) {
    setPackages(prev => prev.map(p => p.path === path ? { ...p, checked: !p.checked } : p))
  }

  async function handleInit() {
    termRef.current?.clear()
    markStatus('running')
    if (pollRef.current) clearInterval(pollRef.current)

    const targets = repoType === 'single'
      ? [projectPath]
      : packages.filter(p => p.checked).map(p => p.path)

    // Run each init sequentially; fire without blocking on process exit
    ;(async () => {
      for (const cwd of targets) {
        if (statusRef.current !== 'running') return
        setCurrentPkg(repoType === 'monorepo' ? cwd.split('/').pop()! : 'project')
        const { exitCode } = await window.api.onboard.exec({ command: 'openspec', args: ['init'], cwd })
        if (exitCode !== 0 && statusRef.current === 'running') {
          markStatus('error')
          return
        }
      }
      if (statusRef.current === 'running') markStatus('success')
    })()

    // Also poll for config.yaml as a file-existence success signal
    pollRef.current = setInterval(async () => {
      if (statusRef.current !== 'running') { clearInterval(pollRef.current!); return }
      // Check all targets have their config.yaml
      const checks = await Promise.all(
        targets.map(cwd => window.api.repo.checkPath(`${cwd}/openspec/config.yaml`))
      )
      if (checks.every(Boolean)) {
        clearInterval(pollRef.current!)
        markStatus('success')
      }
    }, 2000)
  }

  async function handleContinue() {
    if (pollRef.current) clearInterval(pollRef.current)
    await window.api.onboard.cancel()
    onNext()
  }

  const selectedCount = repoType === 'monorepo' ? packages.filter(p => p.checked).length : 1

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-semibold)', color: 'var(--fg-default)' }}>
          Initialize OpenSpec
        </div>
        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--fg-subtle)', lineHeight: 'var(--leading-relaxed)' }}>
          Run <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, background: 'var(--bg-inset)', padding: '1px 5px', borderRadius: 4 }}>openspec init</code> to create the spec folder structure in your project.
        </div>
      </div>

      {/* Repo type selector */}
      <div style={{ display: 'flex', gap: 8 }}>
        {(['single', 'monorepo'] as RepoType[]).map(type => (
          <button
            key={type}
            onClick={() => handleRepoTypeChange(type)}
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: 'var(--radius-md)',
              border: `2px solid ${repoType === type ? 'var(--accent-fg)' : 'var(--border-muted)'}`,
              background: repoType === type ? 'var(--accent-muted)' : 'var(--bg-inset)',
              color: repoType === type ? 'var(--accent-fg)' : 'var(--fg-muted)',
              cursor: 'pointer',
              fontSize: 'var(--text-sm)',
              fontWeight: repoType === type ? 'var(--weight-semibold)' : 'var(--weight-normal)',
              textAlign: 'left',
              transition: 'border-color 0.15s, background 0.15s',
            }}
          >
            {type === 'single' ? 'Single app' : 'Monorepo'}
          </button>
        ))}
      </div>

      {/* Monorepo package list */}
      {repoType === 'monorepo' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {scanning ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--fg-subtle)', fontSize: 'var(--text-sm)' }}>
              <Spinner size={14} />
              Scanning for packages…
            </div>
          ) : packages.length === 0 ? (
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--fg-subtle)', padding: '8px 0' }}>
              No packages with <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}>package.json</code> found in the root. Will initialize in the root directory.
            </div>
          ) : (
            <div style={{
              border: '1px solid var(--border-muted)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
            }}>
              {packages.map((pkg, idx) => (
                <label
                  key={pkg.path}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '10px 14px',
                    borderTop: idx > 0 ? '1px solid var(--border-muted)' : 'none',
                    cursor: 'pointer',
                    background: 'var(--bg-subtle)',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={pkg.checked}
                    onChange={() => togglePackage(pkg.path)}
                    style={{ accentColor: 'var(--accent-fg)', width: 14, height: 14, flexShrink: 0 }}
                  />
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--fg-default)', fontFamily: 'var(--font-mono)' }}>
                    {pkg.name}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      )}

      <EmbeddedTerminal
        ref={termRef}
        style={{ height: 320, display: status === 'idle' ? 'none' : 'block' }}
      />

      {status === 'running' && currentPkg && (
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--fg-subtle)' }}>Initializing {currentPkg}…</div>
      )}

      {status === 'error' && (
        <StatusBanner type="error">Initialization failed. Check the output above and retry.</StatusBanner>
      )}

      {status === 'success' && (
        <StatusBanner type="success">OpenSpec initialized successfully.</StatusBanner>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {status === 'idle' && (
            <Button variant="primary" size="md" onClick={handleInit} disabled={repoType === 'monorepo' && selectedCount === 0}>
              Initialize
            </Button>
          )}
          {status === 'running' && (
            <Button variant="primary" size="md" loading>Initializing…</Button>
          )}
          {status === 'error' && (
            <Button variant="secondary" size="md" onClick={handleInit}>Retry</Button>
          )}
          {status === 'success' && (
            <Button variant="primary" size="md" onClick={handleContinue}>Continue</Button>
          )}
        </div>
        <AbandonLink onAbandon={onAbandon} />
      </div>
    </div>
  )
}

// ---- Step: CLI Tool ---------------------------------------------------------

interface CliToolStepProps {
  prefs: Prefs
  onPrefsChange: (updated: Prefs) => void
  onToolRegistered: (toolId: string | null) => void
  onNext: () => void
  onAbandon: () => void
}

function CliToolStep({ prefs, onPrefsChange, onToolRegistered, onNext, onAbandon }: CliToolStepProps) {
  const [detecting, setDetecting]     = useState(true)
  const [detectedTools, setDetected]  = useState<DetectedTool[]>([])
  const [selectedId, setSelectedId]   = useState<string | null>(null)
  const [manualLabel, setManualLabel] = useState('')
  const [manualCmd, setManualCmd]     = useState('')
  const [manualArgs, setManualArgs]   = useState('')
  const [saved, setSaved]             = useState(false)

  useEffect(() => {
    window.api.cli.detectTools().then(found => {
      setDetected(found)
      if (found.length > 0) setSelectedId(found[0].id)
      setDetecting(false)
    })
  }, [])

  function handleAddTool() {
    let newTool: CliTool
    if (detectedTools.length > 0 && selectedId) {
      const found = detectedTools.find(t => t.id === selectedId)!
      newTool = { id: found.id, label: found.label, command: found.command, args: found.args }
    } else {
      const id = slugify(manualLabel) || `tool-${Date.now()}`
      newTool = {
        id: prefs.cliTools.find(t => t.id === id) ? `${id}-${Date.now()}` : id,
        label: manualLabel.trim(),
        command: manualCmd.trim(),
        args: manualArgs.trim().split(/\s+/).filter(Boolean),
      }
    }
    const next = [...prefs.cliTools.filter(t => t.id !== newTool.id), newTool]
    onPrefsChange({ ...prefs, cliTools: next, defaultTool: newTool.id })
    onToolRegistered(newTool.id)
    setSaved(true)
  }

  function handleSkip() {
    onToolRegistered(null)
    onNext()
  }

  const manualValid = manualLabel.trim() && manualCmd.trim() && manualArgs.trim()
  const argsWarning = manualArgs.trim().length > 0 && !manualArgs.includes('{command}')

  if (detecting) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <StepHeader title="Set Up CLI Tool" subtitle="Detecting installed AI CLI tools…" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--fg-subtle)', fontSize: 'var(--text-sm)' }}>
          <Spinner size={14} /> Detecting tools…
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <StepHeader
        title="Set Up CLI Tool"
        subtitle="Register the AI coding tool you'll use to apply proposals. CodeSpec invokes it on your behalf."
      />

      {saved ? (
        <>
          <StatusBanner type="success">
            Tool registered and set as default.
          </StatusBanner>
          <Button variant="primary" size="md" onClick={onNext}>Continue</Button>
        </>
      ) : detectedTools.length > 0 ? (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)', color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Detected tools
            </div>
            <div style={{
              border: '1px solid var(--border-muted)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
            }}>
              {detectedTools.map((tool, idx) => (
                <label
                  key={tool.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '12px 14px',
                    borderTop: idx > 0 ? '1px solid var(--border-muted)' : 'none',
                    cursor: 'pointer',
                    background: selectedId === tool.id ? 'var(--accent-muted)' : 'var(--bg-subtle)',
                    transition: 'background 0.1s',
                  }}
                >
                  <input
                    type="radio"
                    name="detected-tool"
                    value={tool.id}
                    checked={selectedId === tool.id}
                    onChange={() => setSelectedId(tool.id)}
                    style={{ accentColor: 'var(--accent-fg)', flexShrink: 0 }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--fg-default)' }}>
                      {tool.label}
                    </div>
                    <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--fg-subtle)', marginTop: 2 }}>
                      {tool.command} {tool.args.join(' ')}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <Button variant="primary" size="md" onClick={handleAddTool} disabled={!selectedId}>
                Add Tool
              </Button>
              <button
                onClick={handleSkip}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--fg-subtle)', fontSize: 'var(--text-sm)', padding: '4px 0' }}
              >
                Skip for now
              </button>
            </div>
            <AbandonLink onAbandon={onAbandon} />
          </div>
        </>
      ) : (
        <>
          <div style={{
            background: 'var(--bg-inset)',
            border: '1px solid var(--border-muted)',
            borderRadius: 'var(--radius-md)',
            padding: '14px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--fg-subtle)' }}>
              No tools detected automatically. Enter your tool details manually.
            </div>
            <InlineField label="Label">
              <input
                style={inputStyle}
                placeholder="Claude Code"
                value={manualLabel}
                onChange={e => setManualLabel(e.target.value)}
              />
            </InlineField>
            <InlineField label="Command">
              <input
                style={{ ...inputStyle, fontFamily: 'var(--font-mono)' }}
                placeholder="claude"
                value={manualCmd}
                onChange={e => setManualCmd(e.target.value)}
              />
            </InlineField>
            <InlineField label="Args" warning={argsWarning ? 'Must include {command} placeholder' : undefined}>
              <input
                style={{ ...inputStyle, fontFamily: 'var(--font-mono)' }}
                placeholder="{command}"
                value={manualArgs}
                onChange={e => setManualArgs(e.target.value)}
              />
            </InlineField>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <Button variant="primary" size="md" onClick={handleAddTool} disabled={!manualValid}>
                Add Tool
              </Button>
              <button
                onClick={handleSkip}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--fg-subtle)', fontSize: 'var(--text-sm)', padding: '4px 0' }}
              >
                Skip for now
              </button>
            </div>
            <AbandonLink onAbandon={onAbandon} />
          </div>
        </>
      )}
    </div>
  )
}

// ---- Step: Baseline ---------------------------------------------------------

function BaselineStep({
  projectPath,
  prefs,
  registeredToolId,
  onNext,
  onAbandon,
}: {
  projectPath: string
  prefs: Prefs
  registeredToolId: string | null
  onNext: () => void
  onAbandon: () => void
}) {
  const [status, setStatus]     = useState<TermStatus>('idle')
  const [hasFiles, setHasFiles] = useState<boolean | null>(null)
  const termRef   = useRef<EmbeddedTerminalHandle>(null)
  const statusRef = useRef<TermStatus>('idle')
  const pollRef   = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const unsub = window.api.onboard.onData(data => termRef.current?.write(data))
    return () => { unsub(); if (pollRef.current) clearInterval(pollRef.current) }
  }, [])

  useEffect(() => {
    window.api.repo.hasAppFiles(projectPath).then(setHasFiles)
  }, [projectPath])

  function markStatus(s: TermStatus) { statusRef.current = s; setStatus(s) }

  async function handleRunBaseline() {
    if (!registeredToolId) return
    const tool = prefs.cliTools.find(t => t.id === registeredToolId)
    if (!tool) return

    termRef.current?.clear()
    markStatus('running')
    if (pollRef.current) clearInterval(pollRef.current)

    const prompt =
      'Run /openspec explore to understand this project — what it does, its key capabilities, ' +
      'and how it is structured. Only look at files within this project directory. ' +
      'Do not look in parent directories or outside this project under any circumstances. ' +
      'Once you have that context, create a spec file for each major capability under ' +
      'openspec/specs/<capability-name>/spec.md, using the OpenSpec spec format ' +
      '(Requirements with SHALL statements and Scenarios with WHEN/THEN). ' +
      'Cover every distinct feature or function. ' +
      'If the project has little or no application code yet, base the specs on any signals ' +
      'within this directory (README, package.json, config files, folder names). ' +
      'If you find absolutely nothing to work from, create a single placeholder spec at ' +
      'openspec/specs/core/spec.md that describes a generic starting capability, and note ' +
      'that the project is empty so the user should update it once they have added code.'

    const resolvedArgs = tool.args.map(a => a.replace('{command}', prompt))

    // Fire without awaiting — Claude Code stays open in interactive mode
    window.api.onboard.exec({ command: tool.command, args: resolvedArgs, cwd: projectPath })
      .then(({ exitCode }) => {
        if (statusRef.current === 'running') markStatus(exitCode === 0 ? 'success' : 'error')
      })

    // Poll for spec files appearing in openspec/specs/
    const specsDir = `${projectPath}/openspec/specs`
    pollRef.current = setInterval(async () => {
      if (statusRef.current !== 'running') { clearInterval(pollRef.current!); return }
      const hasSpecs = await window.api.repo.dirHasEntries(specsDir)
      if (hasSpecs) {
        clearInterval(pollRef.current!)
        markStatus('success')
      }
    }, 3000)
  }

  async function handleContinue() {
    if (pollRef.current) clearInterval(pollRef.current)
    await window.api.onboard.cancel()
    onNext()
  }

  // Still checking for app files
  if (hasFiles === null) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <StepHeader title="Generate Specs" subtitle="Checking project…" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--fg-subtle)', fontSize: 'var(--text-sm)' }}>
          <Spinner size={14} /> Scanning project files…
        </div>
      </div>
    )
  }

  // No CLI tool registered
  if (!registeredToolId) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <StepHeader
          title="Generate Specs"
          subtitle="Skipped — no CLI tool was registered."
        />
        <div style={{
          background: 'var(--bg-inset)',
          border: '1px solid var(--border-muted)',
          borderRadius: 'var(--radius-md)',
          padding: '14px 16px',
          fontSize: 'var(--text-sm)',
          color: 'var(--fg-subtle)',
          lineHeight: 'var(--leading-relaxed)',
        }}>
          You can generate baseline specs later by registering a CLI tool in Settings and running the explore prompt from the terminal.
        </div>
        <Button variant="primary" size="md" onClick={onNext}>Continue</Button>
      </div>
    )
  }

  // Empty directory — auto-skip
  if (!hasFiles) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <StepHeader
          title="Generate Specs"
          subtitle="Skipped — empty project."
        />
        <div style={{
          background: 'var(--bg-inset)',
          border: '1px solid var(--border-muted)',
          borderRadius: 'var(--radius-md)',
          padding: '14px 16px',
          fontSize: 'var(--text-sm)',
          color: 'var(--fg-subtle)',
          lineHeight: 'var(--leading-relaxed)',
        }}>
          This project has no application files yet. Once you've added code, come back and run spec generation from the terminal — your AI tool will explore the codebase and populate <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, background: 'var(--bg-app)', padding: '1px 5px', borderRadius: 4 }}>openspec/specs/</code>.
        </div>
        <Button variant="primary" size="md" onClick={onNext}>Continue</Button>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <StepHeader
        title="Generate Specs"
        subtitle="Your AI CLI tool will explore this project and generate a spec file for each major capability under openspec/specs/. This may take a few minutes."
      />

      <EmbeddedTerminal
        ref={termRef}
        style={{ height: 400, display: status === 'idle' ? 'none' : 'block' }}
      />

      {status === 'error' && (
        <StatusBanner type="error">Spec generation failed. Check the output above and retry, or skip.</StatusBanner>
      )}
      {status === 'success' && (
        <StatusBanner type="success">Specs generated successfully.</StatusBanner>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {status === 'idle' && (
            <Button variant="primary" size="md" onClick={handleRunBaseline}>Generate Specs</Button>
          )}
          {status === 'running' && (
            <>
              <Button variant="primary" size="md" loading>Generating…</Button>
              <button
                onClick={handleContinue}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--fg-subtle)', fontSize: 'var(--text-sm)', padding: '4px 0' }}
              >
                Continue anyway
              </button>
            </>
          )}
          {status === 'error' && (
            <>
              <Button variant="secondary" size="md" onClick={handleRunBaseline}>Retry</Button>
              <button
                onClick={handleContinue}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--fg-subtle)', fontSize: 'var(--text-sm)', padding: '4px 0' }}
              >
                Skip
              </button>
            </>
          )}
          {status === 'success' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--fg-subtle)' }}>
                Only continue once the AI has finished its response.
              </span>
              <Button variant="primary" size="md" onClick={handleContinue}>Continue</Button>
            </div>
          )}
        </div>
        <AbandonLink onAbandon={onAbandon} />
      </div>
    </div>
  )
}

// ---- Step: How-To -----------------------------------------------------------

function HowToStep({ projectPath, onFinish, onAbandon }: { projectPath: string; onFinish: () => void; onAbandon: () => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-semibold)', color: 'var(--fg-default)' }}>
          You're ready!
        </div>
        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--fg-subtle)', lineHeight: 'var(--leading-relaxed)' }}>
          Here's how the core OpenSpec workflow works.
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {[
          {
            num: '1',
            title: 'Create a proposal',
            desc: 'Click New Proposal in the toolbar. Describe what you want to build and your AI CLI tool will generate a structured proposal document with a spec and task list.',
          },
          {
            num: '2',
            title: 'Review the proposal',
            desc: 'Read through the generated proposal and task list in the sidebar. You can edit any artifact before applying.',
          },
          {
            num: '3',
            title: 'Apply the proposal',
            desc: 'Click Apply to invoke your CLI tool again — this time to implement the tasks defined in the proposal, one by one.',
          },
          {
            num: '4',
            title: 'Archive when done',
            desc: 'Once all tasks are complete, archive the change to keep your workspace clean. Archived changes are preserved for reference.',
          },
        ].map(({ num, title, desc }) => (
          <div key={num} style={{
            display: 'flex',
            gap: 14,
            padding: '14px 16px',
            background: 'var(--bg-inset)',
            border: '1px solid var(--border-muted)',
            borderRadius: 'var(--radius-md)',
          }}>
            <div style={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: 'var(--accent-muted)',
              color: 'var(--accent-fg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 12,
              fontWeight: 'var(--weight-semibold)',
              flexShrink: 0,
              marginTop: 1,
            }}>
              {num}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--fg-default)' }}>
                {title}
              </div>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--fg-subtle)', lineHeight: 'var(--leading-relaxed)' }}>
                {desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
        <Button variant="primary" size="md" onClick={onFinish}>
          Open Project
        </Button>
        <AbandonLink onAbandon={onAbandon} />
      </div>
    </div>
  )
}

// ---- Main Wizard Component --------------------------------------------------

export function OnboardingWizard({ projectPath, prefs, onPrefsChange, onComplete, onAbandon }: Props) {
  const [currentStep, setCurrentStep] = useState<Step>('welcome')
  const [registeredToolId, setRegisteredToolId] = useState<string | null>(null)

  const projectName = projectPath.split('/').pop() ?? projectPath

  function next() {
    const idx = STEP_ORDER.indexOf(currentStep)
    if (idx < STEP_ORDER.length - 1) setCurrentStep(STEP_ORDER[idx + 1])
  }

  return (
    <div style={{
      height: '100vh',
      background: 'var(--bg-app)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      overflowY: 'auto',
      padding: '40px 24px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 540,
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
      }}>
        {/* Project path label */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          marginBottom: 24,
          color: 'var(--fg-subtle)',
          fontSize: 'var(--text-sm)',
        }}>
          <Icon name="folder" size={14} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{projectName}</span>
        </div>

        <StepIndicator current={currentStep} />

        <div style={{
          background: 'var(--bg-subtle)',
          border: '1px solid var(--border-muted)',
          borderRadius: 'var(--radius-lg)',
          padding: '28px 28px',
        }}>
          {currentStep === 'welcome' && (
            <WelcomeStep onNext={next} onAbandon={onAbandon} />
          )}
          {currentStep === 'npm-install' && (
            <NpmInstallStep onNext={next} onAbandon={onAbandon} />
          )}
          {currentStep === 'init' && (
            <InitStep projectPath={projectPath} onNext={next} onAbandon={onAbandon} />
          )}
          {currentStep === 'cli-tool' && (
            <CliToolStep
              prefs={prefs}
              onPrefsChange={onPrefsChange}
              onToolRegistered={id => { setRegisteredToolId(id); if (id) next() }}
              onNext={next}
              onAbandon={onAbandon}
            />
          )}
          {currentStep === 'baseline' && (
            <BaselineStep
              projectPath={projectPath}
              prefs={prefs}
              registeredToolId={registeredToolId}
              onNext={next}
              onAbandon={onAbandon}
            />
          )}
          {currentStep === 'how-to' && (
            <HowToStep
              projectPath={projectPath}
              onFinish={() => onComplete(projectPath)}
              onAbandon={onAbandon}
            />
          )}
        </div>
      </div>
    </div>
  )
}

// ---- Shared helpers ---------------------------------------------------------

function StepHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-semibold)', color: 'var(--fg-default)' }}>
        {title}
      </div>
      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--fg-subtle)', lineHeight: 'var(--leading-relaxed)' }}>
        {subtitle}
      </div>
    </div>
  )
}

function StatusBanner({ type, children }: { type: 'success' | 'error'; children: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8,
      padding: '10px 14px',
      borderRadius: 'var(--radius-md)',
      background: type === 'success' ? 'var(--success-muted, #dcfce7)' : 'var(--danger-muted)',
      color: type === 'success' ? 'var(--success-fg, #15803d)' : 'var(--danger-fg)',
      fontSize: 'var(--text-sm)',
    }}>
      <Icon name={type === 'success' ? 'check-circle' : 'warning'} size={16} style={{ flexShrink: 0, marginTop: 1 }} />
      {children}
    </div>
  )
}

function InlineField({ label, warning, children }: { label: string; warning?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <label style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)', color: 'var(--fg-muted)' }}>
        {label}
      </label>
      {children}
      {warning && (
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--danger-fg)' }}>{warning}</span>
      )}
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '7px 10px',
  borderRadius: 'var(--radius-sm)',
  border: '1px solid var(--border-default)',
  background: 'var(--bg-app)',
  color: 'var(--fg-default)',
  fontSize: 'var(--text-sm)',
  outline: 'none',
  boxSizing: 'border-box',
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}
