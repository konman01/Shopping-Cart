const path = require('path');

const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..','views', 'shop.html')); 
});
// __dirname is the path where we are using it, here it will be /Users/konman01/Desktop/github/shopping-cart

module.exports = router;