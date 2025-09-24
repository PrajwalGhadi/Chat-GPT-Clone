const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
    },

    chat: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Chat',
    },

    userMessage: {
        type: String,
    },

    aiMessage: {
        type: String,
    }

}, {timestamps: true})


const Message = mongoose.model('Message', messageSchema);

module.exports = Message;