import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    console.log('Extension "copy-line-number" is now active!');

    // Register the command
    let disposable = vscode.commands.registerCommand('copy-line-number.copyLineNumber', () => {

        // 1. Get the active text editor
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            // 2. Get all cursor positions (handles multiple cursors)
            const lineNumbers = editor.selections.map(s => s.active.line + 1); // Convert to 1-based

            // 3. Get unique sorted line numbers
            const uniqueLines = [...new Set(lineNumbers)].sort((a, b) => a - b);

            // 4. Format the output
            let textToCopy: string;
            if (uniqueLines.length === 1) {
                textToCopy = `line ${uniqueLines[0]}`;
            } else if (uniqueLines.length === 2) {
                textToCopy = `line ${uniqueLines[0]} and line ${uniqueLines[1]}`;
            } else {
                // Join all but last with commas, then add "and" before last
                const allButLast = uniqueLines.slice(0, -1).map(n => `line ${n}`).join(', ');
                const last = `line ${uniqueLines[uniqueLines.length - 1]}`;
                textToCopy = `${allButLast} and ${last}`;
            }

            // 5. Write to clipboard
            vscode.env.clipboard.writeText(textToCopy)
                .then(() => {
                    // Show a success message in status bar (auto-dismisses after 2 seconds)
                    vscode.window.setStatusBarMessage(`${uniqueLines.length} line(s) copied`, 2000);
                });
        } else {
            vscode.window.showWarningMessage("No active editor to copy line number from.");
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
