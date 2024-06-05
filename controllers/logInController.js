const { UserModel } = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Read in JWT-secret from enviroment
const jwtSecret = process.env.JWT_SECRET;

// Function to log in user
exports.logInUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find user based on email adress
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    // Compare the password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid password');
    }

    // If password is correct, Create a JWT-token
    const token = jwt.sign({ userId: user._id }, jwtSecret, {
      expiresIn: '1h', // Token utgår om 1 timme
    });

    // Send back JWT-token to client
    res.status(200).json({
      status: 'success',
      id: user._id,
      token,
    });
  } catch (e) {
    // If log in failed, catch error
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
