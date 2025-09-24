const express = require('express');
const router = express.Router();

const { registerUser, loginUser} = require('../controllers/auth.Controller')

router.get('/login', loginUser);
router.get('/register', registerUser);


module.exports = router;