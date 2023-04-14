const express = require('express');
const router = express.Router();

const ManageController = require('../app/controllers/ManageController');

router.get('/:slug', ManageController.show);

module.exports = router;