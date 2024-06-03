const { sendAboutInfo } = require('../controllers/aboutController');
const express = require('express');

const router = express.Router();

router.get('/about', sendAboutInfo);

module.exports = router;
