var express = require('express');
var router = express.Router();
const productController= require('../controllers/productController');
const profileController= require('../controllers/profileController');

router.get('/id/:id', productController.product);
router.get('/add', productController.add);
router.get('/profile', profileController.profile);
router.get('/profile/edit', profileController.edit);

module.exports = router;