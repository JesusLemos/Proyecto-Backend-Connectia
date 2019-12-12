const db = require ('../models');

async function registerController (req, res) {
    try{
        const usuario = await db.Usuario.create(req.body);
        res.status(200).json({ message: 'Registro completado', usuario: usuario})
    }catch (error) {
        console.error(error)
        res.status(400).json({
            message: 'register not done',
            error: error,
          });
        
    }

    

}
module.exports = registerController;