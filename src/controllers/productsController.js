const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../db/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
	index: (req, res) => {
		id = req.params.id;
		return res.render("index", {products})
	},
	// Detail - Detail from one product
	detail: (req, res) => {
		id = req.params.id;
		const product = products.find(product => product.id == id)
		return res.render("productdetail", {product})
	},

	// Create - Form to create
	create: (req, res) => {
		
		return res.render("productForm")
	},
	
	// Create -  Method to store
	store: (req, res) => {
		return res.send("Producto agreagdo correctamente")
	},

	// Update - Form to edit
	edit: (req, res) => {
		const id = req.params.id;
		const product = products.find(product => product.id == id)
		return res.render("product-edit-form", {product})
	},
	// Update - Method to update
	update: (req, res) => {
		return res.send("Producto editado exitosamente")
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		return res.send("Producto borrado exitosamente")
	},
	shop: (req, res) => {
        return res.render("shop", )
    },
	cart: (req, res) => {
        return res.render("cart")
    },

    productDetail: (req, res) => {
        return res.render("productdetail")
    },

    productForm: (req, res) => {
        return res.render("productForm")
    }
};

module.exports = controller;