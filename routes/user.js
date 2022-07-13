const express = require('express');

const userController = require('../controllers/user');
const verification = require("../middlewares/verifications");

const router = express.Router();

router.use('/fillUserInfo', verification.verifyUser, userController.fillUserInfo);

module.exports = router;