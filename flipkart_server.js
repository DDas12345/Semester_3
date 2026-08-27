const http = require('http');
console.log(http);
const server = http.createServer((req, response) => {
    response.end('Section E waale bacche padhai nahi karte');
});
server.listen(3000, () => {
    console.log("My Flipkart serverr is live on port 3000");
})