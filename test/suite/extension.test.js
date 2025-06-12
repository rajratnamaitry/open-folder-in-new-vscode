import * as assert from 'assert';
import * as sinon from 'sinon';
import * as vscode from 'vscode';

suite('Open Folder in New VS Code Extension Test Suite', () => {
    let terminalStub;
    let infoMessageStub;

    setup(() => {
        terminalStub = sinon.stub(vscode.window, 'createTerminal').returns({
            sendText: sinon.spy(),
            hide: sinon.spy(),
            dispose: sinon.spy()
        });
        infoMessageStub = sinon.stub(vscode.window, 'showInformationMessage');
    });

    teardown(() => {
        terminalStub.restore();
        infoMessageStub.restore();
    });

    test('openVscodeFn opens terminal and shows messages', async () => {
        const openVscodeFn = require('../../../extension').activate.toString().includes('openVscodeFn')
            ? require('../../../extension').openVscodeFn
            : require('../../../extension.js').openVscodeFn;

        const fakeUri = { fsPath: 'C:\\fake-folder' };
        await openVscodeFn(fakeUri);

        assert.ok(terminalStub.calledOnce, 'createTerminal should be called');
        assert.ok(infoMessageStub.calledWithMatch('Opening folder in new vscode'), 'Should show opening message');
    });
});