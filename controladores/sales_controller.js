const db = require ('../models');
const sequelize = require ('sequelize');
// const sequelize = new Sequelize();
async function salesController (req, res) {

    try{

    const topVentas =  await db.Pedido.findAll({
       
        attributes: ['total',[sequelize.fn('SUM', sequelize.col('Pedido.cantidad')), 'top_ventas']]
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
}catch(error){
    console.log(error)
}
}

module.exports = salesController;