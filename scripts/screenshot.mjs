// Screenshot script for README assets — uses a self-contained demo repo, no real project data.
// Usage: node scripts/screenshot.mjs
import { _electron as electron } from 'playwright-core'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'

const APP_DIR  = path.resolve(fileURLToPath(import.meta.url), '../..')
const OUT_DIR  = path.join(APP_DIR, 'docs/screenshots')
const DEMO_DIR = '/tmp/codespec-demo-repo'
const DATA_DIR = '/tmp/codespec-demo-userdata'

const electronBin = path.join(
  APP_DIR,
  'node_modules/electron/dist/Electron.app/Contents/MacOS/Electron'
)

fs.mkdirSync(OUT_DIR, { recursive: true })

// ── Build demo repo ────────────────────────────────────────────────────────────

function writeFile(p, content) {
  fs.mkdirSync(path.dirname(p), { recursive: true })
  fs.writeFileSync(p, content, 'utf-8')
}

function makeChange(base, name, tasks) {
  const dir = path.join(base, name)
  writeFile(path.join(dir, '.openspec.yaml'), `schema: opsx/v1\ncreated: 2026-05-${15 + Math.floor(Math.random() * 14)}\n`)
  writeFile(path.join(dir, 'proposal.md'), `# ${name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}

## Why

${proposals[name]?.why ?? 'This change improves the overall user experience and code quality.'}

## What Changes

${proposals[name]?.what ?? '- Refactor the relevant module\n- Add tests\n- Update documentation'}
`)
  if (tasks) {
    writeFile(path.join(dir, 'tasks.md'), tasks)
  }
}

const proposals = {
  'add-dark-mode': {
    why: 'Users frequently request dark mode for comfortable use in low-light environments. System-level dark mode preference is already available via the OS media query API.',
    what: `- Add a \`ThemeProvider\` that reads \`prefers-color-scheme\` and persists a manual override in \`localStorage\`
- Replace all hardcoded colour values with CSS custom properties (\`--color-bg\`, \`--color-text\`, etc.)
- Add a toggle button in the top navigation bar
- Update the icon set to use inverted assets on dark backgrounds`,
  },
  'implement-search': {
    why: 'As the task list grows beyond 20 items, finding specific tasks becomes slow. A keyword search with instant filtering reduces friction significantly.',
    what: `- Add a search input to the task list header
- Implement client-side fuzzy filtering across title and description fields
- Highlight matched substrings in results
- Persist last search term across sessions via \`sessionStorage\``,
  },
  'fix-login-redirect': {
    why: 'After a successful login, users are always redirected to the homepage rather than the page they were originally trying to visit. This is a regression introduced in v0.4.',
    what: `- Capture the pre-login route in a \`redirect\` query param before navigating to \`/login\`
- Read the param after auth completes and \`router.replace()\` to the target route
- Add a guard to reject redirects to external origins`,
  },
  'setup-ci-pipeline': {
    why: 'There was no automated CI in place; PRs were merged without any test gate.',
    what: `- Add a GitHub Actions workflow running the unit test suite on every PR
- Add lint and type-check steps
- Cache \`node_modules\` between runs`,
  },
  'add-keyboard-shortcuts': {
    why: 'Power users have requested keyboard shortcuts for common actions to speed up their workflow.',
    what: `- Add a global key-binding registry using \`useEffect\` + \`keydown\` listener
- Implement shortcuts: \`N\` (new task), \`/\` (search), \`Escape\` (close modal), \`Enter\` (confirm)
- Show a shortcut cheatsheet on \`?\``,
  },
}

// Clean and recreate demo repo
fs.rmSync(DEMO_DIR, { recursive: true, force: true })

// Active changes
makeChange(`${DEMO_DIR}/openspec/changes`, 'add-dark-mode', null)
makeChange(`${DEMO_DIR}/openspec/changes`, 'add-keyboard-shortcuts', null)
makeChange(`${DEMO_DIR}/openspec/changes`, 'implement-search',
  `# Implement Search\n\n## 1. Search Input\n\n- [x] 1.1 Add search \`<input>\` element to \`TaskList\` header\n- [x] 1.2 Wire \`onChange\` → local filter state\n\n## 2. Filtering\n\n- [ ] 2.1 Implement fuzzy match against task \`title\` and \`description\`\n- [ ] 2.2 Highlight matched substrings with \`<mark>\`\n\n## 3. Persistence\n\n- [ ] 3.1 Save search term to \`sessionStorage\` on change\n- [ ] 3.2 Restore on mount\n`)
makeChange(`${DEMO_DIR}/openspec/changes`, 'fix-login-redirect',
  `# Fix Login Redirect\n\n## 1. Capture Pre-Login Route\n\n- [x] 1.1 Read current route before navigating to \`/login\`\n- [x] 1.2 Append as \`?redirect=\` query param\n\n## 2. Restore After Auth\n\n- [x] 2.1 Read \`redirect\` param after successful login\n- [x] 2.2 Call \`router.replace(redirect)\` guarding against external URLs\n\n## 3. Tests\n\n- [x] 3.1 Add integration test for redirect round-trip\n`)

// Archived changes
makeChange(`${DEMO_DIR}/openspec/archive`, 'setup-ci-pipeline', null)

// ── Write demo prefs ───────────────────────────────────────────────────────────

const prefsWithRepo = {
  repoPath: DEMO_DIR,
  cliTools: [{ id: 'claude-code', label: 'Claude Code', command: 'claude', args: ['-p', '{command}'] }],
  defaultTool: 'claude-code',
  perChangeTool: {},
  sidebarWidth: 300,
}

const prefsEmpty = {
  repoPath: null,
  cliTools: [],
  defaultTool: null,
  perChangeTool: {},
}

// ── Helpers ────────────────────────────────────────────────────────────────────

async function launch(prefs) {
  fs.rmSync(DATA_DIR, { recursive: true, force: true })
  fs.mkdirSync(DATA_DIR, { recursive: true })
  writeFile(path.join(DATA_DIR, 'prefs.json'), JSON.stringify(prefs, null, 2))

  const app = await electron.launch({
    executablePath: electronBin,
    args: [`--user-data-dir=${DATA_DIR}`, APP_DIR],
    timeout: 30_000,
  })
  await new Promise(r => setTimeout(r, 4_000))
  const page = app.windows().find(w => !w.url().startsWith('devtools://')) ?? await app.firstWindow()
  return { app, page }
}

async function shot(page, name) {
  const f = path.join(OUT_DIR, `${name}.png`)
  await page.screenshot({ path: f })
  console.log('screenshot:', f)
}

async function domClick(page, selector) {
  await page.evaluate(s => {
    const el = document.querySelector(s)
    if (el) el.click()
  }, selector)
}

async function clickText(page, text) {
  await page.evaluate(t => {
    const all = [...document.querySelectorAll('button, [role="button"], a')]
    const el = all.find(e => e.textContent?.trim() === t) ?? all.find(e => e.textContent?.includes(t))
    if (el) el.click()
  }, text)
}

// ── Session 1: Launch screen + Onboarding ─────────────────────────────────────

console.log('\n── Session 1: launch screen + onboarding ──')
{
  const { app, page } = await launch(prefsEmpty)

  await shot(page, '01-launch')
  console.log('captured: launch screen')

  // Override IPC so "Open Repository" triggers onboarding without a native dialog
  await app.evaluate(({ ipcMain }) => {
    ipcMain.removeHandler('repo:openDirectory')
    ipcMain.handle('repo:openDirectory', async () => ({
      error: 'not-openspec-repo',
      path: '/tmp/codespec-demo-repo',
    }))
  })

  await clickText(page, 'Open Repository')
  await new Promise(r => setTimeout(r, 1_200))
  await shot(page, '02-onboarding')
  console.log('captured: onboarding wizard')

  await app.close()
}

// ── Session 2: Main app with demo changes ─────────────────────────────────────

console.log('\n── Session 2: main app ──')
{
  const { app, page } = await launch(prefsWithRepo)

  await shot(page, '03-main')
  console.log('captured: main view')

  // Click a change with a proposal
  await page.evaluate(() => {
    const row = [...document.querySelectorAll('.row-item')].find(el => el.textContent?.includes('add-dark-mode'))
    if (row) row.click()
  })
  await new Promise(r => setTimeout(r, 700))
  await shot(page, '04-proposal')
  console.log('captured: proposal tab')

  // Select implement-search (has actual tasks) and show Tasks tab
  await page.evaluate(() => {
    const row = [...document.querySelectorAll('.row-item')].find(el => el.textContent?.includes('implement-search'))
    if (row) row.click()
  })
  await new Promise(r => setTimeout(r, 700))
  await clickText(page, 'Tasks')
  await new Promise(r => setTimeout(r, 400))
  await shot(page, '05-tasks')
  console.log('captured: tasks tab')

  // Open New Proposal sheet
  await clickText(page, 'New Proposal')
  await new Promise(r => setTimeout(r, 500))
  await shot(page, '06-new-proposal')
  console.log('captured: new proposal sheet')

  await app.close()
}

console.log('\nAll screenshots saved to', OUT_DIR)
