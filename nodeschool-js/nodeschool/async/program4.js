const http = require('http');
const async = require('async');

if (process.argv.length < 4) {
    console.error('Usage: node script.js <url1> <url2>');
    process.exit(1);
}

const url1 = process.argv[2];
const url2 = process.argv[3];

// Define an array containing the URLs
const urls = [url1, url2];

// Make GET requests to each URL using async.map
async.map(urls, function (url, done) {
    http.get(url, (res) => {
        let body = '';
        res.on('data', (chunk) => {
            body += chunk.toString();
        });
        res.on('end', () => {
            done(null, body); 
        });
    }).on('error', (err) => {
        done(err); 
    });
}, function (err, results) {
    if (err) {
        console.error('Error making GET requests:', err);
        return;
    }
    console.log( results); 
});
