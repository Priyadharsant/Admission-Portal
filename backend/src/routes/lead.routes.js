const express = require("express");

const router = express.Router();

const leadController = require("../controllers/lead.controller");

const auth = require("../middlewares/auth.middleware");

router.post("/", auth, leadController.createLead);

router.get("/", auth, leadController.getLeads);

router.put("/:id/stage", auth, leadController.changeStage);

module.exports = router;