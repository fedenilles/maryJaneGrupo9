// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');

// ************ Controller Require ************
const productsController = require('../controllers/productsController');
router.get('/', productsController.index); 
router.get("/cart", productsController.cart);
router.get("/productdetail/:id?", productsController.detail) /* /products/:id (GET) Detalle de un producto particular */
router.get("/productform", productsController.create); //lleva al formulario de creacion /products/create (GET) Formulario de creación de productos*/
router.post('/', productsController.store);  /*Acción de creación (a donde se envía el formulario)*/
router.get("/shop", productsController.shop) /* /products (GET) Listado de productos */
/*** GET ALL PRODUCTS ***/ 

/* 4. /products (POST) editar el form y poner los value
Acción de creación (a donde se envía el formulario)
5. /products/:id/edit (GET)
Formulario de edición de productos
6. /products/:id (PUT)
Acción de edición (a donde se envía el formulario):
7. /products/:id (DELETE)
Acción de borrado */

/*** EDIT ONE PRODUCT ***/ 
/* router.get('/edit/:id', productsController.edit); 
router.put('/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
/* router.delete('/:id', productsController.destroy);  */

/*** CREATE ONE PRODUCT ---- instalar dependencias PUT Y DELETE MethodOverride---***/ 
/* router.get('/create/', productsController.create); 
router.post('/', productsController.store);  */


/*** GET ONE PRODUCT ***/ 
router.get('/product/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
/* router.put('/:id/edit', productsController.edit); 
router.put('/:id', productsController.update);  */


/*** DELETE ONE PRODUCT***/ 
/* router.delete('/:id', productsController.destroy);  */


module.exports = router;
