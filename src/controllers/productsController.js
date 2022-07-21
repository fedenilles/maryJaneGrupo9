const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const Product = db.Product;
const Family = db.Family;
const Category = db.Category;

const controller = {
	/* productGet */
	shop: (req, res) => {
		return res.render("products/shop", { Product })
	},
	// Create - Form to create
	create: async (req, res) => {
		const Family = await db.Family.findAll();
		const Category = await db.Category.findAll();
            return res.render("products/productFormCreate", {Category, Family});
	},
	// POST Create -  Method to store
	store: (req, res) => {
		Product.create({
			families_id: req.body.family_id,
			categories_Id: req.body.category_Id,
			name: req.body.name,
			price: req.body.price,
			description: req.body.description,
			image: req.file?.filename,
		})
		.then(function() {
			return res.redirect("/products");
		})
	},
	//  Get Id Detail - Detail from one product
	detail: (req, res) => {

		/* id = req.params.id;
		const product = products.find(product => product.id == id)
		return res.render("products/productdetail", { product, Product }) */
	},
	
	// Update - Form to edit
	edit: (req, res) => {
		/* const id = req.params.id;
		const product = products.find(product => product.id == id)
		return res.render("products/productFormEdit", { product }) */
	},
	//  PUT Update - Method to update
	update: (req, res) => {
		/* for (let i = 0; i < products.length; i++) {
			if (products[i].id == req.params.id) {
				products[i] = {
					...products[i],
					name: req.body.name,
					price: req.body.price,
					category: req.body.category,
					discount: req.body.discount,
					product: req.body.product,
					description: req.body.description,
					image: req.file?.filename || "img.png",
				}
			}
		};
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		return res.redirect("/products"); */
	},


	// Delete - Delete one product from DB
	destroy: (req, res) => {
		/* const productosFiltrados = products.filter(product => product.id != req.params.id);

		fs.writeFileSync(productsFilePath, JSON.stringify(productosFiltrados, null, 2));
		return res.redirect("/products"); */
	},

	cart: (req, res) => {
		return res.render("cart")
	},

};

module.exports = controller;
