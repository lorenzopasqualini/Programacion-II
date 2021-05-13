const db= require('../database/models');

const productController={
    product: (req, res)=>{
        let id= req.params.id;
        db.Product.findByPk(id)
            .then(data=>{
                return res.render('product', {product: data})
            })
            .catch(error=>{
                console.log(error);
            })
    },

    add: (req, res)=> res.render('product-add'),
}

module.exports= productController;