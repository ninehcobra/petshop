const express = require('express');
const router = express.Router();


const LoginController = require('../app/controllers/LoginController');

router.get('/login', LoginController.index);
router.post('/login/auth', LoginController.auth);
router.get('/', LoginController.index);


module.exports = router;