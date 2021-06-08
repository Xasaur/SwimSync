const { app, BrowserWindow } = require('electron');
require('electron-reload')(__dirname);  // This means the app instantly updates whenever the code changes witout having to create a new window

function createWindow() {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    window.loadFile("index.html");
}

app.whenReady().then(() => createWindow());