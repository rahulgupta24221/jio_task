//const axios = require('axios');

const http = require('http');

// async function fetchUrls(urls) {
//     try {
//         const responses = await Promise.all(urls.map(async (url) => {
//             const response = await axios.get(url);
//             return response.data;
//         }));
//         return responses;
//     } catch (error) {
//         throw error;
//     }
// }

function fetchURL(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let body = '';
            res.on('data', (chunk) => {
                body += chunk;
            });
            res.on('end', () => {
                resolve(body);
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}

async function fetchURLs(urls) {
    const responses = [];
    for (const url of urls) {
        try {
            const body = await fetchURL(url);
            responses.push(body);
        } catch (error) {
            console.error(`Error fetching URL ${url}:`, error);
            throw error;
        }
    }
    return responses;
}

const urls = [
    'https://jiomeetpro.jio.com/api/sync_time'
];

fetchURLs(urls)
    .then(responseBodies => {
        console.log(responseBodies);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
