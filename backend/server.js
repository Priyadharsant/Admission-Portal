require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const errorHandler = require('./src/middlewares/errorHandler.middleware');
const AppError = require('./src/utils/AppError');
const { connectToDatabase } = require('./src/config/db.config');
const studentRouter = require('./src/routers/index.route');

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
connectToDatabase();
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000
        }
    })
);
app.use("/api", studentRouter)

app.use(errorHandler)
app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");

})
