module.exports = (sequelize, dataTypes) => {
    let alias = 'Permissions';
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
        tableName: "user_permissions",
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deletedAt',
		paranoid: true
    }
    const Permissions = sequelize.define(alias, cols, config);

    Permissions.associate = function(models) {
        Permissions.hasMany(models.User, {
           as: "User",
           foreignKey: "user_id"
        })
    }

    return Permissions
};