const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    setMeeting: (title) => ipcRenderer.send('set-meeting', title)
})