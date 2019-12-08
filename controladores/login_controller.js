const sequelize = require ('sequelize');
const db = require ('./models/model.js');

const loginController = (req, res) => {

    const usuario = req.body

    const usuarioExistente = db.usuario.find( usuarioExistente => 
        usuarioExistente.nombre === usuario.nombre && usuarioExistente.contrasenya === usuario.contrasenya);
    
    if (usuarioExistente) {
 
    // ------------  HACE FALTA AÑADIR TOKEN -------------

        res
        .status(200)
        .json( {message: `Login Valido`})
    }
    else {
        res
        .status(400)
        .json( {message: `Login Invalido`})
    }
}

module.exports = loginController;
