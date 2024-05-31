const { createNewUser } = require('../controllers/createAccountController');
const express = require('express');
const router = express.Router();

router.post('/signUp', createNewUser);

module.exports = router;
