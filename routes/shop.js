const path = require('path');

const express = require('express');


const productsController = require('../controller/products');

const router = express.Router();


router.get('/', productsController.getProduct);
// __dirname is the path where we are using it, here it will be /Users/konman01/Desktop/github/shopping-cart

module.exports = router;