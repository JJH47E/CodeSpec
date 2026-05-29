import { useState } from 'react'
import { Icon, Badge, Button, SearchInput, RowItem, Card, CardHead } from './components'
import type { ChangeState } from './components'
import type { IconName } from './components'

/* ---- Types ---- */
interface Change {
  id: string
  title: string
  spec: string
  state: ChangeState
  updatedAt: string
}

type NavView = 'changes' | 'chat' | 'settings'

/* ---- Sample data (replace with real data layer) ---- */
const SAMPLE_CHANGES: Change[] = [
  {
    id: '1',
    title: 'Refactor auth middleware to use JWT',
    spec: 'src/middleware/auth.ts',
    state: 'proposed',
    updatedAt: '2 min ago',
  },
  {
    id: '2',
    title: 'Add dark mode support to dashboard',
    spec: 'src/views/Dashboard.tsx',
    state: 'draft',
    updatedAt: '1 hr ago',
  },
  {
    id: '3',
    title: 'Fix pagination bug in changes list',
    spec: 'src/components/ChangeList.tsx',
    state: 'partial',
    updatedAt: '3 hr ago',
  },
]

const STATE_ICON: Record<ChangeState, IconName> = {
  draft:    'pencil',
  proposed: 'pull-request',
  partial:  'progress',
  applied:  'check-circle',
  archived: 'archive',
}

const STATE_TONE = {
  draft:    'muted',
  proposed: 'default',
  partial:  'warning',
  applied:  'success',
  archived: 'archived',
} as const

/* ---- Nav sidebar ---- */
const NAV_ITEMS: { id: NavView; label: string; icon: IconName }[] = [
  { id: 'changes',  label: 'Changes',  icon: 'pull-request' },
  { id: 'chat',     label: 'Chat',     icon: 'chat' },
  { id: 'settings', label: 'Settings', icon: 'gear-six' },
]

export function App() {
  const [view, setView]             = useState<NavView>('changes')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [query, setQuery]           = useState('')
  const [theme, setTheme]           = useState<'light' | 'dark'>('light')

  const filtered = SAMPLE_CHANGES.filter(
    c => c.title.toLowerCase().includes(query.toLowerCase()),
  )

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', next)
    setTheme(next)
  }

  const selected = SAMPLE_CHANGES.find(c => c.id === selectedId)

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* ---- Left nav ---- */}
      <nav style={{
        width: 48,
        flexShrink: 0,
        background: 'var(--bg-surface)',
        borderRight: '1px solid var(--border-default)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        gap: 4,
      }}>
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            type="button"
            title={item.label}
            onClick={() => setView(item.id)}
            style={{
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              background: view === item.id ? 'var(--bg-selected)' : 'transparent',
              color: view === item.id ? 'var(--accent-fg)' : 'var(--fg-muted)',
              transition: 'background var(--duration-fast), color var(--duration-fast)',
            }}
          >
            <Icon name={item.icon} size={20} />
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button
          type="button"
          title="Toggle theme"
          onClick={toggleTheme}
          style={{
            width: 36, height: 36, display: 'flex', alignItems: 'center',
            justifyContent: 'center', border: 'none', borderRadius: 'var(--radius-md)',
            cursor: 'pointer', background: 'transparent', color: 'var(--fg-muted)',
            transition: 'background var(--duration-fast)',
          }}
        >
          <Icon name="sparkle" size={18} />
        </button>
      </nav>

      {/* ---- Sidebar panel ---- */}
      <aside style={{
        width: 280,
        flexShrink: 0,
        background: 'var(--bg-surface)',
        borderRight: '1px solid var(--border-default)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}>
        {/* Sidebar header */}
        <div style={{
          padding: '13px 12px 10px',
          borderBottom: '1px solid var(--border-muted)',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--fg-default)' }}>
              Changes
            </span>
            <Button variant="primary" size="sm" icon={<Icon name="plus" size={13} />}>
              Propose
            </Button>
          </div>
          <SearchInput
            placeholder="Search changes…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        {/* Changes list */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {filtered.length === 0 ? (
            <div style={{
              padding: 24, textAlign: 'center',
              fontSize: 'var(--text-sm)', color: 'var(--fg-subtle)',
            }}>
              {query ? 'No changes match your search.' : 'No open changes. Propose one to get started.'}
            </div>
          ) : (
            filtered.map(change => (
              <RowItem
                key={change.id}
                icon={STATE_ICON[change.state]}
                iconTone={STATE_TONE[change.state]}
                title={change.title}
                sub={change.spec}
                selected={selectedId === change.id}
                onClick={() => setSelectedId(change.id)}
                right={<Badge state={change.state} />}
              />
            ))
          )}
        </div>
      </aside>

      {/* ---- Main content ---- */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: 'var(--bg-app)',
      }}>
        {selected ? (
          <ChangeDetail change={selected} onClose={() => setSelectedId(null)} />
        ) : (
          <EmptyMain />
        )}
      </main>
    </div>
  )
}

/* ---- Change detail panel ---- */
function ChangeDetail({ change, onClose }: { change: Change; onClose: () => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{
        padding: '12px 16px',
        borderBottom: '1px solid var(--border-default)',
        background: 'var(--bg-surface)',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
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
            {change.title}
          </div>
          <div style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--fg-subtle)',
            fontFamily: 'var(--font-mono)',
            marginTop: 2,
          }}>
            {change.spec}
          </div>
        </div>
        <Badge state={change.state} />
        <Button variant="ghost" size="sm" icon={<Icon name="x-circle" size={15} />} onClick={onClose} />
      </div>

      {/* Actions toolbar */}
      <div style={{
        padding: '10px 16px',
        borderBottom: '1px solid var(--border-muted)',
        display: 'flex',
        gap: 8,
        background: 'var(--bg-surface)',
      }}>
        <Button variant="secondary" size="sm" icon={<Icon name="compass" size={14} />}>Explore</Button>
        <Button variant="primary"   size="sm" icon={<Icon name="pull-request" size={14} />}>Propose</Button>
        <Button variant="secondary" size="sm" icon={<Icon name="check-circle" size={14} />}>Apply</Button>
        <div style={{ flex: 1 }} />
        <Button variant="ghost" size="sm" icon={<Icon name="archive" size={14} />}>Archive</Button>
      </div>

      {/* Content area */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
        <Card>
          <CardHead title="Spec" />
          <div style={{
            padding: 16,
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-sm)',
            color: 'var(--fg-muted)',
            lineHeight: 'var(--leading-relaxed)',
          }}>
            Spec content will appear here once loaded from the OpenSpec integration.
          </div>
        </Card>
      </div>
    </div>
  )
}

/* ---- Empty state ---- */
function EmptyMain() {
  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      color: 'var(--fg-subtle)',
    }}>
      <Icon name="file-text" size={40} />
      <div style={{ fontSize: 'var(--text-sm)', textAlign: 'center' }}>
        Select a change to view details.
      </div>
    </div>
  )
}
