var express = require('express');
var router = express.Router();
const profileController= require('../controllers/profileController');

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

router.get('/user/:id', profileController.profile);

router.get('/user/:id/edit', profileController.edit);
router.post('/user/:id/update', upload.single('avatar'), profileController.update);

module.exports = router;