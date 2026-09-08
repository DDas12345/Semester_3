const express = require("express")
const app = express();
app.get('/', (req, res) => {
    console.log("Home page requested")
    res.send("Welcome to my Home page")
});
app.get('/users', (req, res) => {
    console.log("Users page requested")
    res.send("Welcome to my Users page")
});
app.get('/about', (req, res) => {
    console.log("About page requested")
    res.send("Welcome to my About page")
});
app.listen(3000)