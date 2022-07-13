const express = require('express');

const parcelController = require('../controllers/parcel');
const verification = require("../middlewares/verifications");

const router = express.Router();

router.use('/orderDetails',verification.verifyUser, parcelController.orderDetails);
router.use('/applyCoupen', verification.verifyUser, parcelController.applyCoupen);
router.use('/trackOrder', verification.verifyUser, parcelController.trackOrder);
router.use('/orderFeedback', verification.verifyUser, parcelController.orderFeedback);

module.exports = router;