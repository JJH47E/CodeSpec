import { useState } from 'react'
import { Icon, Button } from './components'
import type { Prefs } from '../shared/types'

interface Props {
  repoPath: string
  prefs: Prefs
  onNewProposal: () => void
  onRefresh: () => void
  onOpenRepo: () => Promise<string | null>
  onSettings: () => void
}

// 3.2 — Header: repo name, New Proposal, refresh, repo-switch, settings
export function Header({ repoPath, prefs, onNewProposal, onRefresh, onOpenRepo, onSettings }: Props) {
  const [refreshing, setRefreshing] = useState(false)
  const repoName = repoPath.split('/').pop() ?? repoPath

  async function handleRefresh() {
    setRefreshing(true)
    await onRefresh()
    setRefreshing(false)
  }

  const hasTools = prefs.cliTools.length > 0

  return (
    <header style={{
      height: 48,
      flexShrink: 0,
      background: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border-default)',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 12px',
    }}>
      {/* App identity */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--accent-fg)' }}>
        <Icon name="terminal" size={18} />
        <span style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--weight-semibold)',
          color: 'var(--fg-default)',
        }}>
          CodeSpec
        </span>
      </div>

      <div style={{ width: 1, height: 18, background: 'var(--border-default)', margin: '0 4px' }} />

      {/* Repo name + switch button */}
      {/* 3.3 — repo-switch wires to same openDirectory flow */}
      <button
        type="button"
        title="Switch repository"
        onClick={onOpenRepo}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--fg-muted)',
          fontSize: 'var(--text-sm)',
          borderRadius: 'var(--radius-md)',
          padding: '4px 8px',
          maxWidth: 220,
          overflow: 'hidden',
        }}
        className="repo-switch-btn"
      >
        <Icon name="git-branch" size={15} />
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {repoName}
        </span>
        <Icon name="caret-down" size={13} style={{ flexShrink: 0 }} />
      </button>

      <div style={{ flex: 1 }} />

      {/* New Proposal — disabled with tooltip if no tools configured */}
      <Button
        variant="primary"
        size="sm"
        icon={<Icon name="plus" size={14} />}
        onClick={onNewProposal}
        disabled={!hasTools}
        title={hasTools ? 'Create a new proposal' : 'Add a CLI tool in Settings first'}
      >
        New Proposal
      </Button>

      {/* Refresh */}
      <Button
        variant="ghost"
        size="sm"
        icon={<Icon name="arrows-clockwise" size={15} />}
        loading={refreshing}
        onClick={handleRefresh}
        title="Refresh changes"
      >
        Refresh
      </Button>

      {/* Settings */}
      <Button
        variant="ghost"
        size="sm"
        icon={<Icon name="gear-six" size={15} />}
        onClick={onSettings}
        title="Settings"
      />
    </header>
  )
}
