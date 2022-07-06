const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');

const {validationResult} = require('express-validator');

const usersFilePath = path.join(__dirname, '../db/users.json');

const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

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

        /* let userInDB = users.findByField('email', req.body.email);

        if (userInDB) {
            return res.render('users/register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            });
        } */

        /* let newUser = {
			id: this.generateId(),
			...userData
		} */
/* 		allUsers.push(newUser);
		fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null,  ' ')); */

        

        /* let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            imagenPerfil: req.file.filename
        } */
        

    },




};

module.exports = controller;
