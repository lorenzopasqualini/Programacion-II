const db= require('../database/models');
const op = db.Sequelize.Op;

const indexController={
    index: (req,res)=>{
        db.Product.findAll()
            .then((data)=>{
                return res.render('index', {product: data})
            })
            .catch(err=>{console.log(err);})
    },

    search: (req,res)=>{
        let search= req.query.search;

        db.Product.findAll({
            where:[
                {title:{[op.like]: '%' + search + '%'}}
            ]
        })
            .then(data=>{
                return res.render('search',{search:data});
            })
            .catch(err=>{console.log(err);})
    }
}

module.exports= indexController;