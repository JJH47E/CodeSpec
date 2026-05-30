## Context

The Electron app (`electron-builder.yml` `productName: CodeSpec`, `package.json` `name: codespec`) has no icon assets. The `electron-builder` config already points `buildResources` to `resources/`, but that directory doesn't exist. The `BrowserWindow` constructor has no `icon` property, so the app shows the default Electron icon everywhere.

## Goals / Non-Goals

**Goals:**
- Add icon files for macOS (`.icns`), Windows (`.ico`), and Linux (`.png`)
- Show the icon in the dock/taskbar at runtime (not just in packaged builds)
- Wire the icon into `BrowserWindow` for window-level display
- Keep the approach simple: drop files into `resources/`, reference them in code

**Non-Goals:**
- Designing the icon artwork itself (a placeholder/generated icon is acceptable for now)
- Notarization or code signing
- Multiple icon resolutions beyond what each platform requires at minimum

## Decisions

### Icon file placement: `resources/` directory

`electron-builder` already reads from `resources/` for build-time assets (`buildResources: resources`). Placing icons there means the packager picks them up automatically — no config changes needed.

**Alternatives considered:** Placing icons in `src/renderer/assets/` would require configuring `extraResources` in `electron-builder.yml` and would mix runtime UI assets with system-level icons.

### Runtime icon loading: `path.join(app.getAppPath(), 'resources', 'icon.<ext>')`

In development the app runs from the repo root, so `app.getAppPath()` resolves to the project root where `resources/` lives. In production the packager copies `resources/` contents into the app bundle. Using `app.getAppPath()` works in both modes without conditional logic.

**Alternatives considered:** Using `__dirname`-relative paths from `src/main/index.ts` would break in packaged builds because `__dirname` points inside the asar archive.

### macOS dock icon: `app.dock.setIcon()`

On macOS the dock icon is separate from the `BrowserWindow` icon. Setting it explicitly via `app.dock.setIcon()` ensures the correct icon appears even in development (where Electron's default icon would otherwise show).

## Risks / Trade-offs

- **Icon artwork not provided** → The task plan calls for creating a placeholder PNG and converting to `.icns`/`.ico` using available tools (`iconutil`, `sips`, ImageMagick). If tooling is unavailable, a simple square PNG can be used for all platforms in development.
- **`app.getAppPath()` in asar builds** → In a fully-asared build the `resources/` folder sits *outside* the asar. This is the intended pattern and `electron-builder` handles it correctly because `buildResources` files are not asared. No mitigation needed.
