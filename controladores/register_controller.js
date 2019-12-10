const db = require ('../models/index');

async function registerController (req, res) {
    try{
        const usuario = await db.Usuario.create(req.body);
        console.log('Usuario: s',usuario)
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