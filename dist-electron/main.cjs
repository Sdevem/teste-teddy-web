"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// electron/main.ts
const electron_1 = require("electron");
const createWindow = () => {
    const win = new electron_1.BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            contextIsolation: true,
        },
    });
    // 🧪 para modo desenvolvimento:
    win.loadURL("http://localhost:5173");
    // ✅ para modo produção (usando build do Vite):
    // win.loadFile(path.join(__dirname, "../dist/index.html"));
    // win.webContents.openDevTools();
};
electron_1.app.whenReady().then(() => {
    createWindow();
    electron_1.app.on("activate", () => {
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
        electron_1.app.quit();
});
