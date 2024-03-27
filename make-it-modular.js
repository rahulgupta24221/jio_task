const mymodule = require('./module');

const directoryPath = process.argv[2];
const fileExtension = process.argv[3];

mymodule(directoryPath, fileExtension, (err, filteredFiles) => {
    if (err) {
        console.error(err);
        return;
    }

    // Print the filtered file list
    filteredFiles.forEach(file => {
        console.log(file);
    });
});
