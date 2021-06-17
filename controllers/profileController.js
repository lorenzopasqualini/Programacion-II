const db= require('../database/models');
const brcrypt= require('bcryptjs');

const profileController={

    profile: (req,res)=>{
        let id= req.params.id;

        let user= db.User.findByPk(id, {
            include: [
                {association: 'product'}
            ]
        })
            .then(data=>{
                return res.render('profile', {user:data})
            })
            .catch(err=>{console.log(err);})
    },

    edit: (req,res)=> {
        let userId= req.params.id;
        if(userId != req.session.user.id){
            return res.redirect('/profile/${req.session.user.id}/edit')
        } else {
            db.User.findByPk(userId)
            .then(data=>{
                return res.render('profileEdit', {user:data})
            })
            .catch(err=>{console.log(err);})
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
                return res.redirect('/')
            })
            .catch(err=>{console.log(err);})
    }
}

module.exports= profileController;