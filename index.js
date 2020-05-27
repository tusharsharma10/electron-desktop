const electron = require('electron');
const mpeg = require('fluent-ffmpeg');
// electron will automatically create app object
const { app, BrowserWindow , ipcMain} = electron;

// event based programming
app.on('ready',()=>{

    const mainWindow = new BrowserWindow({webPreferences: {
        nodeIntegration: true
      }});
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    console.log('App is now ready');
});

ipcMain.on('video:submit',(event,path)=>{

    // ffprobe reads video file details
    mpeg.ffprobe(path, (err,metadata)=>{

        console.log(path);
        console.log('Video duration is ', metadata);
    });

});

/*

App object, starting electron application
Changes in package.json file

*/