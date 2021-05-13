const db= require('../database/models');

const indexController={
    index: (req, res)=>{
        db.Product.findAll({
            limit: 5
        })
            .then((data)=>{
                return res.render('index', {product: data})
            })
            .catch((error)=>{
                console.log(error);
            })
    }
}

module.exports= indexController;