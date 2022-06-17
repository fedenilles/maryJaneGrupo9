// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET CART***/
router.get("/cart", productsController.cart);

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.shop) /* /products (GET) Listado de productos */

/*** SHOW CREATE FORM ***///lleva al formulario de creacion /products/create (GET) */
router.get("/create", productsController.create); 

/*** STORE PRODUCT FORM ***//*Acción de creación (a donde se envía el formulario)*/
router.post('/', productsController.store);  

/*** EDIT PRODUCT FORM ***/
router.get('/edit/:id', productsController.edit)
router.put('/:id', productsController.update);

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 

/*** SHOW PRODUCT DETAIL BY ID ***//* /products/:id (GET) Detalle de un producto particular */
router.get("/:id?", productsController.detail) 



/*** EDIT ONE PRODUCT ***/ 
/* router.get('/edit/:id', productsController.edit); 
router.put('/:id', productsController.update); 

/*** DELETE ONE PRODUCT***/ 
/* router.delete('/:id', productsController.destroy);  */

/*** CREATE ONE PRODUCT ---- instalar dependencias PUT Y DELETE MethodOverride---***/ 
/* router.get('/create/', productsController.create); 
router.post('/', productsController.store);  */

/*** GET ONE PRODUCT ***/ 
router.get('product/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
/* router.put('/:id/edit', productsController.edit); 
router.put('/:id', productsController.update);  */

/*** DELETE ONE PRODUCT***/ 
/* router.delete('/:id', productsController.destroy);  */


module.exports = router;
