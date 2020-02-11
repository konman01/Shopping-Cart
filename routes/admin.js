const path = require('path');


const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    // the path add-product goes here, other request g to next
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    // if the get request comes here it will be not listened, the default root url middleware will be executed
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;