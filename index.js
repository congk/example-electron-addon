const addon = require('./build/Release/addon.node');

console.log('value from c++ module:', addon.hello());