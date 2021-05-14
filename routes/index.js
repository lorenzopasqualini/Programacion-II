var express = require('express');
var router = express.Router();
const indexController= require('../controllers/indexController');

router.get('/', indexController.index);

// Buscador
router.get('/search-results', (req, res) => {
    let idSearch= req.params.id;
    return res.render('search-results');
},)

module.exports = router;