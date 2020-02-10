const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    // the path add-product goes here, other request g to next
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button>Add Product</button></form>');
});

router.post('/product', (req, res, next) => {
    // if the get request comes here it will be not listened, the default root url middleware will be executed
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;