const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();


router.get('/', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '..','views', 'shop.html')); 
    res.sendFile(path.join(rootDir,'views', 'shop.html')); 
});
// __dirname is the path where we are using it, here it will be /Users/konman01/Desktop/github/shopping-cart

module.exports = router;