import type { ReactNode } from 'react'
import { Icon } from './Icon'
import type { IconName } from './Icon'

export type ChangeState = 'draft' | 'proposed' | 'partial' | 'applied' | 'archived'
export type BadgeTone   = 'success' | 'warning' | 'danger' | 'accent' | 'neutral'

const STATE_META: Record<ChangeState, { label: string; icon: IconName; fg: string; bg: string }> = {
  draft:    { label: 'Draft',    icon: 'pencil',       fg: 'var(--state-draft-fg)',    bg: 'var(--state-draft-bg)' },
  proposed: { label: 'Proposed', icon: 'pull-request', fg: 'var(--state-proposed-fg)', bg: 'var(--state-proposed-bg)' },
  partial:  { label: 'Partial',  icon: 'progress',     fg: 'var(--state-partial-fg)',  bg: 'var(--state-partial-bg)' },
  applied:  { label: 'Applied',  icon: 'check-circle', fg: 'var(--state-applied-fg)',  bg: 'var(--state-applied-bg)' },
  archived: { label: 'Archived', icon: 'archive',      fg: 'var(--state-archived-fg)', bg: 'var(--state-archived-bg)' },
}

const TONE_META: Record<BadgeTone, { fg: string; bg: string }> = {
  success: { fg: 'var(--success-fg)', bg: 'var(--success-muted)' },
  warning: { fg: 'var(--warning-fg)', bg: 'var(--warning-muted)' },
  danger:  { fg: 'var(--danger-fg)',  bg: 'var(--danger-muted)' },
  accent:  { fg: 'var(--accent-fg)',  bg: 'var(--accent-muted)' },
  neutral: { fg: 'var(--fg-muted)',   bg: 'var(--bg-subtle)' },
}

interface BadgeProps {
  state?: ChangeState
  tone?: BadgeTone
  icon?: IconName
  children?: ReactNode
}

export function Badge({ state, tone, icon, children }: BadgeProps) {
  if (state) {
    const m = STATE_META[state]
    return (
      <span className="badge" style={{ color: m.fg, background: m.bg }}>
        <Icon name={m.icon} size={13} />
        {m.label}
      </span>
    )
  }
  const m = TONE_META[tone ?? 'neutral']
  return (
    <span className="badge" style={{ color: m.fg, background: m.bg }}>
      {icon && <Icon name={icon} size={13} />}
      {children}
    </span>
  )
}

interface TagProps { icon?: IconName; children: ReactNode }
export function Tag({ icon, children }: TagProps) {
  return (
    <span className="tag">
      {icon && <Icon name={icon} size={12} />}
      {children}
    </span>
  )
}

interface CountProps { children: ReactNode }
export function Count({ children }: CountProps) {
  return <span className="count">{children}</span>
}

export { STATE_META }
