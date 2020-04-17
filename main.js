const { app } = require('electron');
console.log('begin!');
app.on('ready', () => {
    console.log('app ready!');
    console.log('value from c++ module:', require('./build/Release/addon.node').hello());
    console.log('done!');
    app.quit();
});