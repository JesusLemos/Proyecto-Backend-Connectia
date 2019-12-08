const sequelize = require ('sequelize');
// const db = require ('./models/model.js');

const salesController = (req, res) => {

    const db = [{nombre:'lenovo', ventas: 5}, {nombre:'acer', ventas: 7}, {nombre:'asus', ventas: 3}]

    const topVentas = db.ventas.filter( venta => venta.ventas > 4)

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