const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SitesController');

router.get('/:slug', siteController.index);
router.get('/', siteController.index);

module.exports = router;