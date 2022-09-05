const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const apiUsersController = require('../../controllers/API/apiUsersControllers');


router.get("/",apiUsersController.list); 
router.get("/:id",apiUsersController.detail);
 


module.exports = router;