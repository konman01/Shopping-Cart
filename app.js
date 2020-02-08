const http = require('http');
const routes = require('./routes');

/*const server = http.createServer((req, res) => {
    /*console.log(req);*/
/*process.exit;*/ // end the event listener
/*console.log(req.url, req.method, req.headers);*/
   
//});

/*const server = http.createServer(routes);*/


console.log(routes.someText);
const server = http.createServer(routes.handler);


server.listen(3000);