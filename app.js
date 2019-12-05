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

const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('connectia', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Se ha conectado correctamente a la base de datos');
  })
  .catch(err => {
    console.error('No se ha conectado correctamente a la base de datos');
  });


const Model = Sequelize.Model;

class Usuarios extends Model { }
// Creacion de modelos

// --- modelo de usuario---

Usuarios.init({
  // atributos
  id_usuario: {
    type: Sequelize.INTEGER(4),
    autoIncrement: true,
    primaryKey: true

  },
  nombre: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
      }
  },
  apellido: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
      }
  },
  
    email: {
      type: Sequelize.STRING(100),
      allowNull: false,
      validate: {
        notNull: { msg: "El campo es requerido" },
        }
    },

    dni: {
      type: Sequelize.INTEGER(8),
      allowNull: false,
      validate: {
        notNull: { msg: "El campo es requerido" },
        }
    },

    direccion: {
      type: Sequelize.STRING(100),
      allowNull: false,
      validate: {
        notNull: { msg: "El campo es requerido" },
        }
    },
  
  provincia: {
    type: Sequelize.STRING(100),
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
      }

  },
  fecha_nacimiento:{
    type: Sequelize.DATEONLY,
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
      }

  },
  pregunta_secreta:{
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
      }

  },

  contrasenya:{
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
      }
  },
  telefono:{
    type: Sequelize.INTEGER(15),
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
      }
  },
  admin:{
   type: Sequelize.BOOLEAN
  }

  
}, {
    sequelize,
    modelName: 'usuarios'
    
  });

  // conectar usuarios
  Usuarios.sync().then(() => {
  
    return usuario.create({
      nombre: 'Laura',
      apellido: 'Cruz',
      email: 'lauracruz@gmail.com',
      dni: 44891806,
      direccion: 'C/ cuenca',
      provincia: 'Valencia',
      fecha_nacimiento: 1992-03-13,
      pregunta_secreta:'si',
      contrasenya:'12345678',
      telefono: 648391234,
      admin: true
    });
  });

  // --- modelo producto ---




module.exports = app;
