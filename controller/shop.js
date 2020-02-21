const Product = require('../models/product');



exports.getProduct  = (req, res, next) => {
    console.log('Entered here');
    const products = Product.fetchAll((products) => {
        res.render('shop/product-list',
            {
                prods: products,
                pageTitle: 'All Products',
                path: '/products',

            }); // for pug page
    });
    
    
}

exports.getIndex = (req, res, next) => {

    const products = Product.fetchAll((products) => {
        res.render('shop/index',
            {
                prods: products,
                pageTitle: 'Shop',
                path: '/',

            }); // for pug page
    });
    
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: 'checkout',
        pageTitle: 'Checkout'

    });
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: 'orders',
        pageTitle: 'Orders'

    });
}