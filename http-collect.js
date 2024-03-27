const http = require('http');
const bl = require('bl');

const url = process.argv[2];

//  HTTP GET request
http.get(url, (response) => {

    response.pipe(bl((err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        
        console.log(data.toString().length);
        console.log(data.toString());
    }));
}).on('error', (error) => {
    console.error(error);
});
