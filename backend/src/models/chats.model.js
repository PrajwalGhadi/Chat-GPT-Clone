const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true
    },
    
    chatTitle: {
        type: String,
    },
}, {timestamps: true})


const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;