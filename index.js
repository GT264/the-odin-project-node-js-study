const http = require('http');
const path = require('path');
const fs = require('fs');

let filePath = __dirname;

const server = http.createServer((req, res) => {

    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream(path.resolve(filePath, 'pages/index.html')).pipe(res);
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream(path.resolve(filePath, 'pages/about.html')).pipe(res);
            break;
        case '/contact-me':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream(path.resolve(filePath, 'pages/contact-me.html')).pipe(res);
            break;
        default:
            res.writeHead(404);
            res.end();
            break;
    }
});

server.listen(8080);