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
		return res.render("users/login")
	},
	profile: (req,res) => {
		return res.render("users/user_profile")
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
                    console.log(req.body.name);
					return res.redirect("/users/login");
                    
				})
		}
	},
	loginProcess: (req, res) => {
	    User.findOne({
			where: {
				email: req.body.email
			}
		})
		.then(function (userToLogin){
            if (userToLogin) {
                let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
                if (isOkThePassword) {
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;
    
    
                    if (req.body.remember_user) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
                    }
    
                    return res.redirect('/');
                }
                return res.render('users/login', {
                    errors: {
                        password: {
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
        })
        
	},

};

module.exports = controller;
