const http = require('http');
const fs = require('fs');

// Retrieve port number from command-line argument
const port = process.argv[2];

// Retrieve file path from command-line argument
const filePath = process.argv[3];

// Create HTTP server
const server = http.createServer((req, res) => {
    // Create read stream for the file
    const readStream = fs.createReadStream(filePath);

    // Pipe the file stream to the response stream
    readStream.pipe(res);

    // Handle errors
    readStream.on('error', (error) => {
        console.error('Error reading file:', error);
        res.statusCode = 500;
        res.end('Internal Server Error');
    });
});

// Start listening on the specified port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
