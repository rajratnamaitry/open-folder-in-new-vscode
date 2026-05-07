// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
const openVscodeFn = (uri, uris) => {
	const folders = (uris && uris.length > 0) ? uris : (uri ? [uri] : []);
	if (folders.length === 0) {
		vscode.window.showErrorMessage('No folder selected to open in a new window.');
		return;
	}
	folders.forEach(folderUri => {
		vscode.commands.executeCommand('vscode.openFolder', folderUri, {
			forceNewWindow: true
		});
	});
}
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode
		.commands
		.registerCommand('open-folder-in-new-vscode.openFolder', openVscodeFn);
	context
	.subscriptions
	.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
