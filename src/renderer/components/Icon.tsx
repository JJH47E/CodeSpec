import type { CSSProperties } from 'react'
import {
  Archive,
  ArrowsClockwise,
  BookOpen,
  CaretDown,
  ChatsCircle,
  Check,
  CheckCircle,
  CircleHalf,
  Compass,
  Cpu,
  FileText,
  Folder,
  FolderOpen,
  GearSix,
  GitBranch,
  GitPullRequest,
  MagnifyingGlass,
  Package,
  Pencil,
  Play,
  Plus,
  RocketLaunch,
  Sliders,
  Sparkle,
  Terminal,
  Trash,
  Warning,
  XCircle,
} from '@phosphor-icons/react'

const ICON_MAP = {
  archive:           Archive,
  'arrows-clockwise': ArrowsClockwise,
  'book-open':       BookOpen,
  'caret-down':      CaretDown,
  chat:              ChatsCircle,
  check:             Check,
  'check-circle':    CheckCircle,
  compass:           Compass,
  cpu:               Cpu,
  'file-text':       FileText,
  folder:            Folder,
  'folder-open':     FolderOpen,
  'gear-six':        GearSix,
  'git-branch':      GitBranch,
  magnifier:         MagnifyingGlass,
  package:           Package,
  pencil:            Pencil,
  play:              Play,
  plus:              Plus,
  progress:          CircleHalf,
  'pull-request':    GitPullRequest,
  'rocket-launch':   RocketLaunch,
  sliders:           Sliders,
  sparkle:           Sparkle,
  terminal:          Terminal,
  trash:             Trash,
  warning:           Warning,
  'x-circle':        XCircle,
} as const

export type IconName = keyof typeof ICON_MAP

interface IconProps {
  name: IconName
  size?: number
  weight?: 'regular' | 'bold' | 'fill' | 'duotone' | 'light' | 'thin'
  className?: string
  style?: CSSProperties
}

export function Icon({ name, size = 16, weight = 'duotone', className, style }: IconProps) {
  const Component = ICON_MAP[name]
  if (!Component) return null
  return (
    <Component
      size={size}
      weight={weight}
      className={className}
      style={{ display: 'block', flex: 'none', ...style }}
    />
  )
}
