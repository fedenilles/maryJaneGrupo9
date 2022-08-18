const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().isLength(8).withMessage('Tienes que escribir una contraseña'),
]