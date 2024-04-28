const http = require('http');
const async = require('async');

// Check if both URLs are provided as command-line arguments
if (process.argv.length < 4) {
    console.error('Usage: node script.js <url1> <url2>');
    process.exit(1);
}

// Extract URLs from command-line arguments
const url1 = process.argv[2];
const url2 = process.argv[3];

// Define task functions for making GET requests
const tasks = {
    requestOne: function (callback) {
        http.get(url1, (res) => {
            let body = '';
            res.on('data', (chunk) => {
                body += chunk;
            });
            res.on('end', () => {
                callback(null, body);
            });
        }).on('error', (err) => {
            callback(err);
        });
    },
    requestTwo: function (callback) {
        http.get(url2, (res) => {
            let body = '';
            res.on('data', (chunk) => {
                body += chunk;
            });
            res.on('end', () => {
                callback(null, body);
            });
        }).on('error', (err) => {
            callback(err);
        });
    }
};

// Run the tasks in series
async.series(tasks, (err, results) => {
    if (err) {
        console.error('Error:', err);
        process.exit(1);
    }
    console.log(results);
});
