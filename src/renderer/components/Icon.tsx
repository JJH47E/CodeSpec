import type { CSSProperties } from 'react'
import {
  Archive,
  CaretDown,
  ChatsCircle,
  Check,
  CheckCircle,
  CircleHalf,
  Compass,
  Cpu,
  FileText,
  GearSix,
  GitBranch,
  GitPullRequest,
  MagnifyingGlass,
  Pencil,
  Play,
  Plus,
  Sliders,
  Sparkle,
  Terminal,
  Trash,
  Warning,
  XCircle,
} from '@phosphor-icons/react'

const ICON_MAP = {
  archive:      Archive,
  'caret-down': CaretDown,
  chat:         ChatsCircle,
  check:        Check,
  'check-circle': CheckCircle,
  compass:      Compass,
  cpu:          Cpu,
  'file-text':  FileText,
  'gear-six':   GearSix,
  'git-branch': GitBranch,
  magnifier:    MagnifyingGlass,
  pencil:       Pencil,
  play:         Play,
  plus:         Plus,
  progress:     CircleHalf,
  'pull-request': GitPullRequest,
  sliders:      Sliders,
  sparkle:      Sparkle,
  terminal:     Terminal,
  trash:        Trash,
  warning:      Warning,
  'x-circle':   XCircle,
} as const

export type IconName = keyof typeof ICON_MAP

interface IconProps {
  name: IconName
  size?: number
  className?: string
  style?: CSSProperties
}

export function Icon({ name, size = 16, className, style }: IconProps) {
  const Component = ICON_MAP[name]
  if (!Component) return null
  return (
    <Component
      size={size}
      weight="duotone"
      className={className}
      style={{ display: 'block', flex: 'none', ...style }}
    />
  )
}
