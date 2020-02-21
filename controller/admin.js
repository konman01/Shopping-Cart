const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // the path add-product goes here, other request g to next
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html')); -- Sending HTML Page
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req, res, next) => {
    // if the get request comes here it will be not listened, the default root url middleware will be executed
    const title = req.body.title;
    const imgUrl = req.body.imgUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imgUrl, price, description);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('admin/products',
            {
                prods: products,
                pageTitle: 'Admin products',
                path: '/admin/products',

            }); // for pug page
    });
}