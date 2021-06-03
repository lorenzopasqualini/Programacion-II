var express = require('express');
var router = express.Router();
const profileController= require('../controllers/profileController');

router.get('/id/:id', profileController.profile);
router.get('/id/:id/edit', profileController.edit);

module.exports = router;