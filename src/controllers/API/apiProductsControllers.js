const db = require('../../database/models');
const { Op } = db.sequelize;
const { QueryTypes } = require('sequelize');
const { json } = require('body-parser');

const Product = db.Product;
const Family = db.Family;
const Category = db.Category;



const controller = {

    list: async (req, res) => {
        const allProducts = await Product.findAll({
            include: [
                {
                    association: "Family",
                    attributes: [['name', 'Nombre']]
                }
            ],
            attributes: [
                'id',
                ['name', 'Nombre'],
                ['price', 'Precio'],
                ['description', 'Descripcion'],
                [db.sequelize.fn('concat', req.protocol, "://", req.get('host'), '/api/products/', db.sequelize.col('product.id')), "URL"],
            ],

        })
        const qProduct = await db.sequelize.query("SELECT product_families.name as Familia, COUNT(products.name) as Cantidad FROM products INNER JOIN product_families ON families_id = product_families.id GROUP BY product_families.name",
            { type: QueryTypes.SELECT });



        return res.status(200).json({
            meta: {
                Status: res.statusCode,
                "Total productos": allProducts.length,
                'Productos por Categoria': qProduct

            },
            data: allProducts
        })
    },


    detail: async (req, res) => {
        const oneProduct = await Product.findByPk(req.params.id, {
            include: [
                { association: "Family" },
                { association: "Category" }
            ]
        })
        return res.status(200).json({
            meta: {
                Status: 200,
                URL: req.protocol + '://' + req.get("host") + '/api/products/' + oneProduct.id
            },

            data: {
                Id: oneProduct.id,
                Nombre: oneProduct.name,
                Price: oneProduct.price,
                Descripcion: oneProduct.description,
                Familia: [oneProduct.Family.name],
                Catagoria: [oneProduct.Category.name],
                Image: req.protocol + '://' + req.get("host") + '/img/products/' + oneProduct.imagen,
                /* 'Fecha de Alta': (user.createdAt.getDate() + 1) + '/' + (user.createdAt.getMonth() + 1) + '/' + user.createdAt.getFullYear() */
            }


        })

    }
}

module.exports = controller;
