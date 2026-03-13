const express = require('express');
const Auth = require('../middlewares/auth.middleware');
const credential = require("./credential.route")
const router = express.Router();
const application = require("./application.route");
const { verifyCaptchaService } = require('../middlewares/captchaVerification.middleware');

router.use("/credential", verifyCaptchaService, credential);
router.use("/application", Auth, application)

module.exports = router;
