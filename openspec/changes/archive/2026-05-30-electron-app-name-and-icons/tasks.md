## 1. Create icon assets

- [x] 1.1 Create the `resources/` directory at the project root
- [x] 1.2 Create or source a 1024×1024px `icon.png` for the CodeSpec app icon
- [x] 1.3 Generate `resources/icon.icns` from `icon.png` for macOS (using `iconutil` or `sips`)
- [x] 1.4 Generate `resources/icon.ico` from `icon.png` for Windows (using ImageMagick `convert` or equivalent)
- [x] 1.5 Copy the PNG as `resources/icon.png` (Linux/fallback, 512×512 minimum)

## 2. Wire icon into Electron main process

- [x] 2.1 Import `nativeImage` from electron and load the icon via `app.getAppPath()` in `src/main/index.ts`
- [x] 2.2 Pass the icon to the `BrowserWindow` constructor as `icon: iconPath` (use `.icns` on macOS, `.ico` on Windows, `.png` on Linux)
- [x] 2.3 Call `app.dock.setIcon(icon)` on macOS after the app `ready` event

## 3. Verify

- [x] 3.1 Run `npm run dev` and confirm the dock (macOS) shows the CodeSpec icon
- [x] 3.2 Confirm the window title bar / taskbar entry shows the correct icon
