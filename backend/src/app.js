// importing the express to create and start the server.
const express = require('express');
const app = express();

// importing the db config file
const connectDB = require('./configs/db.config');
connectDB();

// import  the dotenv to use the environment variables
require('dotenv').config();

// importing cookie parser to parse the cookies from the request
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//importing the routers 
const authRouter = require('./routers/auth.route');

const profileRouter = require('./routers/profile.route')



// importing the middleware to parse the incoming request body
app.use(express.json());
app.use(express.urlencoded({extended: true}))


// creating a separate path to reach the authRouter
app.use('/auth/api', authRouter);

app.use('/profile/api', profileRouter);

module.exports = app
