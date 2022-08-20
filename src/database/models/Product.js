module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; 
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
        },
        price: {
            type: dataTypes.DECIMAL(7, 2).UNSIGNED,
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING(255),
            allowNull: false,
            defaultValue: "img.png"
        },
        categories_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
        families_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
    };
    let config = {
        timestamps: true,
        paranoid: false
    }
    const Product = sequelize.define(alias,cols,config);

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
           as: "Category",
           foreignKey: "categories_Id"
        });    
        Product.belongsTo(models.Family, {   
            as: "Family",   
            foreignKey: "families_id",
        });
    }
    return Product
};