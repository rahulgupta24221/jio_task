const fs = require('fs');


function readAndSortJSON(filePath, name) {
    return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
                reject(err);
                return;
            }
        try {
                const jsonData = JSON.parse(data);
                if (!jsonData || !Array.isArray(jsonData)) {
                    reject(new Error('Invalid JSON data'));
                    return;
                }

                if (name) {
                    jsonData.sort((a, b) => {
                        if (a[name] < b[name]) return -1;
                        if (a[name] > b[name]) return 1;
                        return 0;
                    });
                }

                resolve(jsonData);
        } catch (parseError) {
                reject(parseError);
            }
        });
    });
}


readAndSortJSON('/home/rahul/jio_chargeit2/github/jio_task/CPA/data.json', 'name')
    .then(sortedData => {
        console.log(sortedData);
    })
    .catch(error => {
        console.error('Error:', error);
    });
