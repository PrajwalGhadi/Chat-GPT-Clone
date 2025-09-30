const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },

    chat: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Chat',
        required: true,
        index: true,
    },

    content: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['user', 'ai', 'system'],
        require: true,
        index: true
    }

}, {timestamps: true})


const Message = mongoose.model('Message', messageSchema);

module.exports = Message;