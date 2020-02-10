const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

/*const server = http.createServer((req, res) => {
    /*console.log(req);*/
/*process.exit;*/ // end the event listener
/*console.log(req.url, req.method, req.headers);*/
   
//});

/*const server = http.createServer(routes);*/

const app = express();

app.use(bodyParser.urlencoded({extended: false}));


app.get('/add-product', (req, res, next) => {
    // the path add-product goes here, other request g to next
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button>Add Product</button></form>');
});

app.post('/product', (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from the nodejs Server</h1>'); // header like text/html is automatically set usig this utility function
});


/*const server = http.createServer(app);


server.listen(3000);*/

app.listen(3000, () => {
    console.log('Started the server!');
});