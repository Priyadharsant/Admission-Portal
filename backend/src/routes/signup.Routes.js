const express = require("express");
const router = express.Router();

const {registerStudent,loginStudent} = require("../controllers/student.Controller")
router.post("/login", loginStudent);
router.post("/register", registerStudent);


module.exports = router;