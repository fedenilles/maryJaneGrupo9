const res = require("express/lib/response");
const fs = require ("fs");
const path = require ("path");

const productsFilePath = path.join(__dirname, '../db/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
	// Root - Show all products
	index: (req, res) => {
		id = req.params.id;
		return res.render("index", {products})
	},

};

module.exports = controller;