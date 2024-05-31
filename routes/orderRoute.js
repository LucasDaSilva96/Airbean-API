const { createNewOrder } = require('../controllers/createOrderController');
const {
  getDeliveryInformation,
} = require('../controllers/seeDeliveryStatsController');
const express = require('express');
const router = express.Router();

router.post('/order', createNewOrder);
router.get('/deliveryStats/:orderID', getDeliveryInformation);
module.exports = router;
