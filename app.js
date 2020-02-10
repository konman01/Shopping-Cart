const http = require('http');
const express = require('express');

/*const server = http.createServer((req, res) => {
    /*console.log(req);*/
/*process.exit;*/ // end the event listener
/*console.log(req.url, req.method, req.headers);*/
   
//});

/*const server = http.createServer(routes);*/

const app = express();


const server = http.createServer(app);


server.listen(3000);