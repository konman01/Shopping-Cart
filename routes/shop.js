const path = require('path');

const express = require('express');


const shopController = require('../controller/shop');



const router = express.Router();


router.get('/', shopController.getIndex);
// __dirname is the path where we are using it, here it will be /Users/konman01/Desktop/github/shopping-cart

router.get('/products', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.get('/checkout', shopController.getCheckout);


module.exports = router;