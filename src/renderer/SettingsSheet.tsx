import { useState, useEffect } from 'react'
import { Icon, Button, Field, Input, Select, Spinner } from './components'
import type { SelectGroup } from './components'
import type { CliTool, DetectedTool, Prefs } from '../shared/types'

interface Props {
  prefs: Prefs
  onPrefsChange: (updated: Prefs) => void
  onClose: () => void
}

interface ToolFormState {
  label: string
  command: string
  argsStr: string
}

const EMPTY_FORM: ToolFormState = { label: '', command: '', argsStr: '' }

// 5.1 — Settings sheet with CLI tool management
export function SettingsSheet({ prefs, onPrefsChange, onClose }: Props) {
  const [tools, setTools]           = useState<CliTool[]>(prefs.cliTools)
  const [defaultTool, setDefaultTool] = useState(prefs.defaultTool)
  const [editingId, setEditingId]   = useState<string | null>(null)
  const [adding, setAdding]         = useState(false)
  const [form, setForm]             = useState<ToolFormState>(EMPTY_FORM)
  const [confirmRemove, setConfirmRemove] = useState<string | null>(null)
  const [detectedTools, setDetectedTools] = useState<DetectedTool[]>([])
  const [detecting, setDetecting]   = useState(true)
  const [quickAddValue, setQuickAddValue] = useState('')

  // Escape key closes the sheet
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  // Detect available AI CLI tools on mount
  useEffect(() => {
    window.api.cli.detectTools().then(found => {
      setDetectedTools(found)
      setDetecting(false)
    })
  }, [])

  function commit(nextTools: CliTool[], nextDefault: string | null) {
    setTools(nextTools)
    setDefaultTool(nextDefault)
    onPrefsChange({ ...prefs, cliTools: nextTools, defaultTool: nextDefault })
  }

  // 5.3 — Add tool
  function handleSaveNew() {
    if (!isFormValid(form)) return
    const id = slugify(form.label) || `tool-${Date.now()}`
    const newTool: CliTool = {
      id: tools.find(t => t.id === id) ? `${id}-${Date.now()}` : id,
      label:   form.label.trim(),
      command: form.command.trim(),
      args:    form.argsStr.trim().split(/\s+/).filter(Boolean),
    }
    const next = [...tools, newTool]
    const nextDefault = defaultTool ?? newTool.id
    commit(next, nextDefault)
    setAdding(false)
    setForm(EMPTY_FORM)
  }

  // 5.4 — Save edit
  function handleSaveEdit(id: string) {
    if (!isFormValid(form)) return
    const next = tools.map(t =>
      t.id === id ? { ...t, label: form.label.trim(), command: form.command.trim(), args: form.argsStr.trim().split(/\s+/).filter(Boolean) } : t
    )
    commit(next, defaultTool)
    setEditingId(null)
    setForm(EMPTY_FORM)
  }

  // 5.5 — Remove tool
  function handleRemove(id: string) {
    const next = tools.filter(t => t.id !== id)
    const nextDefault = defaultTool === id ? (next[0]?.id ?? null) : defaultTool
    commit(next, nextDefault)
    setConfirmRemove(null)
  }

  // 5.6 — Set default
  function handleSetDefault(id: string) {
    setDefaultTool(id)
    onPrefsChange({ ...prefs, cliTools: tools, defaultTool: id })
  }

  return (
    <div className="sheet-overlay" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="sheet" style={{ width: 520 }}>
        <div className="sheet-head">
          <span className="sheet-title">Settings</span>
          <Button variant="ghost" size="sm" icon={<Icon name="x-circle" size={16} />} onClick={onClose} />
        </div>

        <div className="sheet-body">
          {/* 5.7 — Section label */}
          <div className="section-label">CLI Tools</div>

          {/* 5.7 — Empty state */}
          {tools.length === 0 && !adding && (
            <div style={{
              padding: '20px 0',
              textAlign: 'center',
              color: 'var(--fg-subtle)',
              fontSize: 'var(--text-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              alignItems: 'center',
            }}>
              <Icon name="terminal" size={28} style={{ color: 'var(--fg-faint)' }} />
              <div>
                No CLI tools configured yet.
                <br />
                Add one to start creating proposals.
              </div>
              <div style={{
                background: 'var(--bg-inset)',
                border: '1px solid var(--border-muted)',
                borderRadius: 'var(--radius-md)',
                padding: '10px 14px',
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--fg-muted)',
                textAlign: 'left',
                lineHeight: 1.7,
              }}>
                <div style={{ color: 'var(--fg-faint)', marginBottom: 4 }}>Example — Claude Code</div>
                <div>Label: <span style={{ color: 'var(--fg-default)' }}>Claude Code</span></div>
                <div>Command: <span style={{ color: 'var(--fg-default)' }}>claude</span></div>
                <div>Args: <span style={{ color: 'var(--fg-default)' }}>-p {'{command}'}</span></div>
              </div>
            </div>
          )}

          {/* Tool list */}
          {tools.length > 0 && (
            <div style={{
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              marginBottom: 12,
            }}>
              {tools.map((tool, idx) => (
                <div key={tool.id}>
                  {idx > 0 && <div style={{ height: 1, background: 'var(--border-muted)' }} />}

                  {editingId === tool.id ? (
                    <ToolForm
                      form={form}
                      onChange={setForm}
                      onSave={() => handleSaveEdit(tool.id)}
                      onCancel={() => { setEditingId(null); setForm(EMPTY_FORM) }}
                    />
                  ) : (
                    <ToolRow
                      tool={tool}
                      isDefault={defaultTool === tool.id}
                      confirmingRemove={confirmRemove === tool.id}
                      onEdit={() => { setEditingId(tool.id); setAdding(false); setForm({ label: tool.label, command: tool.command, argsStr: tool.args.join(' ') }) }}
                      onRemoveClick={() => setConfirmRemove(tool.id)}
                      onRemoveConfirm={() => handleRemove(tool.id)}
                      onRemoveCancel={() => setConfirmRemove(null)}
                      onSetDefault={() => handleSetDefault(tool.id)}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Inline add form */}
          {adding && (
            <div style={{
              border: '1px solid var(--border-focus)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              marginBottom: 12,
            }}>
              <ToolForm
                form={form}
                onChange={setForm}
                onSave={handleSaveNew}
                onCancel={() => { setAdding(false); setForm(EMPTY_FORM) }}
              />
            </div>
          )}

          {/* Quick add / Add Tool */}
          {!adding && editingId === null && (
            detecting ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Spinner size={14} />
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--fg-subtle)' }}>Detecting tools…</span>
              </div>
            ) : detectedTools.length > 0 ? (
              <Select
                groups={buildQuickAddGroups(detectedTools)}
                value={quickAddValue}
                onChange={v => {
                  if (v === '__manual__') {
                    setAdding(true); setForm(EMPTY_FORM); setQuickAddValue('')
                  } else if (v) {
                    const tool = detectedTools.find(t => t.id === v)
                    if (tool) {
                      setAdding(true)
                      setForm({ label: tool.label, command: tool.command, argsStr: tool.args.join(' ') })
                    }
                    setQuickAddValue('')
                  }
                }}
              />
            ) : (
              <Button
                variant="secondary"
                size="sm"
                icon={<Icon name="plus" size={14} />}
                onClick={() => { setAdding(true); setForm(EMPTY_FORM) }}
              >
                Add Tool
              </Button>
            )
          )}
        </div>
      </div>
    </div>
  )
}

// ---- Quick-add dropdown builder --------------------------------------------

function buildQuickAddGroups(detected: DetectedTool[]): SelectGroup[] {
  return [
    { options: [{ value: '', label: 'Quick add…', icon: 'plus' }] },
    { label: 'Detected', options: detected.map(t => ({ value: t.id, label: t.label, icon: 'terminal' as const })) },
    { options: [{ value: '__manual__', label: 'Enter manually', icon: 'pencil' }] },
  ]
}

// ---- Tool row --------------------------------------------------------------

interface ToolRowProps {
  tool: CliTool
  isDefault: boolean
  confirmingRemove: boolean
  onEdit: () => void
  onRemoveClick: () => void
  onRemoveConfirm: () => void
  onRemoveCancel: () => void
  onSetDefault: () => void
}

function ToolRow({ tool, isDefault, confirmingRemove, onEdit, onRemoveClick, onRemoveConfirm, onRemoveCancel, onSetDefault }: ToolRowProps) {
  return (
    <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--fg-default)', flex: 1 }}>
          {tool.label}
        </span>
        {/* 5.6 — Default badge */}
        {isDefault && (
          <span style={{
            fontSize: 11,
            fontWeight: 'var(--weight-medium)',
            color: 'var(--accent-fg)',
            background: 'var(--accent-muted)',
            padding: '2px 7px',
            borderRadius: 'var(--radius-full)',
          }}>
            Default
          </span>
        )}
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--fg-subtle)',
      }}>
        {tool.command} {tool.args.join(' ')}
      </div>

      {confirmingRemove ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--danger-fg)' }}>Remove this tool?</span>
          <Button variant="danger" size="sm" onClick={onRemoveConfirm}>Remove</Button>
          <Button variant="ghost" size="sm" onClick={onRemoveCancel}>Cancel</Button>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
          {!isDefault && (
            <Button variant="ghost" size="sm" onClick={onSetDefault}>Set as Default</Button>
          )}
          <Button variant="ghost" size="sm" icon={<Icon name="pencil" size={13} />} onClick={onEdit}>Edit</Button>
          <Button variant="ghost" size="sm" icon={<Icon name="trash" size={13} />} onClick={onRemoveClick}>Remove</Button>
        </div>
      )}
    </div>
  )
}

// ---- Tool form (add / edit) ------------------------------------------------

// 5.2 — Inline form with validation
function ToolForm({ form, onChange, onSave, onCancel }: {
  form: ToolFormState
  onChange: (f: ToolFormState) => void
  onSave: () => void
  onCancel: () => void
}) {
  const argsWarning = form.argsStr.trim().length > 0 && !form.argsStr.includes('{command}')
  const valid = isFormValid(form)

  return (
    <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: 12, background: 'var(--bg-subtle)' }}>
      <Field label="Label" help="Display name for this tool" error={!form.label.trim()}>
        <Input
          placeholder="Claude Code"
          value={form.label}
          onChange={e => onChange({ ...form, label: e.target.value })}
          autoFocus
        />
      </Field>
      <Field label="Command" help="The CLI executable (must be on PATH)">
        <Input
          placeholder="claude"
          value={form.command}
          onChange={e => onChange({ ...form, command: e.target.value })}
          mono
        />
      </Field>
      <Field
        label="Args"
        help={argsWarning ? 'Use {command} as a placeholder for the OpenSpec command' : 'Space-separated — use {command} as placeholder'}
        error={argsWarning}
      >
        <Input
          placeholder="-p {command}"
          value={form.argsStr}
          onChange={e => onChange({ ...form, argsStr: e.target.value })}
          mono
        />
      </Field>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
        <Button variant="ghost" size="sm" onClick={onCancel}>Cancel</Button>
        <Button variant="primary" size="sm" onClick={onSave} disabled={!valid}>Save</Button>
      </div>
    </div>
  )
}

// ---- Helpers ---------------------------------------------------------------

function isFormValid(form: ToolFormState): boolean {
  return form.label.trim().length > 0 && form.command.trim().length > 0 && form.argsStr.trim().length > 0
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}
