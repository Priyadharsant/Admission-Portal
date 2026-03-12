const express = require("express");
const router = express.Router();

const applicationController = require("../controllers/application.controller");

router.post("/", applicationController.createApplication);
router.get("/", applicationController.getApplications);

module.exports = router;