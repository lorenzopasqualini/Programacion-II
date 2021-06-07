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
        if(req.session.user != undefined){
            let data= req.body;

            let product={
                image: data.image,
                title: data.title,
                artistName: data.artistName,
                userId: req.session.user.id,
            };

            db.Product.create(product)
                .then(()=>{
                    return res.redirect('/')
                })
                .catch(error=>{
                    console.log(error);
                })
        }
        else{
            res.redirect('/');
        }
    },

    destroy: (req, res)=>{
        let productDelete= req.params.id;
        console.log(productDelete);
        
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
    },

    edit: (req,res)=> {

        let productId= req.params.id;
        if(productId != req.params.id){
            return res.redirect('/')
        } else {
            db.Product.findByPk(id)
            .then(data=>{
                return res.render('/product/${req.params.id}', {user:data})
            })
            .catch(error=>{
                console.log(error);
            })
        }
    },

    update: (req,res)=>{

        let product={
            image: '',
            title: req.body.title,
            artistName: req.body.artistName,
        };

        if(req.file == undefined){
            product.image= req.session.image
        } else {
            product.image= req.file.filename
        }

        db.Product.update(product, {
            where:{id: req.session.id}
        })
            .then(id=>{
                product.id= req.session.id;
                req.session.product= product;
                return res.redirect('/product')
            })
            .catch(error=>{
                console.log(error);
            })
    }
}

module.exports= productController;