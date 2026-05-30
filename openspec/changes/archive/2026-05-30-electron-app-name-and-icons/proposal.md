## Why

The Electron app currently has no icon assets, so it displays a generic Electron icon in the dock, taskbar, and window chrome. Setting up proper icons and confirming the app name is "CodeSpec" throughout gives the app a polished, shippable identity.

## What Changes

- Create a `resources/` directory with app icons for macOS (`.icns`), Windows (`.ico`), and Linux (`.png`)
- Wire the icon into the `BrowserWindow` constructor so the window/taskbar shows it
- Set `app.dock.setIcon()` on macOS for the dock icon
- Confirm the app name is consistently "CodeSpec" across `package.json`, `electron-builder.yml`, and `src/renderer/index.html` (currently all correct — no changes needed)

## Capabilities

### New Capabilities

- `app-icons`: Icon assets and configuration so the app displays the CodeSpec icon in the dock, taskbar, window title bar, and packaged installer on macOS, Windows, and Linux.

### Modified Capabilities

<!-- No existing spec-level requirements are changing -->

## Impact

- New `resources/` directory with icon files (`icon.icns`, `icon.ico`, `icon.png`)
- `src/main/index.ts`: `BrowserWindow` gains an `icon` option; macOS dock icon set via `app.dock.setIcon()`
- `electron-builder.yml`: already has `buildResources: resources` — no change needed
- No renderer changes; no API changes; no breaking changes
