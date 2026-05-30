## ADDED Requirements

### Requirement: Drag to resize sidebar
The system SHALL render a drag handle on the right edge of the sidebar that the user can drag horizontally to change the sidebar width. The width SHALL be clamped between 180 px (minimum) and 480 px (maximum).

#### Scenario: User drags handle to widen sidebar
- **WHEN** the user presses and drags the handle to the right
- **THEN** the sidebar width increases in real time up to the maximum of 480 px

#### Scenario: User drags handle to narrow sidebar
- **WHEN** the user presses and drags the handle to the left
- **THEN** the sidebar width decreases in real time down to the minimum of 180 px

#### Scenario: Width is clamped at minimum
- **WHEN** the user drags the handle past the minimum threshold
- **THEN** the sidebar width stops at 180 px and does not shrink further

#### Scenario: Width is clamped at maximum
- **WHEN** the user drags the handle past the maximum threshold
- **THEN** the sidebar width stops at 480 px and does not grow further

### Requirement: Persist sidebar width across sessions
The system SHALL save the sidebar width to user preferences when the user finishes dragging, and restore it on next load. If no saved width exists the sidebar defaults to 280 px.

#### Scenario: Width is saved on drag end
- **WHEN** the user releases the drag handle
- **THEN** the chosen sidebar width is persisted to preferences

#### Scenario: Width is restored on load
- **WHEN** the application loads and a saved sidebar width exists in preferences
- **THEN** the sidebar renders at the saved width instead of the default

#### Scenario: Default width used when no preference saved
- **WHEN** the application loads and no sidebar width has been saved
- **THEN** the sidebar renders at the default width of 280 px
