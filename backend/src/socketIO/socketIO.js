const { Server } = require("socket.io");

// importing all the models
const userModel = require("../models/users.model");
const chatModel = require("../models/chats.model");
const messageModel = require("../models/messages.model");

//importing the ai service
const { getAIResponse } = require('../services/ai.services')

// creating function to setup the socketIO
async function setupSocketIO(httpServer) {
  const io = new Server(httpServer);

  io.on("connection", (socket) => {

    socket.on("chat-message", async (data) => {
      try {
        // all parse the data if it's string
        typeof data === "string" ? (data = JSON.parse(data)) : data;

        // storing the userMessage to the database;
        const { chatId, content } = data;

        // fetching the chat details on the basis of ChatID so server will now which user is?
        const chatDetail = await chatModel.findOne({ chatId });

        // Updating the user from chatDetail and user chat message to db
        await messageModel.create({
          user: chatDetail?.users,
          chat: chatDetail?._id,
          content: content,
          role: 'user',
        });
      
       
        // passing the content to AI to generate the response against it.
        const aiResonse = await getAIResponse(content);
        socket.emit('ai-response', aiResonse);  // sending the ai response to frontend

        // now storing the ai-response to db after sending to frontend.. doing this after sending due to save the response time
        await messageModel.create({
          user: chatDetail?.users,
          chat: chatDetail?._id,
          content: aiResonse,
          role: 'ai'
        })

      } catch (error) {
        console.log("Error from socket.on chat-message: ", error.message);
      }
    });

    socket.on("disconnect", () => {
      console.log("disconnected socket IO");
    });
  });
}

module.exports = setupSocketIO;
