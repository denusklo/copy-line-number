# Copy Line Number

A simple VS Code extension that copies the current line number to the clipboard.

## Features

- Copy the current line number with a single keyboard shortcut
- **Multiple cursors support**: When multiple cursors are placed, all line numbers are copied
- Copies in format `line X` (e.g., `line 828`) for easy reference
- Works with any file type
- Shows a brief status bar message confirming the copy action

## Usage

### Keyboard Shortcut

| Platform | Shortcut |
|----------|----------|
| Windows/Linux | `Ctrl+Alt+L` |
| macOS | `Cmd+Alt+L` |

### Command Palette

You can also use the command palette:

1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS)
2. Type `Copy Current Line Number`
3. Press Enter

The line number (1-based, as displayed in the editor) will be copied to your clipboard, ready to paste anywhere.

### Examples

**Single cursor:**
```
line 828
```

**Multiple cursors** (2 cursors on lines 1 and 4):
```
line 1 and line 4
```

**Multiple cursors** (4 cursors on lines 1, 2, 4, 928):
```
line 1, line 2, line 4 and line 928
```

## Requirements

- VS Code 1.102.0 or higher

## Extension Settings

This extension does not currently contribute any settings.

## Known Issues

None currently. If you find any issues, please [report them here](https://github.com/denusklo/copy-line-number/issues).

## Release Notes

See [CHANGELOG.md](CHANGELOG.md) for release notes.

## License

MIT

## Support

If you find this extension helpful, please consider starring it on [GitHub](https://github.com/denusklo/copy-line-number)!
