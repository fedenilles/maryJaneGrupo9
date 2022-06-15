const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../db/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		id = req.params.id;
		return res.render("products", {products: products, id: id})
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
	}
};

module.exports = controller;