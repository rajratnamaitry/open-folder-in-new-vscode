# Open folder in new vscode

Easily open any folder from your current workspace in a new Visual Studio Code window. This extension is especially useful for monorepos or repositories containing multiple projects.

---

## Requirements

- **Visual Studio Code** version **1.80.0** or above

---

## Features

### 1.0.0

- Right-click any folder in your workspace and select **Open folder in new window** to launch it in a separate VS Code window.

### 1.1.0

- **NEW:** Multiple folders can be opened at the same time by selecting them and using the context menu.
- **NEW:** Improved information messages for better user feedback.
- **NEW:** Enhanced documentation and menu entry naming for clarity.
- **NEW:** Updated minimum VS Code engine requirement to `^1.80.0`.

---

## Usage

Suppose you are working in a repository like [vscode-extension-samples](https://github.com/Microsoft/vscode-extension-samples), which contains multiple extension sample folders.

1. **Open a Single Folder:**  
   Right-click on any folder and select **Open folder in new window**.

   ![rightClick](/rightClick.png)

Once the new VS Code window opens with your selected folder, you can immediately run:
- `npm install` in the terminal
- Press `F5` to launch and debug the sample

---

## Build from source

Requirements: Node.js 18+.

```bash
# 1. Install dev dependencies
npm install

# 2. Package into a .vsix (uses @vscode/vsce; --no-dependencies skips bundling node_modules)
npx @vscode/vsce package --no-dependencies
# → open-folder-in-new-vscode-<version>.vsix
```

Install the produced `.vsix` from the editor:

```bash
# VS Code
code --install-extension open-folder-in-new-vscode-1.1.0.vsix

# Cursor (or any VS Code-based editor)
cursor --install-extension open-folder-in-new-vscode-1.1.0.vsix
```

Or via the editor UI: **Extensions** panel → **⋯** menu → **Install from VSIX...**. Restart the editor so the new context-menu entry appears.

---

## Feedback & Contributions

- [Report issues](https://github.com/rajratnamaitry/open-folder-in-new-vscode/issues)
- [View source on GitHub](https://github.com/rajratnamaitry/open-folder-in-new-vscode)

---

**Enjoy using Open folder in new vscode!**