import { Icon, Badge, Segmented } from './components'
import type { Change } from '../shared/types'

type Filter = 'all' | 'active' | 'archived'

interface Props {
  changes: Change[]
  filter: Filter
  onFilterChange: (f: Filter) => void
  selectedChange: Change | null
  onSelect: (c: Change) => void
}

// 4.1 — Sidebar change list with active/archived grouping
export function ChangeList({ changes, filter, onFilterChange, selectedChange, onSelect }: Props) {
  // 4.2 — Filter tabs: All / Active / Archived
  const FILTER_OPTIONS = [
    { value: 'all',      label: 'All' },
    { value: 'active',   label: 'Active' },
    { value: 'archived', label: 'Archived' },
  ]

  const visible = changes.filter(c => {
    if (filter === 'all') return true
    if (filter === 'active') return c.status === 'active' || c.status === 'in-progress' || c.status === 'done'
    return c.status === filter
  })

  const active   = visible.filter(c => c.status === 'active' || c.status === 'in-progress' || c.status === 'done')
  const archived = visible.filter(c => c.status === 'archived')

  return (
    <aside style={{
      width: 280,
      flexShrink: 0,
      background: 'var(--bg-surface)',
      borderRight: '1px solid var(--border-default)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Filter header */}
      <div style={{
        padding: '10px 12px',
        borderBottom: '1px solid var(--border-muted)',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}>
        <div style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--weight-semibold)',
          color: 'var(--fg-default)',
        }}>
          Changes
        </div>
        <Segmented
          options={FILTER_OPTIONS}
          value={filter}
          onChange={v => onFilterChange(v as Filter)}
        />
      </div>

      {/* List */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* 4.7 — empty state when no changes exist */}
        {visible.length === 0 ? (
          <div style={{
            padding: 24,
            textAlign: 'center',
            fontSize: 'var(--text-sm)',
            color: 'var(--fg-subtle)',
            lineHeight: 'var(--leading-relaxed)',
          }}>
            {filter === 'archived'
              ? 'No archived changes.'
              : 'No changes yet. Create a new proposal to get started.'}
          </div>
        ) : (
          <>
            {/* Active group */}
            {active.length > 0 && (
              <>
                {filter === 'all' && (
                  <GroupLabel label="Active" count={active.length} />
                )}
                {active.map(c => (
                  <ChangeListItem
                    key={c.path}
                    change={c}
                    selected={selectedChange?.path === c.path}
                    onClick={() => onSelect(c)}
                  />
                ))}
              </>
            )}

            {/* Archived group */}
            {archived.length > 0 && (
              <>
                {filter === 'all' && (
                  <GroupLabel label="Archived" count={archived.length} />
                )}
                {archived.map(c => (
                  <ChangeListItem
                    key={c.path}
                    change={c}
                    selected={selectedChange?.path === c.path}
                    onClick={() => onSelect(c)}
                  />
                ))}
              </>
            )}
          </>
        )}
      </div>
    </aside>
  )
}

function GroupLabel({ label, count }: { label: string; count: number }) {
  return (
    <div style={{
      padding: '8px 12px 4px',
      fontSize: 10,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--fg-faint)',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
    }}>
      {label}
      <span style={{
        minWidth: 16,
        height: 16,
        padding: '0 4px',
        borderRadius: 'var(--radius-full)',
        background: 'var(--bg-subtle)',
        color: 'var(--fg-faint)',
        fontSize: 10,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {count}
      </span>
    </div>
  )
}

// 4.3 — Change list item: name, date, status badge
function ChangeListItem({ change, selected, onClick }: {
  change: Change
  selected: boolean
  onClick: () => void
}) {
  const icon =
    change.status === 'archived'    ? 'archive' as const :
    change.status === 'in-progress' ? 'git-branch' as const :
    change.status === 'done'        ? 'check-circle' as const :
                                      'pull-request' as const

  const icStyle =
    change.status === 'archived'    ? { background: 'var(--state-archived-bg)', color: 'var(--state-archived-fg)' } :
    change.status === 'in-progress' ? { background: 'var(--warning-muted)', color: 'var(--warning-fg)' } :
    change.status === 'done'        ? { background: 'var(--success-muted)', color: 'var(--success-fg)' } :
                                      { background: 'var(--accent-subtle)', color: 'var(--accent-fg)' }

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

  return (
    <div
      className={'row-item' + (selected ? ' selected' : '')}
      onClick={onClick}
    >
      <div className="row-ic" style={icStyle}>
        <Icon name={icon} size={17} />
      </div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div className="row-title" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {change.name}
        </div>
        {change.createdAt && (
          <div className="row-sub">{change.createdAt}</div>
        )}
      </div>
      <Badge tone={badgeTone} icon={icon}>
        {badgeLabel}
      </Badge>
    </div>
  )
}
