const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {

    // http header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    //Routes
    const url = req.url;
    console.log(url)
    if (url === '/about') {
        res.write(' Welcome to about us page');
        res.end();
    }
    else if (url === '/contact') {
        res.write(' Welcome to contact us page');
        res.end();
    }
    else if (url === '/youtube') {
        res.write(' Welcome to youtube page');
        res.end();
    }
    else {
        res.write('Hello World!');
        res.end();
    }
})
server.listen(3000, () => {
    // The server object listens on port 3000
    console.log("server start at port 3000");
});