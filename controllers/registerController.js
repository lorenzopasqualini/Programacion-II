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
        let errors={};

        if(req.body.email == ''){
            errors.message= 'E-Mail está vacío';
            res.locals.error= errors;
            return res.render('register')
        } else if(req.body.password == '') {
            errors.message= 'Contraseña está vacía';
            res.locals.error= errors;
        } else if(req.body.userName == '') {
            errors.message= 'Username está vacío';
            res.locals.error= errors;
            return res.render('register')
        } else if(req.body.password.length < 3) {
            errors.message= 'La contraseña debe tener al menos 3 caracteres';
            res.locals.error= errors;
            return res.render('register')
        } else {
            db.User.findOne({
                where: [{email: req.body.email}]
            })
                .then(user=>{
                    if(user != null){
                        errors.message= 'E-Mail ya registrado. Intenta con otro.';
                        res.locals.error= errors;
                        return res.render('register')
                    } else {
                        let user={
                            userName: req.body.userName,
                            email: req.body.email,
                            password: brcrypt.hashSync(req.body.password, 10)
                        };
                
                        db.User.create(user)
                            .then(()=>{
                                return res.redirect('/login')
                            })
                            .catch(err=>{console.log(err);})
                    }
                })
                .catch(err=>{console.log(err);})
        }
    }
}

module.exports= registerController;