// Entry point of the application

//  const { BrowserWindow } = require('electron')

nw.Window.open('./src/views/compu2.html', {}, function(win) {
	// nw.Window.open('index.html', {}, function(win) {});

		//   win.webContents.openDevTools()
		 
		//  win.showDevtools()

		//  mainWindow = new BrowserWindow({
		// 	width: 800,
		// 	height: 600,
		// 	webPreferences: {
		// 	  devTools: false
		// 	}
		//   });
		win.maximize();
 		win.showDevTools();
		console.log('Started')

});	
