import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'
import { Icon } from './Icon'
import type { IconName } from './Icon'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export function Card({ children, className = '', ...rest }: CardProps) {
  return (
    <div className={'card ' + className} {...rest}>
      {children}
    </div>
  )
}

interface CardHeadProps { title: string; children?: ReactNode }
export function CardHead({ title, children }: CardHeadProps) {
  return (
    <div className="card-head">
      <span className="card-title">{title}</span>
      {children}
    </div>
  )
}

type IconTone = 'default' | 'success' | 'warning' | 'muted' | 'archived'

const ICON_TONE_STYLE: Record<IconTone, CSSProperties> = {
  default:  { background: 'var(--accent-subtle)',      color: 'var(--accent-fg)' },
  success:  { background: 'var(--success-subtle)',     color: 'var(--success-fg)' },
  warning:  { background: 'var(--warning-subtle)',     color: 'var(--warning-fg)' },
  muted:    { background: 'var(--bg-subtle)',          color: 'var(--fg-muted)' },
  archived: { background: 'var(--state-archived-bg)',  color: 'var(--state-archived-fg)' },
}

interface RowItemProps {
  icon?: IconName
  iconTone?: IconTone
  title: string
  sub?: string
  selected?: boolean
  right?: ReactNode
  onClick?: () => void
}

export function RowItem({ icon, iconTone = 'default', title, sub, selected, right, onClick }: RowItemProps) {
  return (
    <div className={'row-item' + (selected ? ' selected' : '')} onClick={onClick}>
      {icon && (
        <div className="row-ic" style={ICON_TONE_STYLE[iconTone]}>
          <Icon name={icon} size={17} />
        </div>
      )}
      <div style={{ minWidth: 0, flex: 1 }}>
        <div className="row-title">{title}</div>
        {sub && <div className="row-sub">{sub}</div>}
      </div>
      {right}
    </div>
  )
}
