// electron/main.ts
import { app, BrowserWindow } from "electron";
import path from "path";

const createWindow = () => {
  const win = new BrowserWindow({
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

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
