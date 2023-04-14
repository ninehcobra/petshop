const express = require('express');
const router = express.Router();

const productsController = require('../app/controllers/ProductsController');


router.get('/:Id', productsController.show);


module.exports = router;