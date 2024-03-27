const http = require('http');
const map = require('through2-map');

// Retrieve port number from command-line argument
const port = 54787;

// Create HTTP server
const server = http.createServer((req, res) => {
    // Ensure that the request method is POST
    if (req.method !== 'POST') {
        res.statusCode = 405; // Method Not Allowed
        res.end('Only POST requests are allowed');
    }

    // Pipe the request stream through a transform stream that converts characters to upper-case
    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
});

// Start listening on the specified port
  server.listen(port);
