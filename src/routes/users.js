const express = require('express');
const router = express.Router();

const UsersController = require('../app/controllers/UsersController');

router.get('/:slug', UsersController.show);


module.exports = router;