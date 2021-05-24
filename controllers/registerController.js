const db= require('../database/models');
const brcrypt= require('bcryptjs');

const registerController={
    register: (req, res)=>{
        return res.render('register')
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
    }
}

module.exports= registerController;