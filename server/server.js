const express = require('express');
const app = express();
const db = require("./database")

app.get("/api", (req, res) => {
    res.json({"user":["userOne", "userTwo","userThree"]})
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})

