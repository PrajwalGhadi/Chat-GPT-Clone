const express = require('express');
const router = express.Router();

const { createNewChat, getChat } = require('../controllers/profile.Controller')

router.post('/newChat', createNewChat);
router.post('/getchat', getChat);

module.exports = router 