module.exports = (sequelize, dataTypes) => {
    let alias = 'Family';
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
        tableName: "product_families",
		paranoid: true
    }
    const Family = sequelize.define(alias, cols, config);

    Family.associate = function(models) {
        Family.hasMany(models.Product, {
           as: "Product",
           foreignKey: "family_id"
        })
    }

    return Family
};