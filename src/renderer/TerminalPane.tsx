import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import { Terminal } from '@xterm/xterm'
import { FitAddon } from '@xterm/addon-fit'
import '@xterm/xterm/css/xterm.css'

export interface TerminalPaneHandle {
  write: (data: string) => void
  getDimensions: () => { cols: number; rows: number }
}

interface Props {
  style?: React.CSSProperties
  active: boolean
  visible: boolean
}

export const TerminalPane = forwardRef<TerminalPaneHandle, Props>(
  function TerminalPane({ style, active, visible }, ref) {
    const containerRef = useRef<HTMLDivElement>(null)
    const termRef      = useRef<Terminal | null>(null)
    const fitRef       = useRef<FitAddon | null>(null)
    // Ref so the onData closure always sees the current `active` value
    const activeRef    = useRef(active)
    useEffect(() => { activeRef.current = active }, [active])

    useImperativeHandle(ref, () => ({
      write(data: string) {
        termRef.current?.write(data)
      },
      getDimensions() {
        const t = termRef.current
        // Use || not ?? so that 0 (hidden init) also falls back to safe defaults
        return { cols: t?.cols || 80, rows: t?.rows || 24 }
      },
    }))

    // Mount terminal once
    useEffect(() => {
      if (!containerRef.current) return

      const term = new Terminal({
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        fontSize: 12,
        lineHeight: 1.5,
        cursorBlink: true,
        theme: {
          background:   '#0d1117',
          foreground:   '#c9d1d9',
          cursor:       '#c9d1d9',
          black:        '#0d1117',
          red:          '#ff7b72',
          green:        '#3fb950',
          yellow:       '#d29922',
          blue:         '#58a6ff',
          magenta:      '#bc8cff',
          cyan:         '#39c5cf',
          white:        '#b1bac4',
          brightBlack:  '#6e7681',
          brightRed:    '#ffa198',
          brightGreen:  '#56d364',
          brightYellow: '#e3b341',
          brightBlue:   '#79c0ff',
          brightMagenta:'#d2a8ff',
          brightCyan:   '#56d4dd',
          brightWhite:  '#f0f6fc',
        },
      })

      const fit = new FitAddon()
      term.loadAddon(fit)
      term.open(containerRef.current)
      // Don't fit yet — container may be hidden; fit happens when visible

      termRef.current = term
      fitRef.current  = fit

      const dataDispose = term.onData(data => {
        if (activeRef.current) window.api.cli.write(data)
      })

      // ResizeObserver keeps PTY in sync after the container is visible
      const ro = new ResizeObserver(() => {
        if (!containerRef.current) return
        const { offsetWidth, offsetHeight } = containerRef.current
        if (offsetWidth === 0 || offsetHeight === 0) return
        fit.fit()
        window.api.cli.resize({ cols: term.cols, rows: term.rows })
      })
      ro.observe(containerRef.current)

      return () => {
        dataDispose.dispose()
        ro.disconnect()
        term.dispose()
        termRef.current = null
        fitRef.current  = null
      }
    }, [])

    // Refit whenever the terminal becomes visible
    useEffect(() => {
      if (!visible || !fitRef.current || !termRef.current) return
      // rAF ensures the browser has finished layout before we measure
      const id = requestAnimationFrame(() => {
        fitRef.current?.fit()
        if (termRef.current) {
          window.api.cli.resize({ cols: termRef.current.cols, rows: termRef.current.rows })
        }
      })
      return () => cancelAnimationFrame(id)
    }, [visible])

    return (
      <div
        ref={containerRef}
        style={{
          background: '#0d1117',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          ...style,
        }}
      />
    )
  }
)
