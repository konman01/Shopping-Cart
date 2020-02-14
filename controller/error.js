exports.get404 = (req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); // sending the html page
    res.status(404).render('404', {pageTitle: 'Product Not Found', path: ''});
}