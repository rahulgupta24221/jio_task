const http = require('http');
const async = require('async');

if (process.argv.length < 4) {
    console.error('Usage: node script.js <url1> <url2>');
    process.exit(1);
}


const url1 = process.argv[2];
const url2 = process.argv[3];

const urls = [url1, url2];

async.each(urls, function (url, done) {
    http.get(url, (res) => {
        // Do nothing with response data, just wait for 'end' event
        res.on('end', () => {
            done();
        });
    }).on('error', (err) => {
        console.error('Error making GET request to', url, ':', err);
        done(err); 
    });
}, function (err) {
    if (err) {
        console.error('At least one request encountered an error');
    } else {
        console.log('Both requests completed successfully');
    }
});
