const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");


const Product = db.Product;
const Family = db.Family;
const Category = db.Category;

const controller = {
	/* productGet */
	shop: (req, res) => {
		Product.findAll()
			.then(function (products) {
				return res.render("products/shop", { products })
			})

	},

	// Create - Form to create
	create: async (req, res) => {
		const productFamily = await Family.findAll();
		const productCategory = await Category.findAll();
		return res.render("products/productFormCreate", { productCategory, productFamily });
	},

	// POST Create -  Method to store
	store: (req, res) => {
		db.Product.create({
			families_id: req.body.family_id,
			categories_Id: req.body.category_Id,
			name: req.body.name,
			price: req.body.price,
			description: req.body.description,
			imagen: req.file?.filename,
		})
			.then(function () {
				return res.redirect("/products");
			})
	},

	//  Get Id Detail - Detail from one product
	detail: async (req, res) => {
		const product = await Product.findByPk(req.params.id, {
			include: [
				{ association: "Family" },
				{ association: "Category" }
			]
		})
		const allProducts = await Product.findAll()
		return res.render('products/productdetail', { product, allProducts });

	},

	// Update - Form to edit
	edit: (req, res) => {
		Product.findByPk(req.params.id, {
			include: [
				{ association: "Family" },
				{ association: "Category" }
			]
		})
			.then((product) => {
				return res.render("products/productFormEdit", { product })
			}
			)

	},
	//  PUT Update - Method to update
	update: (req, res) => {
		const id = req.params.id
		Product.update({
			families_id: req.body.family_id,
			categories_Id: req.body.category_Id,
			name: req.body.name,
			price: req.body.price,
			description: req.body.description,
			imagen: req.file?.filename,
		}, {
			where: {
				id
			}
		})
			.then(function () {
				return res.redirect("/products")
			})
	},


	// Delete - Delete one product from DB
	destroy: (req, res) => {

		const id = req.params.id
		Product.destroy({ where: { id } })
			.then(function () {
				return res.redirect("/products")
			})
	},

	cart: (req, res) => {
		return res.render("cart")
	},
	search: (req, res) => {
		//console.log("que viene del search:? " + req.query.searchItem);
		//https://sequelize.org/v5/manual/models-usage.html ver apartado Eager loading
		Product.findAll({
			include: [
				{ association: "Family" },
				{ association: "Category" }
			],
			where: {
				[Op.or]: [
					{
						'$Product.name$': { [Op.like]: "%" + req.query.searchItem + "%" }
					},
					{
						'$Family.name$': { [Op.like]: "%" + req.query.searchItem + "%" }
					},
					{
						'$Category.name$': { [Op.like]: "%" + req.query.searchItem + "%" }
					}
				]
			},
			offset: 1,
			limit: 100
		})
			.catch(error => res.send(error))
			.then((products) => {
				/* console.log(products); */
				return res.render("products/searchProducts", { products })
			})
	}


};

module.exports = controller;
