## Requirements

### Requirement: Drag to resize sidebar
The system SHALL allow the user to resize the sidebar by dragging a handle on its right edge, updating the sidebar width in real time.

#### Scenario: User drags handle to widen sidebar
- **WHEN** the user clicks and drags the resize handle to the right
- **THEN** the sidebar width increases in real time as the pointer moves

#### Scenario: User drags handle to narrow sidebar
- **WHEN** the user clicks and drags the resize handle to the left
- **THEN** the sidebar width decreases in real time as the pointer moves

#### Scenario: Sidebar width is constrained to minimum
- **WHEN** the user drags the handle past the minimum allowed width
- **THEN** the sidebar width stops decreasing and holds at the minimum value

#### Scenario: Sidebar width is constrained to maximum
- **WHEN** the user drags the handle past the maximum allowed width
- **THEN** the sidebar width stops increasing and holds at the maximum value

### Requirement: Persist sidebar width across sessions
The system SHALL save the sidebar width whenever it changes and restore it on next launch, so the user's preferred layout is preserved.

#### Scenario: Width is saved after resize
- **WHEN** the user finishes dragging the resize handle
- **THEN** the new sidebar width is persisted to local storage

#### Scenario: Width is restored on launch
- **WHEN** the application starts and a previously saved sidebar width exists
- **THEN** the sidebar is rendered at the saved width rather than the default width

#### Scenario: No saved width falls back to default
- **WHEN** the application starts and no sidebar width has been saved
- **THEN** the sidebar is rendered at the default width
