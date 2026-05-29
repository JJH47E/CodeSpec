import type { ReactNode } from 'react'
import { Icon } from './Icon'
import type { IconName } from './Icon'

/* ---------- Toggle ---------- */
interface ToggleProps {
  checked: boolean
  onChange?: (checked: boolean) => void
  label?: string
}

export function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <span className="toggle" onClick={() => onChange?.(!checked)} role="switch" aria-checked={checked}>
      <span className={'toggle-track' + (checked ? ' on' : '')}>
        <span className="toggle-knob" />
      </span>
      {label && <span style={{ fontSize: 'var(--text-sm)' }}>{label}</span>}
    </span>
  )
}

/* ---------- Segmented ---------- */
export interface SegmentOption {
  value: string
  label: string
  icon?: IconName
}

interface SegmentedProps {
  options: SegmentOption[]
  value: string
  onChange?: (value: string) => void
}

export function Segmented({ options, value, onChange }: SegmentedProps) {
  return (
    <div className="segmented">
      {options.map(o => (
        <button
          key={o.value}
          type="button"
          className={'segment' + (o.value === value ? ' active' : '')}
          onClick={() => onChange?.(o.value)}
        >
          {o.icon && <Icon name={o.icon} size={14} />}
          {o.label}
        </button>
      ))}
    </div>
  )
}

/* ---------- Checkbox ---------- */
interface CheckboxProps {
  checked: boolean
  onChange?: (checked: boolean) => void
  label?: ReactNode
}

export function Checkbox({ checked, onChange, label }: CheckboxProps) {
  return (
    <span className="checkbox" onClick={() => onChange?.(!checked)} role="checkbox" aria-checked={checked}>
      <span className={'checkbox-box' + (checked ? ' on' : '')}>
        {checked && <Icon name="check" size={12} />}
      </span>
      {label}
    </span>
  )
}
