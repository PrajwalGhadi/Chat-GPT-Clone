const mongoose = require('mongoose');
require('dotenv').config();

function connectDB () {
    mongoose.connect(process.env.MONGO_URL).then(()=> {
        console.log('Connected DB...');
    }).catch((err)=> {
        console.log('DB Config Error:', err.message);
    })
}

module.exports = connectDB;
