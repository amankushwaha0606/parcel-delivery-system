const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

router.post('/signup', authController.signup);
router.use('/signupPhoneVerification', authController.signupPhoneVerification);
router.use('/login', authController.login);

module.exports = router;