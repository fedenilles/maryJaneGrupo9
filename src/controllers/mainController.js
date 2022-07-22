const res = require("express/lib/response");
const fs = require ("fs");
const path = require ("path");

const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { Console } = require("console");


const Product = db.Product;


const controller = {
	// Root - Show all products
	index: (req, res) => {
		Product.findAll()
		.then(function (products){
			return res.render("index", {products})
		})
		console.log(res.locals.isLogged)
	}

};

module.exports = controller;