const express = require('express');
const router = express.Router();

const ShopsController = require('../app/controllers/ShopsController');

router.get('/:Id', ShopsController.show);

module.exports = router;