const express = require('express');
const router = express.Router();

/* Middlewares */
const validations = require('../middleware/validateRegisterMiddleware');
const uploadFile = require('../middleware/multerMiddleware');

// ************ Controller Require ************
const usersController = require('../controllers/usersController');


router.get("/login", usersController.login);
router.get("/register", usersController.register); 

router.post('/register', uploadFile.single('imagenPerfil'), validations, usersController.userRegister);

module.exports = router;