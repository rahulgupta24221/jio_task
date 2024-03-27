const net = require('net');


const port = process.argv[2];

// Function to zero-fill numbers less than 10
function zeroFill(number) {
    return (number < 10 ? '0' : '') + number;
}

// Function to format date and time
function formatDateTime(date) {
    const year = date.getFullYear();
    const month = zeroFill(date.getMonth() + 1); // Months are zero-based
    const day = zeroFill(date.getDate());
    const hours = zeroFill(date.getHours());
    const minutes = zeroFill(date.getMinutes());

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// Create TCP server
const server = net.createServer((socket) => {
    const now = new Date();
    const formattedDateTime = formatDateTime(now);

    // Write formatted date and time to socket
    socket.write(formattedDateTime + '\n');

    socket.end();
});


server.listen(port);
