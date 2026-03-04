const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to admission portal" })
})

app.listen(5000, () => {
    console.log("server running at http://localhost:5000");

})