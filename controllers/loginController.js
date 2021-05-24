const db= require('../database/models');
const brcrypt= require('bcryptjs');

const loginController={
    login: (req, res)=>{
        return res.render('login')
    },

    log: (req, res)=>{
        db.User.findOne({
            where: [{email: req.body.email}]
        })
            .then((user)=>{
                req.session.user= user;

                if(req.body.rememberme != undefined){
                    res.cookie('userId', user.id, {maxAge: 1000*60*5})   
                }

                return res.redirect('/');
            })
            .catch(error=>{
                console.log(error);
            })
    },

    logout: (req, res)=>{
        req.session.destroy();

        res.clearCookie('userId');

        return res.redirect('/');
    }
}

module.exports= loginController;