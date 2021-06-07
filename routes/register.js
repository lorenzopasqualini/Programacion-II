var express = require('express');
var router = express.Router();
const registerController= require('../controllers/registerController');

let multer= require('multer');
let path= require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../public/images/avatar'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalName))
    }
  })

  var upload = multer({ storage: storage })

router.get('/', registerController.register);
router.post('/', upload.single('avatar'), registerController.store);

module.exports = router;