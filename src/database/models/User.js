module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
		last_name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
		imagenPerfil: {
            type: dataTypes.STRING(255),
            allowNull: false,
			defaultValue: "img.png"
        },
        
    };
    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deletedAt',
		paranoid: true
    }
    const Users = sequelize.define(alias, cols, config);

    Users.associate = function(models) {
        Users.belongsTo(models.Permissions, {
           as: "Permissions",
           foreignKey: "user_id"
        })
    }

    return Users
};