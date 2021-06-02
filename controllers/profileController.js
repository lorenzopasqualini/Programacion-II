const db= require('../database/models');

const profileController={

    profile: (req, res)=>{
        let id= req.params.id;
        db.User.findByPk(id)
            .then(data=>{
                return res.render('profile', {user: data})
            })
            .catch(error=>{
                console.log(error);
            })
    },

    edit: (req, res)=> res.render('profileEdit'),

}

module.exports= profileController;