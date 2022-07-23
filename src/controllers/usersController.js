const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const { Op } = db.sequelize; 
const { validationResult } = require('express-validator');

const User = db.User;
const Permissions = db.Permissions;

const controller = {
	login: (req, res) => {
		console.log(res)
		return res.render("users/login")
	},
	register: (req, res) => {
		return res.render("users/register")
	},
	userRegister: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		} else {
			User.create({
				first_name: req.body.name,
				last_name: req.body.apellido,
				email: req.body.email,
				password: bcryptjs.hashSync(req.body.password, 10),
				imagenPerfil: req.file.filename,
			})
				.then(function () {
					return res.redirect("/users/login");
				})
		}
	},
	loginProcess: (req, res) => {
		/* let userToLogin = User.findByField('email', req.body.email); */
		console.log("Veo el userToLogin:")
		console.log(req.body.email)
		let userToLogin = User.findOne({
			where: {
				email: req.body.email
			}
		})
		
		if (userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;


				if (req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
					console.log("Aca muestro lo que llega en el input mail:")
					console.log(req.body.email)
				}

				return res.redirect('/');
			}
			return res.render('users/login', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}

		return res.render('users/login', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
	},

};

module.exports = controller;
