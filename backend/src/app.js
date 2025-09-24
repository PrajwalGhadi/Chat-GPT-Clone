// importing the express to create and start the server.
const express = require('express');
const app = express();

// importing the db config file
const connectDB = require('./configs/db.config');
connectDB();


//importing the routers 
const authRouter = require('./routers/auth.route');


// creating a separate path to reach the authRouter
app.use('/auth-api', authRouter);

module.exports = app
