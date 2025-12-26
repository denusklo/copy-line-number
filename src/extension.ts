import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    console.log('Extension "copy-line-number" is now active!');

    // Register the command
    let disposable = vscode.commands.registerCommand('copy-line-number.copyLineNumber', () => {

        // 1. Get the active text editor
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            // 2. Get the cursor position (selection.active)
            const lineNumber = editor.selection.active.line;

            // 3. Convert to 1-based index (what you see in the gutter)
            const displayLineNumber = lineNumber + 1;

            // 4. Write to clipboard
            vscode.env.clipboard.writeText(String(displayLineNumber))
                .then(() => {
                    // Show a success message in status bar (auto-dismisses after 2 seconds)
                    vscode.window.setStatusBarMessage(`Line ${displayLineNumber} copied`, 2000);
                });
        } else {
            vscode.window.showWarningMessage("No active editor to copy line number from.");
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
