require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('./src/middlewares/errorHandler');
const AppError = require('./src/utils/AppError');
const { connectDB } = require("./src/config/db");
const Router = require("./src/routes/index.route")

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", Router);

app.use(errorHandler)
app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");

})