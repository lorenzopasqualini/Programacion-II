const db= require('../database/models');
const brcrypt= require('bcryptjs');

const registerController={
    register: (req, res)=>{
        if(req.session.user != undefined){
            return res.redirect('/')
        } else {
            return res.render('register')
        }
    },

    store: (req, res)=>{
        let user={
            userName: req.body.userName,
            email: req.body.email,
            password: brcrypt.hashSync(req.body.password, 10)
        };

        db.User.create(user)
            .then(()=>{
                return res.redirect('/login')
            })
            .catch(error=>{
                console.log(error);
            })

        let errors={};
        if(req.body.email || req.body.password == ''){
            errors.message= 'Hay campos obligatorios vacíos';
            res.locals.errors= errors;
            return res.render('register')
        } else {
            return res.render('register')
        }
    }
}

module.exports= registerController;