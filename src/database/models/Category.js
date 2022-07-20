module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    };
    let config = {
        tableName: "product_catagories",
		paranoid: true
    }
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models) {
        Category.hasMany(models.Product, {
           as: "Product",
           foreignKey: "categories_Id"
        })
    }

    return Category
};