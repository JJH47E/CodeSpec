import type { IconName } from './Icon'
import { Icon } from './Icon'

export interface MenuItem {
  label?: string
  icon?: IconName
  kbd?: string
  danger?: boolean
  sep?: true
  onClick?: () => void
}

interface MenuProps {
  items: MenuItem[]
}

export function Menu({ items }: MenuProps) {
  return (
    <div className="menu" role="menu">
      {items.map((item, i) =>
        item.sep ? (
          <div key={i} className="menu-sep" />
        ) : (
          <div
            key={i}
            className={'menu-item' + (item.danger ? ' danger' : '')}
            role="menuitem"
            onClick={item.onClick}
          >
            {item.icon && <Icon name={item.icon} size={16} className="ic" />}
            {item.label}
            {item.kbd && <span className="kbd">{item.kbd}</span>}
          </div>
        ),
      )}
    </div>
  )
}
