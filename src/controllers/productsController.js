const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../db/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

/* const readJsonFile = (path) =>{
	return JSON.parse(fs.readFileSync(path, 'utf-8'));
}
 */

const controller = {
	/* productGet */
	shop: (req, res) => {
		return res.render("shop", { products })
	},
	// Create - Form to create
	create: (req, res) => {

		return res.render("productFormCreate")
	},
	//  Get Id Detail - Detail from one product
	detail: (req, res) => {

		id = req.params.id;
		const product = products.find(product => product.id == id)
		return res.render("productdetail", { product, products })
	},
	// POST Create -  Method to store
	store: (req, res) => {
		const producto = {
			id: products[products.length - 1].id + 1,
			product: req.body.product,
			category:"",
			name: req.body.name,
			price: req.body.price,
			description: req.body.description,
			image: req.file?.filename || "img.png",
		}
	

		products.push(producto);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		return res.redirect("/products")
	},

	// Update - Form to edit
	edit: (req, res) => {
		const id = req.params.id;
		const product = products.find(product => product.id == id)
		return res.render("productFormEdit", { product })
	},
	//  PUT Update - Method to update
	update: (req, res) => {
		for (let i = 0; i < products.length; i++) {
			if (products[i].id == req.params.id) {
				products[i] = {
					...products[i],
					name: req.body.name,
					price: req.body.price,
					discount: req.body.discount,
					product: req.body.product,
					description: req.body.description,
					image: req.file?.filename || "default-image.png"
				}
			}
		};
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		return res.redirect("/products");
	},


	// Delete - Delete one product from DB
	destroy: (req, res) => {
		const productosFiltrados = products.filter(product => product.id != req.params.id);

		fs.writeFileSync(productsFilePath, JSON.stringify(productosFiltrados, null, 2));
		return res.redirect("/products");
	},

	cart: (req, res) => {
		return res.render("cart")
	},

};

module.exports = controller;

/* productDetail: (req, res) => {
	return res.render("productdetail")
},

productForm: (req, res) => {
	return res.render("productForm")
} */