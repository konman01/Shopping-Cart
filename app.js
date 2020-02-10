const http = require('http');
const express = require('express');

/*const server = http.createServer((req, res) => {
    /*console.log(req);*/
/*process.exit;*/ // end the event listener
/*console.log(req.url, req.method, req.headers);*/
   
//});

/*const server = http.createServer(routes);*/

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware');
    next(); // Allows the request to continue to next middleware in line
});

app.use((req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from the nodejs Server</h1>'); // header like text/html is automatically set usig this utility function
});


const server = http.createServer(app);


server.listen(3000);