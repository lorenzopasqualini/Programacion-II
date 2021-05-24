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

    create: (req, res)=>{
        res.render('productCreate')
    },

    store: (req, res)=>{
        let data= req.body;

        let product={
            image: data.image,
            title: data.title,
            artistName: data.artistName,
            userId: 1
        };

        db.Product.create(product)
            .then(()=>{
                return res.redirect('/')
            })
            .catch(error=>{
                console.log(error);
            })
    },

    destroy: (req, res)=>{
        let productDelete= req.params.id;
        
        db.Product.destroy({
            where:[
                {id: productDelete}
            ]
        })
            .then(()=>{
                return res.redirect('/')
            })
            .catch(error=>{
                console.log(error);
            })
    }
}

module.exports= productController;