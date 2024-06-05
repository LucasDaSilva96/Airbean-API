const { UserModel } = require('../models/userModel');
const bcrypt = require('bcrypt');
const validator = require('validator');

// Creates a new user
exports.createNewUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Validates email
    if (!validator.isEmail(email)) {
      throw new Error('Invalid email address');
    }

    // Checks if email is already in use
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new Error('Email address is already in use');
    }

    // Hashes the password before storing it in database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creates a new user in database
    await UserModel.create({ name, email, password: hashedPassword });

    res.status(201).json({
      status: 'success',
      message: 'New user successfully created',
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
