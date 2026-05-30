import { useState, useEffect, useRef } from 'react'
import { Icon, Button, Field, TextArea, Select } from './components'
import type { SelectGroup } from './components'
import type { Prefs } from '../shared/types'
import { buildCliCommand } from '../shared/cliCommands'
import { TerminalPane } from './TerminalPane'
import type { TerminalPaneHandle } from './TerminalPane'

interface Props {
  repoPath: string
  prefs: Prefs
  onSuccess: () => void
  onClose: () => void
}

type Phase = 'input' | 'running' | 'complete' | 'error'

export function NewProposalSheet({ repoPath, prefs, onSuccess, onClose }: Props) {
  const [phase, setPhase]               = useState<Phase>('input')
  const [description, setDescription]   = useState('')
  const [toolId, setToolId]             = useState(prefs.defaultTool ?? prefs.cliTools[0]?.id ?? '')
  const [exitCode, setExitCode]         = useState<number | null>(null)
  const [proposalReady, setProposalReady] = useState(false)
  const terminalRef  = useRef<TerminalPaneHandle>(null)
  const cancelledRef = useRef(false)

  // Pipe raw PTY data into the terminal widget for the lifetime of this component
  useEffect(() => {
    return window.api.cli.onData((data) => {
      terminalRef.current?.write(data)
    })
  }, [])

  // Detect proposal.md creation and surface it in the UI
  useEffect(() => {
    return window.api.cli.onProposalReady(() => {
      setProposalReady(true)
    })
  }, [])

  // Escape closes only when not running
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && (phase === 'input' || phase === 'complete' || phase === 'error')) {
        handleClose()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [phase]) // eslint-disable-line react-hooks/exhaustive-deps

  const hasTools  = prefs.cliTools.length > 0
  const canSubmit = description.trim().length > 0 && hasTools && toolId !== ''

  const toolGroups: SelectGroup[] = [{
    options: prefs.cliTools.map(t => ({ value: t.id, label: t.label, icon: 'terminal' as const })),
  }]

  async function handleSubmit() {
    if (!canSubmit) return
    cancelledRef.current = false
    setPhase('running')
    setExitCode(null)
    setProposalReady(false)

    const escapedDesc = description.replace(/"/g, '\\"')
    const command = buildCliCommand(toolId, { type: 'propose', description: escapedDesc })

    // getDimensions() is called here while still in input phase (terminal hidden).
    // TerminalPane.getDimensions() returns || 80/24 fallbacks so the PTY always
    // starts with at least 80×24; the ResizeObserver will issue a cli:resize
    // with the real dimensions once the container becomes visible.
    const dims = terminalRef.current?.getDimensions() ?? { cols: 80, rows: 24 }

    const result = await window.api.cli.invoke({ toolId, command, repoPath, ...dims })
    setExitCode(result.exitCode)

    if (cancelledRef.current) return

    if (result.exitCode === 0) {
      setPhase('complete')
    } else {
      if (result.exitCode === -2) {
        terminalRef.current?.write(
          '\r\nExecutable not found — verify the command in Settings or launch the app from a terminal.\r\n'
        )
      }
      setPhase('error')
    }
  }

  function killAndClose(callback: () => void) {
    window.api.cli.cancel()
    callback()
  }

  function handleCancel() {
    cancelledRef.current = true
    killAndClose(onClose)
  }

  function handleClose() {
    if (phase === 'complete') {
      killAndClose(onSuccess)
    } else {
      killAndClose(onClose)
    }
  }

  const showTerminal = phase === 'running' || phase === 'complete' || phase === 'error'
  const showInputs   = phase === 'input' || phase === 'error'

  return (
    <div
      className="sheet-overlay"
      onClick={e => { if (e.target === e.currentTarget && phase !== 'running') handleClose() }}
    >
      <div className="sheet" style={{ width: 860 }}>

        {/* Header */}
        <div className="sheet-head">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon name="pull-request" size={18} style={{ color: 'var(--accent-fg)' }} />
            <span className="sheet-title">
              {phase === 'complete' ? 'Proposal created' : phase === 'error' ? 'Error' : 'New Proposal'}
            </span>
          </div>
          {phase !== 'running' && (
            <Button variant="ghost" size="sm" icon={<Icon name="x-circle" size={16} />} onClick={handleClose} />
          )}
        </div>

        <div className="sheet-body" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* No tools warning */}
          {!hasTools && (
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: 10,
              padding: '12px 14px', borderRadius: 'var(--radius-md)',
              background: 'var(--warning-muted)', color: 'var(--warning-fg)',
              fontSize: 'var(--text-sm)',
            }}>
              <Icon name="warning" size={16} style={{ flexShrink: 0, marginTop: 1 }} />
              <span>
                No CLI tools configured. Add one in <strong>Settings</strong> first.
              </span>
            </div>
          )}

          {/* Error banner */}
          {phase === 'error' && (
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: 10,
              padding: '12px 14px', borderRadius: 'var(--radius-md)',
              background: 'var(--danger-muted)', color: 'var(--danger-fg)',
              fontSize: 'var(--text-sm)',
            }}>
              <Icon name="warning" size={16} style={{ flexShrink: 0, marginTop: 1 }} />
              <span>
                CLI exited with code {exitCode}. See output below.
              </span>
            </div>
          )}

          {/* Proposal detected while terminal still running */}
          {phase === 'running' && proposalReady && (
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: 10,
              padding: '12px 14px', borderRadius: 'var(--radius-md)',
              background: 'var(--success-muted)', color: 'var(--success-fg)',
              fontSize: 'var(--text-sm)',
            }}>
              <Icon name="check-circle" size={16} style={{ flexShrink: 0, marginTop: 1 }} />
              Proposal created. Click <strong>Done</strong> to view it.
            </div>
          )}

          {/* Success banner */}
          {phase === 'complete' && (
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: 10,
              padding: '12px 14px', borderRadius: 'var(--radius-md)',
              background: 'var(--success-muted)', color: 'var(--success-fg)',
              fontSize: 'var(--text-sm)',
            }}>
              <Icon name="check-circle" size={16} style={{ flexShrink: 0, marginTop: 1 }} />
              Proposal created. Click <strong>Done</strong> to view it.
            </div>
          )}

          {/* Description + tool selector — input & error phases */}
          {showInputs && (
            <>
              <Field label="Description" help="Describe what you want to build in plain language.">
                <TextArea
                  placeholder="e.g. Add user authentication with JWT tokens…"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  style={{ minHeight: 100, resize: 'vertical' }}
                  disabled={phase === 'error'}
                  autoFocus={phase === 'input'}
                />
              </Field>
              {hasTools && (
                <Field label="CLI Tool">
                  <Select groups={toolGroups} value={toolId} onChange={setToolId} icon="terminal" />
                </Field>
              )}
            </>
          )}

          {/* Terminal — always mounted so xterm initialises; hidden until running */}
          <TerminalPane
            ref={terminalRef}
            active={phase === 'running'}
            visible={showTerminal}
            style={{
              display: showTerminal ? 'block' : 'none',
              minHeight: 320,
              maxHeight: 520,
            }}
          />
        </div>

        {/* Footer */}
        <div className="sheet-footer">
          {phase === 'input' && (
            <>
              <Button variant="ghost" size="sm" onClick={() => killAndClose(onClose)}>Cancel</Button>
              <Button
                variant="primary" size="sm"
                icon={<Icon name="pull-request" size={14} />}
                onClick={handleSubmit}
                disabled={!canSubmit}
              >
                Create Proposal
              </Button>
            </>
          )}

          {phase === 'running' && !proposalReady && (
            <Button variant="danger" size="sm" onClick={handleCancel}>Cancel</Button>
          )}

          {phase === 'running' && proposalReady && (
            <Button variant="primary" size="sm" icon={<Icon name="check-circle" size={14} />} onClick={() => killAndClose(onSuccess)}>
              Done
            </Button>
          )}

          {phase === 'complete' && (
            <Button variant="primary" size="sm" icon={<Icon name="check-circle" size={14} />} onClick={handleClose}>
              Done
            </Button>
          )}

          {phase === 'error' && (
            <>
              <Button variant="ghost" size="sm" onClick={() => killAndClose(onClose)}>Close</Button>
              <Button
                variant="primary" size="sm"
                icon={<Icon name="play" size={14} />}
                onClick={() => setPhase('input')}
              >
                Try Again
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
