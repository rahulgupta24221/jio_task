const fs = require('fs');

// Read file synchronously and store its content in a buffer
const buffer = fs.readFileSync(process.argv[2]);
const newlineCount = buffer.toString().split('\n').length - 1;


console.log(newlineCount);
