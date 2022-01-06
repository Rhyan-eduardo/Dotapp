const { app, BrowserWindow } = require('electron');

//require('electron-reload')(__dirname);

function createWindow () {
    let win = new BrowserWindow({
    width: 973,
    height: 590,
    resizable: false,
    frame: true,
    icon: __dirname + "./icon-app.png",
    show: false
    //minWidth: 1366,
    //minHeight: 700,
  });

  //win.maximize();
  win.removeMenu();
  win.loadFile('./screens.app/Main.screen/main.screen.html')

  let launch = new BrowserWindow ({ 
    width: 700, 
    height: 400, 
    transparent: false,
    frame: false, 
    alwaysOnTop: false,
    resizable: false,
    icon: __dirname + "./icon-app.png"
  });

  launch.loadFile ('./screens.app/launch.screen/launch.screen.html');
  launch.center ();

  setTimeout (function () { 
    launch.close (); 
    win.show ();
  }, 50000 );

}

app.whenReady().then(createWindow);

