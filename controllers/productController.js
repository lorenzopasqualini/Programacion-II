const db= require('../database/models');

const productController={
    product: (req,res)=>{
        let id= req.params.id;

        let product= db.Product.findByPk(id, {
            include: [
                {association: 'user'},
                {association: 'comentario',
                include:[
                    {association: 'user'}
                ]}
            ]
        })
            .then(data=>{
                return res.render('product', {product:data})
            })
            .catch(err=>{console.log(err);})
    },

    create: (req,res)=>{
        res.render('productCreate')
    },

    store: (req,res)=>{
        let errors={};
        if(req.body.title == ''){
            errors.message= 'El título es obligatorio';
            res.locals.errors= errors;
            return res.render('productCreate')
        } else if(req.body.artistName == '') {
            errors.message= 'El nombre del artista es obligatorio';
            res.locals.errors= errors;
            return res.render('productCreate')
        } else {
            let product={
                image: req.file.filename,
                title: req.body.title,
                artistName: req.body.artistName,
                userId: req.session.user.id,
            };

            db.Product.create(product)
                .then(()=>{
                    return res.redirect('/')
                })
                .catch(err=>{console.log(err);})
        }
    },

    destroy: (req,res)=>{
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
            .catch(err=>{console.log(err);})
    },

    edit: (req,res)=> {
        let productId= req.params.id;
        if(productId != req.params.id){
            return res.redirect('/')
        } else {
            db.Product.findByPk(id)
            .then(data=>{
                return res.redirect('/product/${req.params.id}', {user:data})
            })
            .catch(err=>{console.log(err);})
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
                return res.redirect('/')
            })
            .catch(err=>{console.log(err);})
    },

    comment: (req,res)=>{
        if(req.body.texto == ''){
            return res.redirect('/')
        } else {
            let comentario={
                texto: req.body.texto,
                userId: req.session.user.id,
                productsId: req.session.id,
            };

            db.Product.create(comentario)
                .then(()=>{
                    return res.redirect('/')
                })
                .catch(err=>{console.log(err);})
        }
    }
}

module.exports= productController;