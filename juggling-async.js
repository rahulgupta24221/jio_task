const http = require('http');

const urls = process.argv.slice(2);
const results = [];
let count = 0;

// Function to make HTTP GET request and collect response data
function fetchData(url, index) {
    http.get(url, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        // Handle end of response
        response.on('end', () => {
            results[index] = data;
            count++;

            // Check if all responses have been collected
            if (count === urls.length) {
                printResults();
            }
        });

        // Handle errors
        response.on('error', (error) => {
            console.error(`Error fetching data from ${url}: ${error.message}`);
        });
    });
}

// Function to print results to the console
function printResults() {
    results.forEach(result => {
        console.log(result);
    });
}

// Fetch data from each URL
urls.forEach((url, index) => {
    fetchData(url, index);
});
