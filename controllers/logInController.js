const { UserModel } = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Läsa in JWT-hemligheten från miljövariabeln
const jwtSecret = process.env.JWT_SECRET;

// Funktion för att logga in en användare
exports.logInUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Hitta användaren baserat på e-postadressen
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    // Jämför det inmatade lösenordet med det hashade lösenordet i databasen
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid password');
    }

    // Om lösenordet är korrekt, skapa en JWT-token
    const token = jwt.sign({ userId: user._id }, jwtSecret, {
      expiresIn: '1h', // Token utgår om 1 timme
    });

    // Skicka tillbaka JWT-token till klienten
    res.status(200).json({
      status: 'success',
      token,
    });
  } catch (e) {
    // Om inloggningen misslyckas, skicka felmeddelande
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};