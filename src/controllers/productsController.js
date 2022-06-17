const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../db/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
 
/* const readJsonFile = (path) =>{
	return JSON.parse(fs.readFileSync(path, 'utf-8'));
}
 */

const controller = {
	// Detail - Detail from one product
	detail: (req, res) => {
		
		id = req.params.id;
		const product = products.find(product => product.id == id)
		return res.render("productdetail", {product})
	},

	// Create - Form to create
	create: (req, res) => {
		
		return res.render("productFormCreate")
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const producto = {
			id: products[products.length -1].id + 1,
			product: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image: req.file?.filename || "default-image.png",	
		}
		
		products.push(producto);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		return res.redirect("/products")
	},

	// Update - Form to edit
	edit: (req, res) => {
		const id = req.params.id;
		const product = products.find(product => product.id == id)
		return res.render("productFormEdit", {product})
	},
	// Update - Method to update
	update: (req, res) => { 
			for(let i = 0; i < products.length; i++) {
				if(products[i].id == req.params.id){
					products[i] = {
						...products[i],
						product: req.body.name,
						price: req.body.price,
						discount: req.body.discount,
						category: req.body.category,
						description: req.body.description
						//image: req.file?.filename || "default-image.png"
					} 
				}
			};
			fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
			return res.redirect("/products");
	},


	// Delete - Delete one product from DB
	destroy : (req, res) => {
		return res.send("Producto borrado exitosamente")
	},
	shop: (req, res) => {
		return res.render("shop", {products})
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