const fs = require('fs');

const filename = process.argv[2];

// Read  file asynchronously
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const newlineCount = data.split('\n').length - 1;

    console.log(newlineCount);
});
