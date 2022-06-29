// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');
const uploadFile = require('../middleware/multerMiddleware');

/*** GET CART***/
router.get("/cart", productsController.cart);

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.shop) /* /products (GET) Listado de productos */

/*** SHOW CREATE FORM ***///lleva al formulario de creacion /products/create (GET) */
router.get('/create', productsController.create); 

/*** STORE PRODUCT FORM ***//*Acción de creación (a donde se envía el formulario)*/
router.post('/create',uploadFile.single('image'), productsController.store);  

/*** EDIT PRODUCT FORM ***/
router.get('/edit/:id', productsController.edit)
router.put('/:id', productsController.update);

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 

/*** SHOW PRODUCT DETAIL BY ID ***//* /products/:id (GET) Detalle de un producto particular */
router.get("/:id?", productsController.detail) 


module.exports = router;
