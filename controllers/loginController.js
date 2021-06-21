const db= require('../database/models');
const bcrypt= require('bcryptjs');

const loginController={
    login: (req, res)=>{
        if(req.session.user != undefined){
            return res.redirect('/')
        } else {
            return res.render('login')
        }
    },

    log: (req, res)=>{
        let errors= {};

        if(req.body.email == ''){
            errors.message= 'E-Mail está vacío';
            res.locals.error= errors;
            return res.render('login')
        } else if(req.body.password == '') {
            errors.message= 'Contraseña está vacía';
            res.locals.error= errors;
            return res.render('login')
        } else {
            db.User.findOne({
                where: [{email: req.body.email}]
            })
                .then(user=>{
                    if(user == null){
                        errors.message= 'E-Mail no está registrado';
                        res.locals.error= errors;
                        return res.render('login')
                    } else if(bcrypt.compareSync(req.body.password, user.password) == false){
                        errors.message= "Contraseña incorrecta";
                        res.locals.error= errors;
                        return res.render('login')
                    } else {
                        req.session.user= user;
                        if(req.body.rememberme != undefined){
                            res.cookie('userId', user.id, {maxAge: 1000*60*20})   
                        }
                        return res.redirect('/');
                    }
                })
                .catch(err=>{console.log(err);})
        }
    },

    logout: (req, res)=>{
        req.session.destroy();

        res.clearCookie('userId');

        return res.redirect('/');
    }
}

module.exports= loginController;