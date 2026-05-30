# CodeSpec

A desktop GUI for browsing and managing [OpenSpec](https://openspec.dev) changes alongside local AI coding CLI tools (Claude Code, Copilot CLI, etc.).

CodeSpec does not call OpenSpec directly for mutations — it delegates all AI operations to whichever CLI tool you have configured. The app itself is a read/display layer and a launcher.

## Features

- **Change browser** — lists active and archived OpenSpec changes from the current repository, grouped by status (active / in-progress / done / archived)
- **Change detail** — view `proposal.md`, `design.md`, and `tasks.md` for any selected change via a tab bar
- **Live CLI output** — invoke a configured AI CLI tool and stream its output in real time
- **New proposal flow** — describe what you want in plain language; the CLI tool derives a name and creates the artifacts
- **Resizable sidebar** — drag the sidebar edge to your preferred width
- **Manual refresh** — reload changes after external modifications with the Refresh button
- **Status filters** — filter the change list to Active, Archived, or All

## Tech stack

- [Electron](https://www.electronjs.org/) 31
- [Vite](https://vitejs.dev/) + [electron-vite](https://electron-vite.org/)
- [React](https://react.dev/) 18 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- [xterm.js](https://xtermjs.org/) for terminal output
- [node-pty](https://github.com/microsoft/node-pty) for PTY support

## Prerequisites

- Node.js 18+
- npm
- An AI CLI tool installed and on your `$PATH` (e.g. `claude` for Claude Code)
- A repository with OpenSpec configured (`openspec/` directory present)

## Running locally

```bash
# Install dependencies (also rebuilds native modules via electron-rebuild)
npm install

# Start in development mode with hot reload
npm run dev
```

The app window will open automatically. On first launch, choose the repository you want to work with using the directory picker.

> **macOS note:** If the app can't find your CLI tool, launch it from a terminal rather than Finder. Electron `.app` bundles receive a reduced `$PATH`; launching from the terminal inherits your shell's full `$PATH`.

## Building

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## Type checking

```bash
npm run typecheck
```

## CLI tool configuration

CLI tools are stored in `~/Library/Application Support/codespec/prefs.json` (macOS) and are machine-scoped, not checked into the repo. The default entry for Claude Code looks like:

```json
{
  "cliTools": [
    {
      "id": "claude-code",
      "label": "Claude Code",
      "command": "claude",
      "args": ["-p", "{command}"]
    }
  ],
  "defaultTool": "claude-code"
}
```

`{command}` is substituted with the OpenSpec slash command at invocation time (e.g. `/opsx:propose "description"`). You can add additional tools or change the default from the settings icon in the app header.

## License

MIT
