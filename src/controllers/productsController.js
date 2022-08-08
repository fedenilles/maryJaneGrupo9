const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, or } = require("sequelize");

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
		const Family = await db.Family.findAll();
		const Category = await db.Category.findAll();
		return res.render("products/productFormCreate", { Category, Family });
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

		/* const productosFiltrados = products.filter(product => product.id != req.params.id);

		fs.writeFileSync(productsFilePath, JSON.stringify(productosFiltrados, null, 2));
		return res.redirect("/products"); */
	},

	cart: (req, res) => {
		return res.render("cart")
	},
	search: (req, res) => {
		console.log("que viene del search");
		console.log(req.query.mandarina);
		Product.findOne({
			include: [
				{ association: "Family" },
				{ association: "Category" }
			]
		}, {
			where: {
				[Op.like]: {
					name: "%" + req.query.mandarina + "%"
				},
				/* [Op.or]: [
					{
						[Op.like]: {
							name: "%" + req.body.search + "%"
						},
						[Op.like]: {
							description: "%" + req.body.search + "%"
						}
					}
				] */
				
					
				
			}
		}
		) 	.catch(error => res.send(error))
			.then((products) => {
				/* console.log(products); */
			return res.render("products/searchProducts", { products })
		})
		/* return res.render("products/shop") */
},

};

module.exports = controller;
