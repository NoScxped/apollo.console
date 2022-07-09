const { app, BrowserWindow, ipcMain } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1000,
      height: 700,
      minWidth: 1000,
      minHeight: 700,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        devTools: true
        },
    autoHideMenuBar: true
    })
  
    win.loadFile('./src/index.html')
  }

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
  })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

