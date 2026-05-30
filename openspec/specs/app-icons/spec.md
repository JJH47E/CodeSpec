## Requirements

### Requirement: App icon files are present in resources directory
The system SHALL include icon files at `resources/icon.icns` (macOS), `resources/icon.ico` (Windows), and `resources/icon.png` (Linux/fallback, minimum 512×512px).

#### Scenario: Icon files exist at build time
- **WHEN** the project is checked out and dependencies installed
- **THEN** `resources/icon.icns`, `resources/icon.ico`, and `resources/icon.png` SHALL all exist

### Requirement: BrowserWindow displays the app icon
The main `BrowserWindow` SHALL be created with an `icon` property pointing to the platform-appropriate icon file so the window and taskbar entry display the CodeSpec icon.

#### Scenario: Window icon on Linux and Windows
- **WHEN** the app is launched on Linux or Windows
- **THEN** the window title bar and taskbar SHALL display the CodeSpec icon

#### Scenario: Window icon on macOS
- **WHEN** the app is launched on macOS
- **THEN** the window SHALL be created with the `.icns` icon (used by the OS as needed)

### Requirement: macOS dock shows the app icon at runtime
On macOS the app SHALL call `app.dock.setIcon()` during startup so the dock displays the CodeSpec icon in both development and production.

#### Scenario: Dock icon in development
- **WHEN** the app is run via `npm run dev` on macOS
- **THEN** the macOS dock SHALL display the CodeSpec icon instead of the default Electron icon

#### Scenario: Dock icon in production
- **WHEN** the packaged app is launched on macOS
- **THEN** the macOS dock SHALL display the CodeSpec icon
