const http = require('http');
const server = http.createServer((req, response) => {

    if (req.method === 'GET' && req.url === '/users') {
        response.writeHead(200);
        response.write('Seaction E waale bacche waapas padhai nahi karte');
        response.end("At the end");
    }
});

server.listen(3000)