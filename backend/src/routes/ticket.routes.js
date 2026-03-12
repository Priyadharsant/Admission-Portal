const express = require("express");
const router = express.Router();

const ticketController = require("../controllers/ticket.controller");

router.post("/", ticketController.createTicket);
router.get("/", ticketController.getTickets);

module.exports = router;