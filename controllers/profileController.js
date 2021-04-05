const profileController={
    profile: (req, res)=> res.render('profile'),

    edit: (req, res)=> res.render('profile-edit'),
}

module.exports= profileController;