const express = require("express");
const router = express.Router();

const { updateApplication } = require("../controllers/application.controller");
const applicationDocumentUpload = require("../middlewares/applicatoin_multer");

// Update application section
router.post("/updateapplication", applicationDocumentUpload, updateApplication);

module.exports = router;