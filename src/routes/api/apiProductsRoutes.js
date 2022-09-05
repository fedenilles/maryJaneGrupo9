const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const apiProductsController = require('../../controllers/API/apiProductsControllers');


router.get("/",apiProductsController.list); 
/* router.get("/:id",apiProductsController.detail);  */



module.exports = router;