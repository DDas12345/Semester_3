const http = require("http");
const server = http.createServer((req, res) => {
    if (req.method == "GET" && req.url == "/users") {
        res.end("List of users");
    }
    else if (req.method == "GET" && req.url == "/restraurants") {
        res.end("List of restro");
    }
    else if (req.method == "GET" && req.url == "/orders") {
        res.end("List of users");
    }
    else if (req.method == "POST" && req.url == "/orders") {
        res.end("List of restro");
    }
    else {
        res.end("route not found")
    }
})
server.listen(3000)