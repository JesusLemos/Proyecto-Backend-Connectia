const db = require ('../models');

async function salesController (req, res) {

    const topVentas = db.Pedido.findAll( {
        
    })

    if(topVentas) {
        res
        .status(200)
        .send(topVentas)
    }
    else {
        res
        .status(400)
        .json( {message: `No se ha encontrado ninguo`})
    }
    
}

module.exports = salesController;