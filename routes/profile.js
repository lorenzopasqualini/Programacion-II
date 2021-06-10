var express = require('express');
var router = express.Router();
const profileController= require('../controllers/profileController');

router.get('/:id', profileController.profile);

router.get('/:id/edit', profileController.edit);
router.post('/:id/update', profileController.update);

module.exports = router;