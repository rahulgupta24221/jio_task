const http = require('http');
const async = require('async');

// Check if hostname and port are provided as command-line arguments
if (process.argv.length < 4) {
    console.error('Usage: node script.js <hostname> <port>');
    process.exit(1);
}

// Extract hostname and port from command-line arguments
const hostname = process.argv[2];
const port = process.argv[3];
const url = `http://${hostname}:${port}`;

// Task function to send POST requests using async.times
function sendPostRequests(callback) {
    async.times(5, (n, next) => {
        const user_id = n + 1;
        const postData = JSON.stringify({ user_id });

        const options = {
            hostname: hostname,
            port: port,
            path: '/users/create',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length
            }
        };

        const req = http.request(options, (res) => {
            res.on('data', () => { }); // Consume response data
            res.on('end', () => {
                next(null); // Signal completion of POST request
            });
        });

        req.on('error', (err) => {
            next(err); // Signal error
        });

        req.write(postData);
        req.end();
    }, (err) => {
        if (err) {
            callback(err); // Pass error to main callback
            return;
        }
        callback(null); // Signal completion of all POST requests
    });
}

// Task function to send GET request
function sendGetRequest(callback) {
    const options = {
        hostname: hostname,
        port: port,
        path: '/users',
        method: 'GET'
    };

    const req = http.request(options, (res) => {
        let body = '';
        res.on('data', (chunk) => {
            body += chunk;
        });
        res.on('end', () => {
            callback(null, body); // Pass response body to main callback
        });
    });

    req.on('error', (err) => {
        callback(err); // Pass error to main callback
    });

    req.end();
}

// Run the tasks in series
async.series({
    sendPostRequests,
    sendGetRequest
}, (err, results) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('GET request response body:', results.sendGetRequest);
});
