// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');
router.get('/', productsController.index); 
router.get("/cart", productsController.cart);
router.get("/productdetail/:id?", productsController.detail)
router.get("/productform", productsController.create)
router.get("/shop", productsController.shop)
/*** GET ALL PRODUCTS ***/ 


/*** CREATE ONE PRODUCT ***/ 
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
