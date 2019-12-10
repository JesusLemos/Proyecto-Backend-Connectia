'User strict';
module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
        nombre: {
            type: DataTypes.STRING(20),
            allowNull: false,
            validate: {
              notNull: { msg: "El campo es requerido" },
            }
        }
    });
    Categoria.sync({ force: true }).catch(error =>
    console.error(`no se conecta a la base de datos`, error)
    );
    return Categoria;
};