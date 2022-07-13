const express = require('express');

const paymentsController = require('../controllers/payments');

const router = express.Router();

router.use('/payment', paymentsController.payment);
router.get('/bookings', (req, res, next) => {
    res.sendFile('D:/jungleworks/mini-project/views/booking.html');
}); 

module.exports = router;