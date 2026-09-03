const express = require("express")
const server = express();
server.get("/users",(req,res)=>{
    res.send(`Welcome`);
});
server.listen(3000);
