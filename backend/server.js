const app = require('../backend/src/app');

// creating http server with http module and creating server passing app to it.
const httpServer = require('http').createServer(app); 

const setupSocketIO = require('./src/socketIO/socketIO')
setupSocketIO(httpServer);  // using httpServer instead of app

httpServer.listen(3000, ()=> {
    console.log('Connected to Server...')
})