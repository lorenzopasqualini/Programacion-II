var express = require('express');
var router = express.Router();
const productController= require('../controllers/productController');

router.get('/id/:id', productController.product);
router.get('/create', productController.create);
router.post('/store', productController.store);
router.post('/destroy', productController.destroy);

module.exports = router;