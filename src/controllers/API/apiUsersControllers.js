const db = require('../../database/models');
const { Op } = db.sequelize;
const User = db.User;



const controller = {

    list: (req, res) => {
        User
            .findAll({
                attributes: ['id', ['first_name', 'Nombre'], ['last_name', 'Apellido'], ['email', 'Email'], [db.sequelize.fn('concat', req.protocol, "://", req.get('host'), '/api/users/', db.sequelize.col('user.id')), "URL"]],
            })
            /*https://sequelize.org/docs/v6/core-concepts/raw-queries/*/

            .then(users => {
                return res.status(200).json({
                    meta: {
                        Status: res.statusCode,
                        "Total usuarios": users.length,
                    },
                    data: users
                })
            })
    },

    detail: (req, res) => {
        User.findByPk(req.params.id)
            .then(user => {
                let respuesta = {
                    meta: {
                        Status: 200,
                        URL: req.protocol + '://' + req.get("host") + '/api/users/' + user.id
                    },

                    data: {
                        Id: user.id,
                        'Nombre Completo': user.first_name + " " + user.last_name,
                        Email: user.email,
                        Avatar: req.protocol + '://' + req.get("host") + '/img/users/' + user.imagenPerfil,
                        'Fecha de Alta': (user.createdAt.getDate() + 1) + '/' + (user.createdAt.getMonth() + 1) + '/' + user.createdAt.getFullYear()
                    }

                }
                res.json(respuesta);
            });
    }
}
module.exports = controller;
