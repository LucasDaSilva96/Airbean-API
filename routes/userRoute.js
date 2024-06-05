const express = require('express');
const { createNewUser } = require('../controllers/createAccountController');
const { logInUser } = require('../controllers/logInController'); // Importera logInUser-funktionen

const router = express.Router();

// Skapar en ny användare genom en POST-förfrågan till /signUp
router.post('/users/signUp', createNewUser);

// Logga in användaren genom en POST-förfrågan till /login
router.post('/users/login', logInUser);

module.exports = router;
