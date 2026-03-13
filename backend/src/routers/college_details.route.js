const express = require("express");
const router = express.Router();

const {getCollegeData  } = require("../controllers/aboutCollege.controller");

// Get college data section
router.get("/collegedetails", getCollegeData);

module.exports = router;