var express = require('express');
var router = express.Router();
const profileController= require('../controllers/profileController');

router.get('/', profileController.profile);
router.get('/profile-edit', profileController.edit);

module.exports = router;