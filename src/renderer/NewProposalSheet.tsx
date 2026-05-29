import { useState, useEffect, useRef } from 'react'
import { Icon, Button, Field, TextArea, Select } from './components'
import type { SelectGroup } from './components'
import type { Prefs } from '../shared/types'

interface Props {
  repoPath: string
  prefs: Prefs
  onSuccess: () => void
  onClose: () => void
}

type Phase = 'input' | 'running' | 'complete' | 'error'

export function NewProposalSheet({ repoPath, prefs, onSuccess, onClose }: Props) {
  const [phase, setPhase]             = useState<Phase>('input')
  const [description, setDescription] = useState('')
  const [toolId, setToolId]           = useState(prefs.defaultTool ?? prefs.cliTools[0]?.id ?? '')
  const [outputLines, setOutputLines] = useState<string[]>([])
  const [exitCode, setExitCode]       = useState<number | null>(null)
  const logRef      = useRef<HTMLDivElement>(null)
  const cancelledRef = useRef(false)

  // Register output listener for the lifetime of this component — avoids
  // race conditions where final output lines arrive after invoke() resolves.
  useEffect(() => {
    return window.api.cli.onOutput((line) => {
      setOutputLines(prev => [...prev, line])
    })
  }, [])

  // Escape closes only in input phase; disabled while running
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && (phase === 'input' || phase === 'complete' || phase === 'error')) {
        handleClose()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [phase]) // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-scroll log
  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight
  }, [outputLines])

  const hasTools  = prefs.cliTools.length > 0
  const canSubmit = description.trim().length > 0 && hasTools && toolId !== ''

  const toolGroups: SelectGroup[] = [{
    options: prefs.cliTools.map(t => ({ value: t.id, label: t.label, icon: 'terminal' as const })),
  }]

  async function handleSubmit() {
    if (!canSubmit) return
    cancelledRef.current = false
    setPhase('running')
    setOutputLines([])
    setExitCode(null)

    const escapedDesc = description.replace(/"/g, '\\"')
    const command = `/opsx:propose "${escapedDesc}"`

    const result = await window.api.cli.invoke({ toolId, command, repoPath })
    setExitCode(result.exitCode)

    if (cancelledRef.current) return

    if (result.exitCode === 0) {
      // Show complete phase so the user can review output before the list refreshes
      setPhase('complete')
    } else {
      if (result.exitCode === -2) {
        setOutputLines(prev => [
          ...prev,
          'Executable not found — verify the command in Settings or launch the app from a terminal.',
        ])
      }
      setPhase('error')
    }
  }

  function handleCancel() {
    cancelledRef.current = true
    window.api.cli.cancel()
    onClose()
  }

  function handleClose() {
    if (phase === 'complete') {
      onSuccess()
    } else {
      onClose()
    }
  }

const showLog    = phase === 'running' || phase === 'complete' || phase === 'error'
  const showInputs = phase === 'input' || phase === 'error'

  return (
    <div
      className="sheet-overlay"
      onClick={e => { if (e.target === e.currentTarget && phase !== 'running') handleClose() }}
    >
      <div className="sheet" style={{ width: 560 }}>

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

          {/* Running status */}
          {phase === 'running' && (
            <div className="loading-inline">
              <span className="spinner" style={{ display: 'inline-block', width: 14, height: 14 }}>
                <svg viewBox="0 0 14 14" fill="none" width={14} height={14}>
                  <circle className="sp-track" cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="2.5" />
                  <path className="sp-arc" d="M7 1.5A5.5 5.5 0 0 1 12.5 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
              Running…
            </div>
          )}

          {/* Output log */}
          {showLog && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div
                ref={logRef}
                style={{
                  background: 'var(--bg-inset)',
                  border: '1px solid var(--border-muted)',
                  borderRadius: 'var(--radius-md)',
                  padding: '10px 12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: 'var(--fg-muted)',
                  lineHeight: 1.6,
                  overflowY: 'auto',
                  maxHeight: 260,
                  minHeight: 80,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-all',
                }}
              >
                {outputLines.length === 0
                  ? <span style={{ color: 'var(--fg-faint)' }}>Waiting for output…</span>
                  : outputLines.map((line, i) => <div key={i}>{line}</div>)
                }
              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sheet-footer">
          {phase === 'input' && (
            <>
              <Button variant="ghost" size="sm" onClick={onClose}>Cancel</Button>
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

          {phase === 'running' && (
            <Button variant="danger" size="sm" onClick={handleCancel}>Cancel</Button>
          )}

          {phase === 'complete' && (
            <Button variant="primary" size="sm" icon={<Icon name="check-circle" size={14} />} onClick={handleClose}>
              Done
            </Button>
          )}

          {phase === 'error' && (
            <>
              <Button variant="ghost" size="sm" onClick={onClose}>Close</Button>
              <Button
                variant="primary" size="sm"
                icon={<Icon name="play" size={14} />}
                onClick={() => { setPhase('input'); setOutputLines([]) }}
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
