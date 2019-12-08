var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



// Generacion de tablas con sequelize 

// const Sequelize = require('sequelize');

// // Option 1: Passing parameters separately
// const sequelize = new Sequelize('connectia', 'root', 'root', {
//   host: 'localhost',
//   dialect: 'mariadb'
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Se ha conectado correctamente a la base de datos');
//   })
//   .catch(err => {
//     console.error('No se ha conectado correctamente a la base de datos');
//   });


// const Model = Sequelize.Model;

// class Usuarios extends Model { }
// // Creacion de modelos

// // --- modelo de usuario---

// Usuarios.init({
//   // atributos
//   id_usuario: {
//     type: Sequelize.INTEGER(4),
//     autoIncrement: true,
//     primaryKey: true

//   },
//   nombre: {
//     type: Sequelize.STRING(20),
//     allowNull: false,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }
//   },
//   apellido: {
//     type: Sequelize.STRING(20),
//     allowNull: false,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }
//   },

//   email: {
//     type: Sequelize.STRING(100),
//     allowNull: false,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }
//   },

//   dni: {
//     type: Sequelize.INTEGER(8),
//     allowNull: false,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }
//   },

//   direccion: {
//     type: Sequelize.STRING(100),
//     allowNull: false,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }
//   },

//   provincia: {
//     type: Sequelize.STRING(100),
//     allowNull: false,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }

//   },
//   fecha_nacimiento: {
//     type: Sequelize.DATEONLY(10),
//     allowNull: false,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }

//   },
//   pregunta_secreta: {
//     type: Sequelize.STRING(20),
//     allowNull: false,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }

//   },

//   contrasenya: {
//     type: Sequelize.STRING(20),
//     allowNull: false,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }
//   },
//   telefono: {
//     type: Sequelize.INTEGER(15),
//     allowNull: false,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }
//   },
//   admin: {
//     type: Sequelize.STRING(5)
//   }


// }, {
//   sequelize,
//   modelName: 'usuarios'

// });

// // conectar usuarios
// Usuarios.sync().then(() => {

//   return Usuarios.create({
//     nombre: 'Laura',
//     apellido: 'Cruz',
//     email: 'lauracruz@gmail.com',
//     dni: 44891806,
//     direccion: 'C/ cuenca',
//     provincia: 'Valencia',
//     fecha_nacimiento: 1992 - 03 - 13,
//     pregunta_secreta: 'si',
//     contrasenya: '12345678',
//     telefono: 648391234,
//     admin: 'true'
//   });
// });


// // --- modelo producto ---
// class productos extends Model { }
// productos.init({

//   id_producto: {
//     type: Sequelize.INTEGER(4),
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },

//   nombre: {
//     type: Sequelize.STRING(100),
//     allowNull: false,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }
//   },

//   id_categoria: {
//     type: Sequelize.INTEGER(2),
//     allowNull: false,
//     primaryKey: true,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }


//   },

//   popularidad: {
//     type: Sequelize.INTEGER(3),
//     allowNull: false,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }
//   },

//   ventas: {
//     type: Sequelize.INTEGER(6),
//     allowNull: false,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }

//   },
//   stock: {
//     type: Sequelize.INTEGER(6),
//     allowNull: false,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }
//   },

//   precio: {
//     type: Sequelize.FLOAT(6),
//     allowNull: false,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }
//   },

//   descripcion: {
//     type: Sequelize.STRING(1000),
//     allowNull: false,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }
//   }
// },
//   {
//     sequelize,
//     modelName: 'productos'
  
//   });


// // conectar productos

// productos.sync().then(() => {

//   return productos.create({
//     nombre: 'portatil lenovo',
//     id_categoria: 1,
//     popularidad: 10,
//     ventas: 5,
//     stock: 30,
//     precio: 4,
//     descripcion:'sldjfasjfasoiflkndfnasodif'

//   });

// });

// // --- modelo factura ---
// class facturas extends Model { }

// facturas.init ({

//   id_factura: {
//     type: Sequelize.INTEGER(6),
//     allowNull: false,
//     primaryKey: true,
//     autoIncrement: true
//   },

//   id_usuario: {
//     type: Sequelize.INTEGER(4),
//     allowNull: false,
//     primaryKey: true
//   },

//   id_producto: {
//     type: Sequelize.INTEGER(4),
//     allowNull: false,
//     primaryKey: true
//   },

//   total: {
//     type: Sequelize.FLOAT(6),
//     allowNull: false
//   }
// },
// {
//   sequelize,
//   modelName: 'facturas'

// });

// // conectar facturas

// facturas.sync().then(() => {

//   return facturas.create({
    
//     // id_factura: 1,
//     id_usuario: 2,
//     id_producto: 3,
//     total: 12.34

//   })

// });

// // --- modelo categoria ---
// class categoria extends Model { }
// categoria.init ({

//   id_categoria: {
//     type: Sequelize.INTEGER(2),
//     autoIncrement: true,
//     primaryKey: true
//   },

//   nombre: {
//     type: Sequelize.STRING(20),
//     allowNull: false,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }
//   }
// },
// {
//   sequelize,
//   modelName: 'categorias'

// });

// // conectar categoria

// categoria.sync().then(() => {

//   return categoria.create({
    
//     // id_categoria: 1,
//     nombre: 'Tablet'

//   })

// });



// // --- Modelo Provincias ---
// class provincias extends Model { }

// provincias.init ({

//   id_provincia: {
//   type: Sequelize.INTEGER(2),
//   allowNull: false,
//   autoIncrement: true,
//   primaryKey: true
//   },

//   nombre: {
//     type: Sequelize.STRING(20),
//     allowNull: false,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }
//   },

//   pais: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     validate: {
//       notNull: { msg: "El campo es requerido" },
//     }
//   }
// },
// {
//   sequelize,
//   modelName: 'provincias'

// });

// // conectar facturas

// provincias.sync().then(() => {

//   return provincias.create({
    
//     // id_provincia: 1,
//     nombre: 'Valencia',
//     pais: 'Espanya'

//   })

// });








module.exports = app;
