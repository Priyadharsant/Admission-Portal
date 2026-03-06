const express = require('express');

const app = express();
const cors = require('cors');
const errorHandler = require('./src/middlewares/errorHandler');
const AppError = require('./src/utils/AppError');

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.status(400).json({ message: "Welcome to admission portal" })
})
app.get("/err", (req, res) => {
    next(new AppError("Error"))
})
app.use(errorHandler)
app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");

})
