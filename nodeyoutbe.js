// const path = require("path")

// const a = path.dirname("/home/rahul");

// console.log(a);


// const os = require("os")

// const a  = os.freemem();
// console.log(a);


//

const http = require("http");

const port = 3000;

const server = http.createServer((req,res)=>{

    if(req.url == "/about")
      res.end("woking mind");

    else if(req.url == "/raju")
       res.end("very smart boy");
    else
      res.end("perry");

})

server.listen(port,"localhost", ()=>{
    console.log("server is working on http://localhost:3000");
})

