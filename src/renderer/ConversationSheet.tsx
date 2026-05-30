import { useState, useEffect, useRef } from 'react'
import { Icon, Button, Field, TextArea, Select } from './components'
import type { SelectGroup } from './components'
import type { Prefs } from '../shared/types'
import { TerminalPane } from './TerminalPane'
import type { TerminalPaneHandle } from './TerminalPane'

interface Props {
  repoPath: string
  changeName: string
  proposalText: string | null
  prefs: Prefs
  onPrefsChange: (prefs: Prefs) => void
  onSuccess: () => void
  onClose: () => void
}

type Phase = 'input' | 'running' | 'complete' | 'error'

export function ConversationSheet({ repoPath, changeName, proposalText, prefs, onPrefsChange, onSuccess, onClose }: Props) {
  const initialTool = prefs.perChangeTool?.[changeName] ?? prefs.defaultTool ?? prefs.cliTools[0]?.id ?? ''
  const [phase, setPhase]           = useState<Phase>('input')
  const [instruction, setInstruction] = useState('')
  const [toolId, setToolId]         = useState(initialTool)
  const [exitCode, setExitCode]     = useState<number | null>(null)
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
  const canSubmit = instruction.trim().length > 0 && hasTools && toolId !== ''

  const toolGroups: SelectGroup[] = [{
    options: prefs.cliTools.map(t => ({ value: t.id, label: t.label, icon: 'terminal' as const })),
  }]

  function handleToolChange(newToolId: string) {
    setToolId(newToolId)
    onPrefsChange({ ...prefs, perChangeTool: { ...prefs.perChangeTool, [changeName]: newToolId } })
  }

  async function handleSubmit() {
    if (!canSubmit) return
    cancelledRef.current = false
    onPrefsChange({ ...prefs, perChangeTool: { ...prefs.perChangeTool, [changeName]: toolId } })
    setPhase('running')
    setExitCode(null)

    const dims = terminalRef.current?.getDimensions() ?? { cols: 80, rows: 24 }
    const command = proposalText
      ? `I'm working on a change called "${changeName}". Here is its proposal:\n\n---\n${proposalText}\n---\n\n${instruction}\n\nPlease update the spec and other openspec files for this change as needed, keeping the existing OpenSpec format and structure.`
      : instruction
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
            <Icon name="terminal" size={18} style={{ color: 'var(--accent-fg)' }} />
            <span className="sheet-title">
              {phase === 'complete' ? 'Session complete' : phase === 'error' ? 'Error' : 'Continue Conversation'}
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
              Session complete. Click <strong>Done</strong> to return to the change.
            </div>
          )}

          {/* Instruction textarea + tool selector */}
          {showInputs && (
            <>
              <Field label="Instruction" help="Describe the changes you'd like to make to this proposal.">
                <TextArea
                  placeholder="e.g. Update the spec to also require email verification…"
                  value={instruction}
                  onChange={e => setInstruction(e.target.value)}
                  style={{ minHeight: 100, resize: 'vertical' }}
                  disabled={phase === 'error'}
                  autoFocus={phase === 'input'}
                />
              </Field>
              {hasTools && (
                <Field label="CLI Tool">
                  <Select groups={toolGroups} value={toolId} onChange={handleToolChange} icon="terminal" />
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
              <Button variant="ghost" size="sm" onClick={onClose}>Cancel</Button>
              <Button
                variant="primary" size="sm"
                icon={<Icon name="terminal" size={14} />}
                onClick={handleSubmit}
                disabled={!canSubmit}
              >
                Send
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
