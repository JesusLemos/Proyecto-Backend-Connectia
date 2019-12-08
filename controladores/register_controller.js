const sequelize = require ('sequelize');
const db = require ('./models/model.js')

const registerController = (req, res) => {
    
    const usuario = req.body

    //Contraseña mínimo de 8 carácteres
    const longitudContrasenya = /.{8,}/

    if (!longitudContrasenya.test(usuario.contrasenya)) {
        return res 
        .status(400)
        .json( {message: `La contraseña debe tener mínimo 8 carácteres`})
    }

    //Comprobar que el usuario no existe
    const usuarioExiste = db.usuario.some(
        usuarioExiste => usuarioExiste.email === usuario.email
    )

    if (usuarioExiste) {
        return res
        .status(400)
        .json( {message: `Usuario ya registrado`})
    }

}