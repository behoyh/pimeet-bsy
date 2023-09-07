const { app, BrowserWindow } = require('electron')
const url = require("url");
const path = require("path");

require('electron-reload')(__dirname);

let mainWindow

function createWindow() {
    app.commandLine.appendSwitch('enable-features', 'SharedArrayBuffer')
    
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            devTools: true
        }
    })

    // Enable SharedArrayBuffer
    mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
        details.responseHeaders['Cross-Origin-Opener-Policy'] = ['same-origin'];
        details.responseHeaders['Cross-Origin-Embedder-Policy'] = ['require-corp'];
        callback({ responseHeaders: details.responseHeaders });
    });

    mainWindow.maximize();

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `/docs/index.html`),
            protocol: "file:",
            slashes: true
        })
    );

    mainWindow.on('closed', function () {
        mainWindow = null
    });

    mainWindow.webContents.on("did-fail-load", function () {
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, `/docs/index.html`),
                protocol: "file:",
                slashes: true
            })
        );
    });
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (mainWindow === null) createWindow()
})
