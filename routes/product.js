var express = require('express');
var router = express.Router();
const productController= require('../controllers/productController');

let multer= require('multer');
let path= require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'public/images/products'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalName))
    }
  })

  var upload = multer({ storage: storage })

router.get('/id/:id', productController.product);

router.get('/create', productController.create);
router.post('/store', upload.single('image') , productController.store);

router.post('/destroy/:id', productController.destroy);

router.get('/id/:id/edit', productController.edit);
router.post('/id/:id/update', productController.update);

module.exports = router;