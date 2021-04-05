const productController={
    product: (req, res)=> res.render('product'),

    add: (req, res)=> res.render('product-add'),
}

module.exports= productController;