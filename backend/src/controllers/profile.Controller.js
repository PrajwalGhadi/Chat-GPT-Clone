const chatModel = require("../models/chats.model");
const messageModel = require("../models/messages.model");

async function createNewChat(req, res) {
  const { userID, title } = req.body;

  const chat = await chatModel.findOne({ users: userID, chatTitle: title });

  if (chat) {
    return res.status(400).json({ error: "Chat already exists" });
  }

  try {
    const newChat = await chatModel.create({
      users: userID,
      chatTitle: title,
    });
    return res.status(200).json({ message: "New Chat Created", newChat });
  } catch (error) {
    console.log('Error from CreateNewChat: ', error.message);
  }
}

async function getChat(req, res) {
  const { chatId } = req.body;

  try {
    const messages = await messageModel.find({ chatId: chatId });

    return res.status(200).json({ 
      status: "success",
      messages: messages
    })
  } catch (error) {
    console.log('Error from getChat: ', error.message);
  }
}

module.exports = {
  createNewChat,
  getChat
};
