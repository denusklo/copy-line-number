# Change Log

All notable changes to the "copy-line-number" extension will be documented in this file.

## [0.0.2] - 2025-12-26

### Added
- Multiple cursors support: Copy all line numbers where cursors are placed
- Smart formatting: "line X", "line X and line Y", or "line X, line Y, ... and line Z"
- Line numbers are automatically deduplicated and sorted

### Changed
- Output format now includes "line" prefix (e.g., `line 828` instead of just `828`)

## [0.0.1] - 2025-12-26

### Added
- Initial release
- Copy current line number to clipboard
- Keyboard shortcut: `Ctrl+Alt+L` (Windows/Linux) and `Cmd+Alt+L` (macOS)
- Command palette support: "Copy Current Line Number"
- Status bar message confirmation (auto-dismisses after 2 seconds)
