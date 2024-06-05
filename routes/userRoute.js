const express = require('express');
const { createNewUser } = require('../controllers/createAccountController');
const { logInUser } = require('../controllers/logInController'); 

const router = express.Router();

// Creates a new user through a POST-request to /signup
router.post('/users/signUp', createNewUser);

// Logs in the user by doing a POST-request to /login
router.post('/users/login', logInUser);

module.exports = router;

