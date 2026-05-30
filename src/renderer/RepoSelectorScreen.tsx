import { useState } from 'react'
import { Icon, Button } from './components'

interface Props {
  onOpenRepo: () => Promise<string | null>
}

export function RepoSelectorScreen({ onOpenRepo }: Props) {
  const [loading, setLoading] = useState(false)

  async function handleOpen() {
    setLoading(true)
    await onOpenRepo()
    setLoading(false)
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
      </div>
    </div>
  )
}
