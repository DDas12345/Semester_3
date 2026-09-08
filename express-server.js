const express = require("express")
const app = express();

app.use(express.json()) //middleware to parse json data

// function logger(req, res, next) {
//     console.log(`This is request url ${req.url} and request method is ${req.method}`)
//     console.log('Class E waale bacche proxy maarte hai.')
//     next();
// }

// function signIn (req, res, next) {
//     // console.log(`This is request url ${req.url} and request method is ${req.method}`)
//     console.log('SignIn User is called')
//     next();
// }

//Register my middleware
// app.use(logger);
// app.use(signIn);

// app.get('/', (req, res) => {
//     console.log("Home page requested")
//     res.send("Welcome to my Home page")
// });

app.post("/users", (req, res) => {
    console.log(req.body)
    res.send(`Response send ${req.body}`)
})
// app.get('/users', signIn, (req, res) => {
//     console.log("Users page requested")
//     res.send("Welcome to my Users page")
// });
// app.get('/about', (req, res) => {
//     console.log("About page requested")
//     res.send("Welcome to my About page")
// });
// app.get('/Ruhi', (req, res) => {
//     console.log("This is my request")
//     res.send("Welcome to my Ruhi page")
// });
app.listen(3000)