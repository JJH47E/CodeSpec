import { useState, useRef, useEffect } from 'react'
import { Icon } from './Icon'
import type { IconName } from './Icon'

export interface SelectOption {
  value: string
  label: string
  icon?: IconName
}

export interface SelectGroup {
  label?: string
  options: SelectOption[]
}

interface SelectProps {
  groups: SelectGroup[]
  value: string
  onChange?: (value: string) => void
  icon?: IconName
}

export function Select({ groups, value, onChange, icon }: SelectProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const all = groups.flatMap(g => g.options)
  const current = all.find(o => o.value === value) ?? all[0]

  return (
    <div className="select-wrap" ref={ref}>
      <button
        className={'select' + (open ? ' open' : '')}
        onClick={() => setOpen(o => !o)}
        type="button"
      >
        <span className="lead">
          <Icon name={current?.icon ?? icon ?? 'cpu'} size={16} className="ic" />
          {current?.label}
        </span>
        <Icon name="caret-down" size={14} className="caret" />
      </button>
      {open && (
        <div className="popover" role="listbox">
          {groups.map((g, gi) => (
            <div key={gi}>
              {g.label && <div className="pop-group">{g.label}</div>}
              {g.options.map(o => (
                <div
                  key={o.value}
                  className={'opt' + (o.value === value ? ' selected' : '')}
                  role="option"
                  aria-selected={o.value === value}
                  onClick={() => { onChange?.(o.value); setOpen(false) }}
                >
                  <Icon name={o.icon ?? 'cpu'} size={16} className="ic" />
                  {o.label}
                  {o.value === value && <Icon name="check" size={13} className="tick" />}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
