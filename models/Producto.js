'use strict';
module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define('Producto', {
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                notNull: { msg: "El campo es requerido" },
            }
        },

        popularidad: {
            type: DataTypes.INTEGER(3),
            allowNull: false,
            validate: {
                notNull: { msg: "El campo es requerido" },
            }
        },
        stock: {
            type: DataTypes.INTEGER(6),
            allowNull: false,
            validate: {
                notNull: { msg: "El campo es requerido" },
            }
        },

        precio: {
            type: DataTypes.FLOAT(6, 2),
            allowNull: false,
            validate: {
                notNull: { msg: "El campo es requerido" },
            }
        },

        descripcion: {
            type: DataTypes.STRING(1000),
            allowNull: false,
            validate: {
                notNull: { msg: "El campo es requerido" },
            }
        }
    });
    Producto.associate = models => {
        Producto.hasOne(models.Categoria);
        Producto.belongsToMany(models.Factura, {through: 'Factura_Producto'});
    };
    Producto.sync({ force: true }).catch(error =>
        console.error(`no se ha conectado a la base de datos`, error));

    return Producto;
};