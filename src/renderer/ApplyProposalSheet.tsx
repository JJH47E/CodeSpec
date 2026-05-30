import { useState, useEffect, useRef } from 'react'
import { Icon, Button, Field, Select } from './components'
import type { SelectGroup } from './components'
import type { Prefs } from '../shared/types'
import { TerminalPane } from './TerminalPane'
import type { TerminalPaneHandle } from './TerminalPane'

interface Props {
  repoPath: string
  changeName: string
  prefs: Prefs
  onPrefsChange: (prefs: Prefs) => void
  onSuccess: () => void
  onClose: () => void
}

type Phase = 'input' | 'running' | 'complete' | 'error'

export function ApplyProposalSheet({ repoPath, changeName, prefs, onPrefsChange, onSuccess, onClose }: Props) {
  const initialTool = prefs.perChangeTool?.[changeName] ?? prefs.defaultTool ?? prefs.cliTools[0]?.id ?? ''
  const [phase, setPhase]     = useState<Phase>('input')
  const [toolId, setToolId]   = useState(initialTool)
  const [exitCode, setExitCode] = useState<number | null>(null)
  const terminalRef  = useRef<TerminalPaneHandle>(null)
  const cancelledRef = useRef(false)

  useEffect(() => {
    return window.api.cli.onData((data) => {
      terminalRef.current?.write(data)
    })
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && phase !== 'running') handleClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [phase]) // eslint-disable-line react-hooks/exhaustive-deps

  const hasTools  = prefs.cliTools.length > 0
  const canSubmit = hasTools && toolId !== ''

  const toolGroups: SelectGroup[] = [{
    options: prefs.cliTools.map(t => ({ value: t.id, label: t.label, icon: 'terminal' as const })),
  }]

  function handleToolChange(newToolId: string) {
    setToolId(newToolId)
    onPrefsChange({ ...prefs, perChangeTool: { ...prefs.perChangeTool, [changeName]: newToolId } })
  }

  function buildCommand(): string {
    if (toolId === 'claude-code') {
      return `/opsx:apply "${changeName}"`
    }
    return (
      `Read openspec/changes/${changeName}/proposal.md, design.md, specs/, and tasks.md, ` +
      `then implement all incomplete tasks marked "- [ ]", updating each to "- [x]" as you complete it.`
    )
  }

  async function handleSubmit() {
    if (!canSubmit) return
    cancelledRef.current = false
    onPrefsChange({ ...prefs, perChangeTool: { ...prefs.perChangeTool, [changeName]: toolId } })
    setPhase('running')
    setExitCode(null)

    const dims = terminalRef.current?.getDimensions() ?? { cols: 80, rows: 24 }
    const result = await window.api.cli.invoke({ toolId, command: buildCommand(), repoPath, ...dims })
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

  return (
    <div
      className="sheet-overlay"
      onClick={e => { if (e.target === e.currentTarget && phase !== 'running') killAndClose(onClose) }}
    >
      <div className="sheet" style={{ width: 860 }}>

        {/* Header */}
        <div className="sheet-head">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon name="play" size={18} style={{ color: 'var(--accent-fg)' }} />
            <span className="sheet-title">
              {phase === 'complete' ? 'Apply complete' : phase === 'error' ? 'Error' : 'Apply Proposal'}
            </span>
          </div>
          {phase !== 'running' && (
            <Button variant="ghost" size="sm" icon={<Icon name="x-circle" size={16} />} onClick={handleClose} />
          )}
        </div>

        <div className="sheet-body" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Error banner */}
          {phase === 'error' && (
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: 10,
              padding: '12px 14px', borderRadius: 'var(--radius-md)',
              background: 'var(--danger-muted)', color: 'var(--danger-fg)',
              fontSize: 'var(--text-sm)',
            }}>
              <Icon name="warning" size={16} style={{ flexShrink: 0, marginTop: 1 }} />
              <span>CLI exited with code {exitCode}. See output below.</span>
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
              Apply complete. Click <strong>Done</strong> to return to the change.
            </div>
          )}

          {/* Tool selector — input phase */}
          {phase === 'input' && hasTools && (
            <Field label="CLI Tool">
              <Select groups={toolGroups} value={toolId} onChange={handleToolChange} icon="terminal" />
            </Field>
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
                icon={<Icon name="play" size={14} />}
                onClick={handleSubmit}
                disabled={!canSubmit}
              >
                Apply
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
