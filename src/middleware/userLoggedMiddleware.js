const db = require('../database/models');
const { Op } = db.sequelize; 
const User = db.User;
const Permissions = db.Permissions;


function userLoggedMiddleware(req, res, next) {
	/* res.session.locals.isLogged = false;
	console.log("UserEmail:")
	console.log(req.cookies.userEmail)

	if (!req.cookies.userEmail){ return res.render("users/login") }

	let emailInCookie = req.cookies.userEmail;
	console.log("emailInCookie:")
	console.log(emailInCookie)
    
	let userFromCookie = User.findOne({
        where: {
			email: "emailInCookie@hotmail.com"
		}
	})
	
	if (userFromCookie.email == req.cookies.userEmail) {
		req.session.userLogged = userFromCookie ;
	}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
		
	}
 
	
	next();*/
}

module.exports = userLoggedMiddleware;