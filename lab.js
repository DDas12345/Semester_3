// npm init --y

// npm i dotenv
const http = require("http");
const dotenv = require("dotenv")

dotenv.config() //loads environment variables from a .env --> file into Node.js's process.env
const server = http.createServer((req,res)=>{
    console.log(req.method)
    console.log(req.url)
    if(req.url==="/image") res.end("image shown")
    else es.end("something else shown");
});
server.listen(process.env.PORT,()=>{
    console.log("Server is running ");
});

// node --watch lab.js