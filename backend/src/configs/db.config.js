const mongoose = require('mongoose');

function connectDB () {
    mongoose.connect('mongodb+srv://prajwalghadi28:6qhiKmDJCF9J9DlQ@cluster0.orc88jm.mongodb.net/').then(()=> {
        console.log('Connected DB...');
    }).catch((err)=> {
        console.log('DB Config Error:', err.message);
    })
}

module.exports = connectDB;
