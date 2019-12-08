const sequelize = require ('sequelize');

const visualizePoduct = (req, res) => {
    
    const db = [{nombre:'lenovo', precio: 5}, {nombre:'acer', precio: 7}, {nombre:'asus', precio: 3}]

    res 
    .status(200)
    .send(db)
}

module.exports = visualizePoduct;