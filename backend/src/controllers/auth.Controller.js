const userModel = require("../models/users.model");
const chatModel = require("../models/chats.model");
const messageModel = require("../models/messages.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// importing helper function to validate the user data
const validateUserData = require("../utils/validateRegisterData");

async function registerUser(req, res) {
  const { username, email, password } = req.body;

  // validation of the user data
  let validationErrors = validateUserData({ username, email, password });

  // if there are any validation errors, return the errors
  if (validationErrors.length > 0) {
    return res.status(400).json({ errors: validationErrors });
  }

  try {
    // Find existing user (Database operation is inside try/catch)
    let existingUser = await userModel.findOne({ username: username, email: email }); // Use shorthand { email }

    // Checking if user already exists
    if (existingUser) {
      // Use 409 Conflict for resource existence issue
      return res.status(409).json({
        errors: [
          {
            field: "email",
            errorMessage: "A user with this email already exists.",
          },
        ],
      });
    }
    // checking if not exist then create the user
    else {
      // setting the salt rounds to 10 and hashing the password
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt); // passing the password and salt to hash the password

      // creating the new user
      const newUser = await userModel.create({
        username: username,
        email: email,
        password: hashPassword,
      });

      // defining the token for the user
      const token = jwt.sign(
        { id: newUser._id, username: newUser.username }, // Payload: Data you want to encode
        process.env.JWT_SECRET, // Your secret key (must be secure!)
        { expiresIn: "24h" } // Token expiry (e.g., 24 hours)
      );

      res.cookie("jwt", token, {
        httpOnly: true, // Essential for security (prevents JS access)
        secure: process.env.NODE_ENV === "production", // Use 'secure: true' in production (requires HTTPS)
        maxAge: 3600000 * 24, // Match the token expiry (24 hours in milliseconds)
        sameSite: "strict", // Important for modern security
      });

      // responding the client that user is created successfully
      res.status(201).json({
        status: "success",
        message: "User Registered Successfully",
        user: { username: newUser.username }, // Return only username which is non-sensitive. Avoid returning email and password.
      });
    }
  } catch (err) {
    console.log("Internal Server Error Occured for Registration", err);
    res
      .status(500)
      .json({ message: "Internal Server Error Occured for Registration" });
  }
}

async function loginUser(req, res) {
  const { username, password } = req.body;


  // checking all the field are present or not
  if (!username || !password) {
    return res
      .status(400)
      .json({ status: "errors", errorMessage: "input field is empty" });
  }

  try {
    // finding the user with the given username
    const user = await userModel.findOne({ username: username }); 
    
    
    // if user is not present with the given username
    if (!user) {
      return res.status(401).json({
        status: "errors",
        errors: [
          {
            isUser: false,
            errorMessage: "Invalid Username or Password",
          },
        ],
      });
    }

    // note: while using bcrypt.compare the first parameter is the plain text password and the second parameter is the hashed password
    const comparePass = await bcrypt.compare(password, user.password);

    if (!comparePass) {
      return res.status(401).json({
        status: "errors",
        errors: [
          {
            isUser: false, // I have kept same name as isUser for password to hide from attacker that what wrong password or email
            errorMessage: "Invalid Username or Password",
          },
        ],
      });
    }

    // check if any chats are present for the user
    const userChats = await chatModel.find({
      users: { $elemMatch: { userId: user._id } },
    });

    // defining the token for the user
    const token = jwt.sign(
      { id: user._id, username: user.username }, // Payload: Data you want to encode
      process.env.JWT_SECRET, // Your secret key (must be secure!)
      { expiresIn: "24h" } // Token expiry (e.g., 24 hours)
    );

    res.cookie("jwt", token, {
      httpOnly: true, // Essential for security (prevents JS access)
      secure: process.env.NODE_ENV === "production", // Use 'secure: true' in production (requires HTTPS)
      maxAge: 3600000 * 24, // Match the token expiry (24 hours in milliseconds)
      sameSite: "strict", // Important for modern security
    });

    res.status(200).json({
      status: "Success",
      message: `Welcome ${user.username}`,
      user: { username: user.username },
      chats: userChats && userChats.length > 0 ? userChats : [], // if chats are present then send the chats otherwise send empty array. This help me to avoid separate api call to fetch chats
    });
  } catch (error) {
    console.log("Internal Server Error Occured for Login", error);
    res
      .status(500)
      .json({ message: "Internal Server Error Occured for Login" });
  }
}

async function logoutUser(req, res) {
  try {
    res.clearCookie("jwt", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({
      status: "success",
      message: "User logged out successfully",
    });
  } catch (error) {
    console.log("Internal Server Error Occured for Logout", error);
    res
      .status(500)
      .json({ message: "Internal Server Error Occured for Logout" });
  }
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
