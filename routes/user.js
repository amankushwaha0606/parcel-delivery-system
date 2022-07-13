const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.use('/fillUserInfo', userController.fillUserInfo);

module.exports = router;