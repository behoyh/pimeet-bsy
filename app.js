const { app, BrowserWindow, screen, ipcMain } = require('electron')
const url = require("url");
const path = require("path");

require('electron-reload')(__dirname);

let mainWindow

function createWindow() {
    app.commandLine.appendSwitch('enable-features', 'SharedArrayBuffer')

    var mainScreen = screen.getPrimaryDisplay();
    var dimensions = mainScreen.size;
    mainWindow = new BrowserWindow({
        width: dimensions.width,
        height: dimensions.height,
        webPreferences: {
            nodeIntegration: true,
            devTools: true,
            preload: path.join(__dirname, 'preload.js')
        },
        frame: false,
        titleBarStyle: 'hidden',
        transparent: true
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

    ipcMain.on('start-meeting', (event, meeting) => {
        fetch('http://localhost:4002/start', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            const data = response.json();
            console.log(data);
        });
    })

    ipcMain.on('stop-meeting', (event, meeting) => {
        fetch('http://localhost:4002/stop', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            const data = response.json();
            console.log(data);
        });
    })

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
