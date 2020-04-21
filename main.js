const { app, BrowserWindow } = require('electron');
const path = require('path');

console.log('begin!');

app.on('ready', () => {
    console.log('app ready!');
    console.log('value from c++ module:', require('./build/Release/addon.node').hello());
    const win = new BrowserWindow();
    win.loadFile(path.join(__dirname, 'index.html'));
    win.once('close', (event) => {
        event.preventDefault();
        console.log('done!');
        win.close();
        app.quit();
    });
});