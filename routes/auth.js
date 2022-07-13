const express = require('express');

const authController = require('../controllers/auth');
const verification = require("../middlewares/verifications");

const router = express.Router();

router.post('/signup', verification.signup, authController.signup);
router.use('/signupPhoneVerification', authController.signupPhoneVerification);
router.use('/login', authController.login);

module.exports = router;