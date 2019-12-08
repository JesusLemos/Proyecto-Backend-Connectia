const sequelize = require ('sequelize');

const priceController = (req, res) => {
    
    const db = [{nombre:'lenovo', precio: 5}, {nombre:'acer', precio: 7}, {nombre:'asus', precio: 3}]

    const vAscendente = db.precio

    vAscendente.sort(function(a,b){return a - b;})

    if(vAscendente) {
        res
        .status(200)
        .send(vAscendente)
    }
    else{
        res
        .status(400)
        .json( {message: 'Error'})
    }

}

module.exports = priceController;