const {app, BrowserWindow, clipboard,globalShortcut,ipcMain,Menu,Tray} = require('electron')
const dialog = require('electron')

app.on('ready', function(){
    let ventanaPrincipal = new BrowserWindow({
        width: 1040 ,
        height: 580,
        transparent:true,
        frame: false,
        resizable: false,
        center: true,
        maximizable: false,
        webPreferences: {
            nodeIntegration: true,
            preload: __dirname + 'preload.js'
        }
    })
    ventanaPrincipal.loadFile('index.html')
    ventanaPrincipal.setMenu(null)
})


app.on('window-all-closed', function(){
    if (process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', function() {
    if(BrowserWindow.getAllWindows().length === 0){
        crearVentanaPrincipal();
    }
});






