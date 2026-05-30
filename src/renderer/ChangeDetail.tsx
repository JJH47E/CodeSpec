import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { Icon, Badge, Button, ConfirmDialog } from './components'
import type { Change } from '../shared/types'

type Tab = 'proposal' | 'design' | 'tasks'
type ConfirmAction = 'delete' | 'archive' | null

interface Props {
  change: Change | null
  proposalText: string | null
  designText: string | null
  tasksText: string | null
  onApply?: () => void
  onContinue?: () => void
  onDelete?: () => void
  onArchive?: () => void
}

function isStarted(tasksText: string | null): boolean {
  if (!tasksText) return false
  return /^- \[[ x]\]/m.test(tasksText)
}

function countIncomplete(tasksText: string | null): number {
  if (!tasksText) return 0
  return (tasksText.match(/^- \[ \]/gm) ?? []).length
}

// 4.4 / 4.5 / 4.6 — Change detail pane with artifact tab navigation and markdown renderer
export function ChangeDetail({ change, proposalText, designText, tasksText, onApply, onContinue, onDelete, onArchive }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('proposal')
  const [confirmAction, setConfirmAction] = useState<ConfirmAction>(null)

  // Reset to proposal tab and clear any pending confirmation whenever the selected change switches
  useEffect(() => {
    setActiveTab('proposal')
    setConfirmAction(null)
  }, [change?.path])

  // 4.6 — No change selected
  if (!change) {
    return (
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        background: 'var(--bg-app)',
        color: 'var(--fg-subtle)',
      }}>
        <Icon name="file-text" size={36} />
        <div style={{ fontSize: 'var(--text-sm)' }}>Select a change to view its proposal.</div>
      </main>
    )
  }

  const icon =
    change.status === 'archived'    ? 'archive' as const :
    change.status === 'in-progress' ? 'git-branch' as const :
    change.status === 'done'        ? 'check-circle' as const :
                                      'pull-request' as const

  const badgeTone =
    change.status === 'archived'    ? 'neutral' as const :
    change.status === 'in-progress' ? 'warning' as const :
    change.status === 'done'        ? 'success' as const :
                                      'accent' as const

  const badgeLabel =
    change.status === 'archived'    ? 'Archived' :
    change.status === 'in-progress' ? 'In Progress' :
    change.status === 'done'        ? 'Done' :
                                      'Active'

  const tabs: { id: Tab; label: string }[] = [
    { id: 'proposal', label: 'Proposal' },
    { id: 'design',   label: 'Design'   },
    { id: 'tasks',    label: 'Tasks'    },
  ]

  const activeText =
    activeTab === 'proposal' ? proposalText :
    activeTab === 'design'   ? designText   :
                               tasksText

  const emptyMessage =
    activeTab === 'proposal' ? 'No proposal written yet.' :
    activeTab === 'design'   ? 'No design document yet.'  :
                               'No tasks written yet.'

  const started = isStarted(tasksText)
  const incomplete = countIncomplete(tasksText)

  const confirmTitle =
    confirmAction === 'delete' ? 'Delete this change?' : 'Archive this change?'

  const confirmMessage = confirmAction && change?.status === 'in-progress'
    ? `${incomplete} task${incomplete !== 1 ? 's are' : ' is'} not yet complete. Are you sure you want to ${confirmAction} this change?`
    : confirmAction === 'delete'
      ? 'This will permanently remove the change directory. This cannot be undone.'
      : 'This will move the change to the archive.'

  return (
    <main style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: 'var(--bg-app)',
      position: 'relative',
    }}>
      {/* Detail header */}
      <div style={{
        padding: '12px 20px',
        borderBottom: '1px solid var(--border-default)',
        background: 'var(--bg-surface)',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flexShrink: 0,
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--weight-semibold)',
            color: 'var(--fg-default)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {change.name}
          </div>
          {change.schema && (
            <div style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--fg-subtle)',
              fontFamily: 'var(--font-mono)',
              marginTop: 2,
            }}>
              {change.schema}
            </div>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {change.status !== 'archived' && onApply && (
            <Button
              variant="secondary"
              size="sm"
              icon={<Icon name="play" size={14} />}
              onClick={onApply}
            >
              Apply
            </Button>
          )}
          {change.status !== 'archived' && onContinue && (
            <Button
              variant="secondary"
              size="sm"
              icon={<Icon name="terminal" size={14} weight="regular" />}
              onClick={onContinue}
            >
              Continue
            </Button>
          )}
          {change.status !== 'archived' && onArchive && (
            <Button
              variant="secondary"
              size="sm"
              icon={<Icon name="archive" size={14} />}
              onClick={() => setConfirmAction('archive')}
            >
              Archive
            </Button>
          )}
          {change.status !== 'archived' && onDelete && (
            <Button
              variant="danger"
              size="sm"
              onClick={() => setConfirmAction('delete')}
            >
              Delete
            </Button>
          )}
          <Badge tone={badgeTone} icon={icon}>
            {badgeLabel}
          </Badge>
        </div>
      </div>

      {/* Tab bar */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid var(--border-default)',
        background: 'var(--bg-surface)',
        flexShrink: 0,
        paddingLeft: 20,
        gap: 0,
      }}>
        {tabs.map(tab => {
          const isActive = tab.id === activeTab
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: isActive ? '2px solid var(--accent-default)' : '2px solid transparent',
                padding: '8px 14px',
                fontSize: 'var(--text-sm)',
                fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-normal)',
                color: isActive ? 'var(--fg-default)' : 'var(--fg-subtle)',
                cursor: 'pointer',
                marginBottom: -1,
              }}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 24 }}>
        {activeText === null ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            height: '100%',
            color: 'var(--fg-subtle)',
          }}>
            <Icon name="file-text" size={32} />
            <div style={{ fontSize: 'var(--text-sm)' }}>{emptyMessage}</div>
          </div>
        ) : (
          <div style={{ maxWidth: 680 }}>
            {renderMarkdown(activeText)}
          </div>
        )}
      </div>

      {confirmAction && (
        <ConfirmDialog
          title={confirmTitle}
          message={confirmMessage}
          confirmLabel={confirmAction === 'delete' ? 'Delete' : 'Archive'}
          onConfirm={() => {
            setConfirmAction(null)
            if (confirmAction === 'delete') onDelete?.()
            else onArchive?.()
          }}
          onCancel={() => setConfirmAction(null)}
        />
      )}
    </main>
  )
}

// 4.4 — Minimal markdown renderer (H2, H3, bold, inline-code, bullets)
function renderMarkdown(text: string): ReactNode[] {
  const lines = text.split('\n')
  const elements: ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} style={{
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--weight-semibold)',
          color: 'var(--fg-default)',
          margin: '24px 0 8px',
          lineHeight: 1.4,
          paddingBottom: 6,
          borderBottom: '1px solid var(--border-muted)',
        }}>
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--weight-semibold)',
          color: 'var(--fg-default)',
          margin: '16px 0 6px',
          lineHeight: 1.4,
        }}>
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith('- ')) {
      const bullets: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        bullets.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} style={{ margin: '6px 0', paddingLeft: 20 }}>
          {bullets.map((b, j) => (
            <li key={j} style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--fg-muted)',
              lineHeight: 'var(--leading-relaxed)',
              marginBottom: 3,
            }}>
              {renderInline(b)}
            </li>
          ))}
        </ul>
      )
      continue
    } else if (line.trim()) {
      elements.push(
        <p key={i} style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--fg-muted)',
          lineHeight: 'var(--leading-relaxed)',
          margin: '6px 0',
        }}>
          {renderInline(line)}
        </p>
      )
    }

    i++
  }

  return elements
}

function renderInline(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} style={{ fontWeight: 'var(--weight-semibold)', color: 'var(--fg-default)' }}>
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.875em',
          background: 'var(--bg-subtle)',
          padding: '1px 5px',
          borderRadius: 'var(--radius-sm)',
          color: 'var(--fg-default)',
        }}>
          {part.slice(1, -1)}
        </code>
      )
    }
    return part
  })
}
