import type { ReactNode } from 'react'
import { Icon, Badge, Button } from './components'
import type { Change } from '../shared/types'

interface Props {
  change: Change | null
  proposalText: string | null
  onContinue?: () => void
}

// 4.4 / 4.5 / 4.6 — Change detail pane with proposal.md renderer and empty states
export function ChangeDetail({ change, proposalText, onContinue }: Props) {
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

  const icon = change.status === 'archived' ? 'archive' as const : 'pull-request' as const

  return (
    <main style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: 'var(--bg-app)',
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
          {change.status === 'active' && onContinue && (
            <Button
              variant="secondary"
              size="sm"
              icon={<Icon name="terminal" size={14} />}
              onClick={onContinue}
            >
              Continue
            </Button>
          )}
          <Badge
            tone={change.status === 'archived' ? 'neutral' : 'accent'}
            icon={icon}
          >
            {change.status === 'archived' ? 'Archived' : 'Active'}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 24 }}>
        {/* 4.5 — no proposal.md */}
        {proposalText === null ? (
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
            <div style={{ fontSize: 'var(--text-sm)' }}>No proposal written yet.</div>
          </div>
        ) : (
          <div style={{ maxWidth: 680 }}>
            {renderMarkdown(proposalText)}
          </div>
        )}
      </div>
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
