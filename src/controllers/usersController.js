const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');

const {validationResult} = require('express-validator');

const usersFilePath = path.join(__dirname, '../db/users.json');

const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const User = require('../database/models/User');

const controller = {
    login: (req, res) => {
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
        }else{
            const user = {
                id: users[users.length - 1].id + 1,
                first_name: req.body.name,
                last_name: req.body.apellido,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10),
                imagenPerfil: req.file.filename,
            }
            users.push(user);
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
		    return res.redirect("/users/login");
        }
    },
    loginProcess: (req, res) => {
		let userToLogin = User.findByField('email', req.body.email);
		
		if(userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
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
