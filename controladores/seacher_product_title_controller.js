const Sequelize = require('sequelize');
// const db = require('./models/models.js')

const seacher_product_title_controller = (req, res) => {
   const db = [{ nombre:'Jesus', edad:20 }, {nombre:'Laura', edad:20}]
    const seacher = req.body.nombre;
    
console.log(seacher)
    const buscarProducto = db.filter(producto =>  producto.nombre === seacher  )
    console.log(buscarProducto)
    if(buscarProducto){
        return res
        .status(201)
        .send(buscarProducto)
    }else{
        return res
        .status(401)
        .json({mensaje:'No se encontro el usuario'})
    }

//     const productos = db.productos;
//     const encontrarProductos = db.productos.findAll({
//         attributes: ['title']
//       }, {where:{
//          productos.nombre = seacher.nombre
//       }});

}

module.exports=seacher_product_title_controller;