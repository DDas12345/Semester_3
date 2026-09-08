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
app.get('/Ruhi', (req, res) => {
    console.log("Ruhi page requested")
    res.send("Welcome to my Ruhi page")
});
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})