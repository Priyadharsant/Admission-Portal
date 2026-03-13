const express = require('express');
const { signUpStudentController, loginStudentController, verifyCaptcha } = require('../controllers/student_cridential.Controller');
const Auth = require('../middlewares/auth.middleware');

const router = express.Router();

router.post("/signup", signUpStudentController)
router.post("/login", loginStudentController)

module.exports = router;