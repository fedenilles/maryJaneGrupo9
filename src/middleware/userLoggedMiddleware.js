const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const User = db.User;
const Permissions = db.Permissions;


function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.userEmail;
	/* let userFromCookie = User.findByField('email', emailInCookie); */
	let userFromCookie = User.findOne({
		where:{
			email:"emailInCookie"
		}
	});

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	next();
}

module.exports = userLoggedMiddleware;