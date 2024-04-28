
const fs = require('fs').promises; //using promises

async function readAndSortJSONFile(file_Path, sortByjsondata) {

    try {
        // Read JSON file asynchronously
        const data = await fs.readFile(file_Path, 'utf-8');

        const jsonData = JSON.parse(data);

        // Sort the array based on a specific property
        jsonData.sort((a, b) => {
            // Assuming sortByProperty exists in each object
            return a[sortByjsondata] - b[sortByjsondata];
        });

        return jsonData;
    } catch (error) {
        console.error('Error reading or sorting JSON file:', error);
        throw error;
    }
}

const file_Path = '/home/rahul/jio_chargeit2/github/jio_task/Callbackand promises/data.json';
 const sortByjsondata = 'name'; 

readAndSortJSONFile(file_Path, sortByjsondata)
    .then((sortedData) => {
        console.log('Sorted data:', sortedData);
    })
    .catch((error) => {
        console.error('Error:', error);
    });



