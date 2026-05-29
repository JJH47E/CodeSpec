import type { CSSProperties } from 'react'

interface SpinnerProps {
  size?: number
  tone?: 'accent' | 'current'
  className?: string
  style?: CSSProperties
}

export function Spinner({ size = 16, tone = 'accent', className, style }: SpinnerProps) {
  const color = tone === 'current' ? 'inherit' : 'var(--accent-fg)'
  return (
    <svg
      className={'spinner' + (className ? ' ' + className : '')}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ color, ...style }}
    >
      <circle className="sp-track" cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4" />
      <circle className="sp-arc"   cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4" strokeDasharray="15 60" />
    </svg>
  )
}
