const axios = require('axios');

async function fetchUrls(urls) {
    try {
        const responses = await Promise.all(urls.map(url => axios.get(url)));
        const bodies = responses.map(response => response.data);
        return bodies;
    } catch (error) {
        throw error;
    }
}

const urls = [
    'https://jiomeetpro.jio.com/api/sync_time'
];

fetchUrls(urls)
    .then(responseBodies => {
        console.log(responseBodies);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
