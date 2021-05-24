var express = require('express');
var router = express.Router();
const loginController= require('../controllers/loginController');

router.get('/', loginController.login);
router.post('/', loginController.log);
router.post('/logout', loginController.logout);

module.exports = router;