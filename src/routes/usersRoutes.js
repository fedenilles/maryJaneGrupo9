const express = require('express');
const router = express.Router();

/* Middlewares */
const validations = require('../middleware/validateRegisterMiddleware');
const uploadFile = require('../middleware/multerMiddleware');
/* const userLoggedMiddleware = require('../middleware/userLoggedMiddleware'); */
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

/* router.use(userLoggedMiddleware); */


router.get("/login", guestMiddleware, usersController.login);

// Procesar el login
router.post('/login', usersController.loginProcess);

router.get("/register", guestMiddleware, usersController.register); 

router.post('/register', uploadFile.single('imagenPerfil'), validations, usersController.userRegister);

module.exports = router;