const express = require("express");
const router =express.Router();
const mainController=require("../controllers/mainController");

router.get("/", mainController.index); 
router.get("/login", mainController.login);
router.get("/register", mainController.register); 
router.get("/cart", mainController.cart);
router.get("/productdetail/:id?", mainController.productDetail)
router.get("/productform", mainController.productForm)
router.get("/shop", mainController.shop)

module.exports=router;
