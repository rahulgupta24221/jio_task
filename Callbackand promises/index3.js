const https = require('https');

function fetchUrls(urls, callback) {
    const responses = [];

    let completedRequests = 0;

    
    function fetchUrl(url, index) {
        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                responses[index] = data;
                completedRequests++;

                // Check if all requests are completed
                if (completedRequests === urls.length) {
                    callback(null, responses);
                }
            });
        }).on('error', (error) => {
            console.error(`Error fetching URL ${url}:`, error.message);
            responses[index] = null;
            completedRequests++;

            if (completedRequests === urls.length) {
                callback(null, responses);
            }
        });
    }

    urls.forEach((url, index) => {
        fetchUrl(url, index);
    });
}


const urls = [
    'https://jiomeetpro.jio.com/api/sync_time',
];

fetchUrls(urls, (error, responses) => {
    if (error) {
        console.error('Error fetching URLs:', error);
    } else {
        console.log('Responses:', responses);
    }
});
