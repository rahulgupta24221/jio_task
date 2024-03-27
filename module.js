const fs = require('fs');
const path = require('path');

module.exports = function (directoryPath, fileExtension, callback) {
    // Read the contents of the directory asynchronously
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return callback(err);
        }

        // Filter files by extension
        const filteredFiles = files.filter(file => {
            return path.extname(file) === `.${fileExtension}`;
        });

        // Return the filtered file list
        callback(null, filteredFiles);
    });
};
