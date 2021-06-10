const db= require('../database/models');
const brcrypt= require('bcryptjs');

const profileController={

    profile: (req,res)=>{
        let id= req.params.id;
        db.User.findByPk(id)
            .then(data=>{
                return res.render('profile', {user:data})
            })
            .catch(error=>{
                console.log(error);
            })
    },

    edit: (req,res)=> {

        let userId= req.params.userId;
        if(userId != req.session.user.id){
            return res.redirect('/profileEdit/${req.session.user.id}')
        } else {
            db.User.findByPk(id)
            .then(data=>{
                return res.render('profileEdit', {user:data})
            })
            .catch(error=>{
                console.log(error);
            })
        }
    },

    update: (req,res)=>{

        let user={
            userName: req.body.userName,
            email: req.body.email,
            password: '',
        };

        if(req.body.password == ''){
            user.password= req.session.user.password
        } else {
            user.password= brcrypt.hashSync(req.body.password, 10)
        };

        db.User.update(user, {
            where:{id: req.session.user.id}
        })
            .then(id=>{
                user.id= req.session.user.id;
                req.session.user= user;
                return res.redirect('/profile')
            })
            .catch(error=>{
                console.log(error);
            })
    }
}

module.exports= profileController;