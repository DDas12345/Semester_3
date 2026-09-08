const express = require("express")
const app = express();
app.get('/', (req, res) => {
    console.log("Home page requested")
    res.send("Welcome to my Home page")
});
app.listen(3000)