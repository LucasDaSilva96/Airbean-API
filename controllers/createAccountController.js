const { UserModel } = require('../models/userModel');
const bcrypt = require('bcrypt');
const validator = require('validator');

// Skapar en ny användare
exports.createNewUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Validerar e-postadressen
    if (!validator.isEmail(email)) {
      throw new Error('Invalid email address');
    }

    // Kontrollerar om e-postadressen redan används
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new Error('Email address is already in use');
    }

    // Hashar lösenordet innan det sparas i databasen
    const hashedPassword = await bcrypt.hash(password, 10);

    // Skapar en ny användare i databasen
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
