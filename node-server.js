const http = require("http")
const server = http.createServer((req, res) => {
    if (req.method == "GET" && req.url == "/users") {
        res.writeHead(200);
        res.write("section E")
        res.end("hehe");
    }
})
server.listen(3000)