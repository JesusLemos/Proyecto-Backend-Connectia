'use strict';
module.exports = (sequelize, DataTypes) => {
    const Provincia = sequelize.define('Provincia', {
        nombre: {
            type: DataTypes.STRING(20),
            allowNull: false,
            validate: {
                notNull: { msg: "El campo es requerido" },
            }
        },

        pais: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "El campo es requerido" },
            }
        }
    });
    Provincia.sync({ force: true }).catch(error =>
        console.error(`no se ha conectado a la base de datos`, error));

    return Provincia;
}