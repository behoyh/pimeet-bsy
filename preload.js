const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    startMeeting: () => ipcRenderer.send("start-meeting"),
    stopMeeting: (title) => ipcRenderer.send('stop-meeting', title)
})