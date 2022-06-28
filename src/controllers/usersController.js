const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../db/users.json');

const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    login: (req, res) => {
        return res.render("users/login")
    },
    register: (req, res) => {
        return res.render("users/register")
    },




};

module.exports = controller;
