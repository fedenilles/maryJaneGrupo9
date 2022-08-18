const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('name').notEmpty().isLength(5).withMessage('Tienes que escribir el nombre del producto'),
    body('description').isLength(20).withMessage('Tienes que escribir una descripcion de minimo 20 caracteres'),
	body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', 'jpeg' ,'.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]