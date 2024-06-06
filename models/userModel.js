const mongoose = require('mongoose');
const { OrderSchema } = require('./orderModel');

// Skapar ett schema för användare
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'], // Namnet är obligatoriskt
  },
  email: {
    type: String,
    required: [true, 'Please provide email'], // E-postadressen är obligatorisk
    unique: true, // Unik e-postadress för varje användare
  },
  password: {
    type: String,
    required: [true, 'Please provide password'], // Lösenordet är obligatoriskt
  },
  orders: [OrderSchema], // Användarens orderhistorik
});

// Skapar en modell för användare baserat på användarschemat
const UserModel = mongoose.model('user', UserSchema);

module.exports = {
  UserSchema,
  UserModel,
};
