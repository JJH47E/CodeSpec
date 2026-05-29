import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Spinner } from './Spinner'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  loading?: boolean
  children?: ReactNode
}

export function Button({
  variant = 'secondary',
  size,
  icon,
  loading,
  children,
  disabled,
  className = '',
  ...rest
}: ButtonProps) {
  const cls = [
    'btn',
    `btn-${variant}`,
    size && size !== 'md' ? `btn-${size}` : null,
    !children ? 'btn-icon' : null,
    className || null,
  ].filter(Boolean).join(' ')

  return (
    <button className={cls} disabled={disabled || loading} {...rest}>
      {loading
        ? <Spinner size={size === 'sm' ? 14 : 15} tone="current" className="ic" />
        : icon && <span className="ic" style={{ display: 'flex' }}>{icon}</span>}
      {children}
    </button>
  )
}
