const db = require('../../database/models');
const { Op } = db.sequelize;
const { QueryTypes } = require('sequelize');
const Product = db.Product;
const Family = db.Family;
const Category = db.Category;



const controller = {

    list: async (req, res) => {
        const allProducts = await Product.findAll({
            attributes: ['id', ['name', 'Nombre'], ['price', 'Precio'], ['description', 'Descripcion'], [db.sequelize.fn('concat', req.protocol, "://", req.get('host'), '/api/products/', db.sequelize.col('product.id')), "URL"]],
        })
        const qProduct = await db.sequelize.query("SELECT product_families.name, COUNT(products.name) FROM products INNER JOIN product_families ON families_id = product_families.id GROUP BY product_families.name",
            { type: QueryTypes.SHOWTABLES }/* ver para que sirve?¿  */);



        return res.status(200).json({
            meta: {
                Status: res.statusCode,
                "Total productos": allProducts.length,
                'Productos por Categaoria': qProduct

            },
            data: allProducts
        })
    }


    /*     detail: (req, res) => {
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
        } */
}
module.exports = controller;
