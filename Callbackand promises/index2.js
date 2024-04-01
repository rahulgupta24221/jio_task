const axios = require('axios');

async function fetchUrls(urls) {
    try {
        const responses = await Promise.all(urls.map(async (url) => {
            const response = await axios.get(url);
            return response.data;
        }));
        return responses;
    } catch (error) {
        throw error;
    }
}

// async function getFile() {
//     let myPromise = new Promise(function (resolve) {
//         let req = new XMLHttpRequest();
//         req.open('GET', "mycar.html");
//         req.onload = function () {
//             if (req.status == 200) {
//                 resolve(req.response);
//             } else {
//                 resolve("File not Found");
//             }
//         };
//         req.send();
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
// }
// getFile();

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
