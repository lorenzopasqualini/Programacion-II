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
            password: brcrypt.hashSync(req.body.password, 10),
            avatar: req.file.filename
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
        } else if(req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpg'){
            errors.message= 'La foto de perfil debe ser un archivo JPG o PNG';
            res.locals.errors= errors;
            return res.render('register')
        } else {
            return res.render('register')
        }
    }
}

module.exports= registerController;