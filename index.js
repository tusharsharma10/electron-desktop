const electron = require('electron');
const mpeg = require('fluent-ffmpeg');
// electron will automatically create app object
const { app, BrowserWindow , ipcMain, Menu} = electron;

// event based programming
let mainWindow;
app.on('ready',()=>{

     mainWindow = new BrowserWindow({webPreferences: {
        nodeIntegration: true
      }});
    mainWindow.loadURL(`file://${__dirname}/main.html`);
    console.log('App is now ready');

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
      Menu.setApplicationMenu(mainMenu);
});

const menuTemplate = [
    
    {
        label:'File',


    }

]

/*

App object, starting electron application
Changes in package.json file

*/