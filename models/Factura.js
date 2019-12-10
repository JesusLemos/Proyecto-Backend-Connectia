'use strict';
module.exports = (sequelize, DataTypes) => {
    const Factura = sequelize.define('Factura', {
        total: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    });

    Factura.associate = (models) => {
        Factura.belongsToMany(models.Producto, {through: 'Factura_Producto'});
        
    };

    Factura.sync({ force: true }).catch(error =>
        console.error(`no se ha conectado a la base de datos`, error));

    return Factura;
}