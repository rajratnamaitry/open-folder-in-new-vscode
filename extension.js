// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
const openVscodeFn = (uri, uris) => {
	const folders = uris || [uri];
	console.log('openVscodeFn called with folders:', folders);
	if (!vscode.workspace.workspaceFolders || vscode.workspace.workspaceFolders.length === 0) {
		vscode.window.showErrorMessage('No workspace folders are open.');
		return;
	}
	if (!folders || folders[0] === undefined) {
		vscode.window.showErrorMessage('No folder selected to open in new VS Code instance.');
		return;
	}
	folders.forEach(folderUri => {
		const folderPath = folderUri.fsPath;
		const terminal = vscode.window.createTerminal({
			name: 'New vscode',
			cwd: folderPath,
			shellPath: 'code',
			shellArgs: ['-n', folderPath]
		});
		vscode.window.showInformationMessage(`Opening folder in new vscode !...`);// Display a message in the terminal
		terminal.hide();
		terminal.sendText(`code .`);
		setTimeout(function () {
			terminal.dispose(); // Display a message box to the user
			vscode.window.showInformationMessage(`Folder opened in a new vscode!`);
		}, 7000);
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
