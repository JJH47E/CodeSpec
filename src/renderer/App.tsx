import { useState, useEffect, useCallback } from 'react'
import { RepoSelectorScreen } from './RepoSelectorScreen'
import { Header } from './Header'
import { ChangeList } from './ChangeList'
import { ChangeDetail } from './ChangeDetail'
import { SettingsSheet } from './SettingsSheet'
import { NewProposalSheet } from './NewProposalSheet'
import { ConversationSheet } from './ConversationSheet'
import { ApplyProposalSheet } from './ApplyProposalSheet'
import type { Change, Prefs } from '../shared/types'

// 3.1 — Root: manages repo state; renders RepoSelectorScreen or the 3-panel shell
export function App() {
  const [prefs, setPrefs]               = useState<Prefs>({ repoPath: null, cliTools: [], defaultTool: null, perChangeTool: {} })
  const [repoPath, setRepoPath]         = useState<string | null>(null)
  const [loading, setLoading]           = useState(true)
  const [changes, setChanges]           = useState<Change[]>([])
  const [selectedChange, setSelectedChange] = useState<Change | null>(null)
  const [proposalText, setProposalText] = useState<string | null>(null)
  const [designText, setDesignText]     = useState<string | null>(null)
  const [tasksText, setTasksText]       = useState<string | null>(null)
  const [proposalVersion, setProposalVersion] = useState(0)
  const [filter, setFilter]             = useState<'all' | 'active' | 'archived'>('all')
  const [settingsOpen, setSettingsOpen]       = useState(false)
  const [proposalOpen, setProposalOpen]       = useState(false)
  const [conversationOpen, setConversationOpen] = useState(false)
  const [applyOpen, setApplyOpen]             = useState(false)

  // 2.4 — Load prefs on startup; restore last repo path
  useEffect(() => {
    window.api.prefs.get().then(p => {
      setPrefs(p)
      if (p.repoPath) setRepoPath(p.repoPath)
      setLoading(false)
    })
  }, [])

  // Load changes whenever repoPath changes
  const loadChanges = useCallback(async (path: string): Promise<Change[]> => {
    const list = await window.api.changes.readChangeList(path)
    setChanges(list)
    return list
  }, [])

  useEffect(() => {
    if (repoPath) loadChanges(repoPath)
  }, [repoPath, loadChanges])

  // 4.8 — Load all artifact texts when selected change changes or after a conversation session
  useEffect(() => {
    if (!selectedChange) {
      setProposalText(null)
      setDesignText(null)
      setTasksText(null)
      return
    }
    Promise.all([
      window.api.changes.readProposal(selectedChange.path),
      window.api.changes.readArtifact(selectedChange.path, 'design.md'),
      window.api.changes.readArtifact(selectedChange.path, 'tasks.md'),
    ]).then(([proposal, design, tasks]) => {
      setProposalText(proposal)
      setDesignText(design)
      setTasksText(tasks)
    })
  }, [selectedChange, proposalVersion])

  // Open repo: validate, persist, transition to shell
  async function handleOpenRepo(): Promise<string | null> {
    const result = await window.api.repo.openDirectory()
    if (!result) return null                              // user cancelled
    if ('error' in result) return 'Selected directory does not contain an openspec/ folder.'
    const newPath = (result as { path: string }).path
    setRepoPath(newPath)
    setSelectedChange(null)
    setChanges([])
    await window.api.prefs.set({ repoPath: newPath })
    return null
  }

  // 7.1 — Refresh: re-read change list
  async function handleRefresh() {
    if (repoPath) await loadChanges(repoPath)
  }

  // Called after a proposal is created successfully
  async function handleProposalSuccess() {
    setProposalOpen(false)
    if (repoPath) {
      const list = await loadChanges(repoPath)
      // Auto-select the first (newest) active change
      const newest = list.find(c => c.status === 'active') ?? null
      setSelectedChange(newest)
    }
  }

  // Re-read proposal after a successful follow-up conversation session
  function handleConversationSuccess() {
    setConversationOpen(false)
    setProposalVersion(v => v + 1)
  }

  function handleApplySuccess() {
    setApplyOpen(false)
    setProposalVersion(v => v + 1)
  }

  async function handleDelete(change: Change) {
    const result = await window.api.changes.delete(change.path)
    if ('error' in result) { alert(result.error); return }
    setSelectedChange(null)
    if (repoPath) loadChanges(repoPath)
  }

  async function handleArchive(change: Change) {
    const result = await window.api.changes.archive(change.path)
    if ('error' in result) { alert(result.error); return }
    setSelectedChange(null)
    if (repoPath) loadChanges(repoPath)
  }

  // 7.2 — Settings prefs change: persist and update local state
  function handlePrefsChange(updated: Prefs) {
    setPrefs(updated)
    window.api.prefs.set(updated)
  }

  // Blank while loading initial prefs
  if (loading) return null

  // 2.4 / 2.5 — Show repo selector when no repo is loaded
  if (!repoPath) {
    return <RepoSelectorScreen onOpenRepo={handleOpenRepo} />
  }

  return (
    <>
      {/* 3.1 — Three-panel shell: Header + (Sidebar | MainPane) */}
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        {/* 3.2 — Header */}
        <Header
          repoPath={repoPath}
          prefs={prefs}
          onNewProposal={() => setProposalOpen(true)}
          onRefresh={handleRefresh}
          onOpenRepo={handleOpenRepo}
          onSettings={() => setSettingsOpen(true)}
        />

        {/* Sidebar + main content */}
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
          {/* 4.1 — Change list sidebar */}
          <ChangeList
            changes={changes}
            filter={filter}
            onFilterChange={setFilter}
            selectedChange={selectedChange}
            onSelect={setSelectedChange}
          />

          {/* 4.4 — Change detail main pane */}
          <ChangeDetail
            change={selectedChange}
            proposalText={proposalText}
            designText={designText}
            tasksText={tasksText}
            onApply={() => setApplyOpen(true)}
            onContinue={() => setConversationOpen(true)}
            onDelete={selectedChange ? () => handleDelete(selectedChange) : undefined}
            onArchive={selectedChange ? () => handleArchive(selectedChange) : undefined}
          />
        </div>
      </div>

      {/* 5.1 — Settings sheet (modal) */}
      {settingsOpen && (
        <SettingsSheet
          prefs={prefs}
          onPrefsChange={handlePrefsChange}
          onClose={() => setSettingsOpen(false)}
        />
      )}

      {/* 6.1 — New proposal sheet (modal) */}
      {proposalOpen && (
        <NewProposalSheet
          repoPath={repoPath}
          prefs={prefs}
          onSuccess={handleProposalSuccess}
          onClose={() => setProposalOpen(false)}
        />
      )}

      {/* Apply proposal sheet (modal) */}
      {applyOpen && selectedChange && (
        <ApplyProposalSheet
          repoPath={repoPath}
          changeName={selectedChange.name}
          prefs={prefs}
          onPrefsChange={handlePrefsChange}
          onSuccess={handleApplySuccess}
          onClose={() => { setApplyOpen(false) }}
        />
      )}

      {/* 6.2 — Continue conversation sheet (modal) */}
      {conversationOpen && selectedChange && (
        <ConversationSheet
          repoPath={repoPath}
          changeName={selectedChange.name}
          proposalText={proposalText}
          prefs={prefs}
          onPrefsChange={handlePrefsChange}
          onSuccess={handleConversationSuccess}
          onClose={() => { setConversationOpen(false); setProposalVersion(v => v + 1) }}
        />
      )}
    </>
  )
}
