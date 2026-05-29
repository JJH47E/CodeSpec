import { useState } from 'react'
import { Icon, Button } from './components'

interface Props {
  onOpenRepo: () => Promise<string | null>
}

// 2.1 — Full-viewport empty state; 2.3 — inline error display
export function RepoSelectorScreen({ onOpenRepo }: Props) {
  const [error, setError]     = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  // 2.2 — wires to repo:openDirectory; 2.5 — gracefully handles null (cancelled)
  async function handleOpen() {
    setError(null)
    setLoading(true)
    const err = await onOpenRepo()
    setLoading(false)
    if (err) setError(err)
  }

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-app)',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        maxWidth: 340,
        textAlign: 'center',
        padding: '0 24px',
      }}>
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
          <Icon name="terminal" size={28} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{
            fontSize: 'var(--text-xl, 1.25rem)',
            fontWeight: 'var(--weight-semibold)',
            color: 'var(--fg-default)',
          }}>
            CodeSpec
          </div>
          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--fg-subtle)', lineHeight: 'var(--leading-relaxed)' }}>
            Open a repository to view and create OpenSpec proposals with your AI CLI tools.
          </div>
        </div>

        <Button
          variant="primary"
          size="md"
          icon={<Icon name="git-branch" size={16} />}
          onClick={handleOpen}
          loading={loading}
        >
          Open Repository
        </Button>

        {/* 2.3 — error when selected dir is not an openspec repo */}
        {error && (
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 8,
            padding: '10px 14px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--danger-muted)',
            color: 'var(--danger-fg)',
            fontSize: 'var(--text-sm)',
            textAlign: 'left',
            width: '100%',
          }}>
            <Icon name="warning" size={16} style={{ flexShrink: 0, marginTop: 1 }} />
            {error}
          </div>
        )}
      </div>
    </div>
  )
}
