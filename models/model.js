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

class Usuario extends Model { }
// Creacion de modelos

// --- modelo de usuario---

Usuario.init({
  // atributos

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
      isEmail: true,
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
  fecha_nacimiento: {
    type: Sequelize.DATEONLY(10),
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
    }

  },
  pregunta_secreta: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
    }

  },

  contrasenya: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
    }
  },
  telefono: {
    type: Sequelize.INTEGER(15),
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
    }
  },
  admin: {
    type: Sequelize.STRING(5)
  }


}, {
  sequelize,
  modelName: 'usuarios'

});

// conectar usuarios
Usuario.sync().then(() => {

});


//Vincular provincia con usuario
User.hasOne(Provincia);


// --- modelo producto ---
class Producto extends Model { }
Producto.init({

  nombre: {
    type: Sequelize.STRING(100),
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
    }
  },

  popularidad: {
    type: Sequelize.INTEGER(3),
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
    }
  },

  ventas: {
    type: Sequelize.INTEGER(6),
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
    }

  },
  stock: {
    type: Sequelize.INTEGER(6),
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
    }
  },

  precio: {
    type: Sequelize.FLOAT(6, 2),
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
    }
  },

  descripcion: {
    type: Sequelize.STRING(1000),
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
    }
  }
},
  {
    sequelize,
    modelName: 'productos'

  });



// conectar productos
Producto.sync().then(() => {

});



// --- modelo factura ---
class Factura extends Model { }

Factura.init({

  total: {
    type: Sequelize.FLOAT(6),
    allowNull: false
  }
},
  {
    sequelize,
    modelName: 'factura'

  });

// conectar facturas

Factura.sync().then(() => {

});


//Vincular factura con usuario
Factura.hasOne(User);

//Crear tabla Factura_Producto para vincular 
Factura.belongsToMany(Producto, {through: 'Factura_Producto'});
Producto.belongsToMany(Factura, {through: 'Factura_Producto'});


// --- modelo categoria ---
class Categoria extends Model { }
Categoria.init({

  nombre: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
    }
  }
},
  {
    sequelize,
    modelName: 'categoria'

  });


//Vincular la categoría a un producto
Producto.hasOne(Categoria);


// conectar categoria
Categoria.sync().then(() => {

});



// --- Modelo Provincias ---
class Provincia extends Model { }

Provincia.init({

  nombre: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
    }
  },

  pais: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
    }
  }
},
  {
    sequelize,
    modelName: 'provincia'

  });

// conectar facturas
Provincia.sync().then(() => {

});

