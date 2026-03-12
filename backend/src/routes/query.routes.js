const express = require("express");
const router = express.Router();

const queryController = require("../controllers/query.controller");

router.post("/", queryController.createQuery);

module.exports = router;