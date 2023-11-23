// Create a web server that send back the content of a file anytime the client requests it

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200, { 'Content-type': 'text/html' });
    readStream.pipe(res);
});

server.listen(3000);
console.log('server listening on port 3000');