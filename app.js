const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');



/*const server = http.createServer((req, res) => {
    /*console.log(req);*/
/*process.exit;*/ // end the event listener
/*console.log(req.url, req.method, req.headers);*/
   
//});

/*const server = http.createServer(routes);*/

// get amd post useses the exact path match, where as use() uses the relative match

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});



/*const server = http.createServer(app);


server.listen(3000);*/

app.listen(3000, () => {
    console.log('Started the server!');
});