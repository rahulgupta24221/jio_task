const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === 'GET' && parsedUrl.pathname === '/api/parsetime') {
        const isoTime = parsedUrl.searchParams.get('iso');
        if (isoTime) {
            const date = new Date(isoTime);
            const timeObject = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(timeObject));
        } else {
            res.writeHead(400);
            res.end('Missing "iso" parameter');
        }
    } else if (req.method === 'GET' && parsedUrl.pathname === '/api/unixtime') {
        const isoTime = parsedUrl.searchParams.get('iso');
        if (isoTime) {
            const unixTime = new Date(isoTime).getTime();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ unixtime: unixTime }));
        } else {
            res.writeHead(400);
            res.end('Missing "iso" parameter');
        }
    } else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
