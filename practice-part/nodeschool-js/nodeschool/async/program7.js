const http = require('http');
const async = require('async');

if (process.argv.length < 3) {
    console.error('Usage: node script.js <url>');
    process.exit(1);
}

const url = process.argv[2];
let getRequestCount = 0;


function sendGetRequest(callback) {
    http.get(url, (res) => {
        let body = '';
        res.on('data', (chunk) => {
            body += chunk;
        });
        res.on('end', () => {
            
            getRequestCount++;
            // Check if the response body contains "meerkat"
            if (body.includes('meerkat')) {
                callback(null, true); // Signal completion if "meerkat" is found
            } else {
                callback(null, false); // Continue looping if "meerkat" is not found
            }
        });
    }).on('error', (err) => {
        callback(err); // Pass any error to the main callback
    });
}

// Use async.whilst to send GET requests until "meerkat" is found
async.whilst(
    () => true, 
    (callback) => {
        sendGetRequest((err, found) => {
            if (err) {
                callback(err); 
                return;
            }
            if (found) {
                callback(null); 
            } else {
                callback(null); 
            }
        });
    },
    (err) => {
        if (err) {
            console.error('Error:', err);
            return;
        }
        console.log('Number of GET requests needed:', getRequestCount);
    }
);
