const { sendAboutInfo } = require('../controllers/aboutController');
const express = require('express');

const router = express.Router();

//routing for About Page

router.get('/about', sendAboutInfo);

module.exports = router;
