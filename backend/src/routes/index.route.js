const express = require("express");
const router = express.Router();

const signupRoutes = require("./signup.routes");
const leadRoutes = require("./lead.routes");
const queryRoutes = require("./query.routes");
const applicationRoutes = require("./application.routes");
const ticketRoutes = require("./ticket.routes");
const dashboardRoutes = require("./dashboard.routes");

// Student Signup/Login
router.use("/", signupRoutes);

// Other features
router.use("/leads", leadRoutes);
router.use("/queries", queryRoutes);
router.use("/applications", applicationRoutes);
router.use("/tickets", ticketRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;