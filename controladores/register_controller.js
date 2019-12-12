const db = require ('../models');
const {contrasenyaConHash,
    compararContrasenya,
    crearJWT,
    decodeJWT} = require('../servicios/autentificacion')
async function registerController (req, res) {
    try{
        compararContrasenya(req.body.contrasenya);
        // req.body.contrasenya = await contrasenyaConHash(req.body.contrasenya)
        const usuario = await db.Usuario.create(req.body);
        res.status(200).json({ message: 'Registro completado', usuario: usuario});
    }catch (error) {
        console.error(error)
       
        if (error.message === 'compararContrasenya') {
            return res.status(400).json({
              message: 'invalid password',
              error: error,
            });
          }
          if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({
              message: 'register invalid',
              error: error.errors[0].message,
            });
          }
          if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({
              message: 'register invalid',
              error: error.errors[0].message,
            });
          }
          res.status(500).json({
            message: 'register not done',
            error: error,
          });
        }
    
    }

    


module.exports = registerController;