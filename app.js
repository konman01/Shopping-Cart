const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');



/*const server = http.createServer((req, res) => {
    /*console.log(req);*/
/*process.exit;*/ // end the event listener
/*console.log(req.url, req.method, req.headers);*/
   
//});

/*const server = http.createServer(routes);*/

// get amd post useses the exact path match, where as use() uses the relative match

const app = express();

// set function on app is used to set the values on global environment
app.set('view engine', 'pug');
app.set('views', './views' );

app.use(bodyParser.urlencoded({ extended: false }));

// include the css and javascript file
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);

app.use(shopRoutes);

app.use('/', (req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); // sending the html page
    res.status(404).render('404', {pageTitle: 'Product Not Found'});
});



/*const server = http.createServer(app);


server.listen(3000);*/

app.listen(3000, () => {
    console.log('Started the server!');
});