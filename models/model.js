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
Usuarios.sync().then(() => {


});


// --- modelo producto ---
class productos extends Model { }
productos.init({

  id_producto: {
    type: Sequelize.INTEGER(4),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  nombre: {
    type: Sequelize.STRING(100),
    allowNull: false,
    validate: {
      notNull: { msg: "El campo es requerido" },
    }
  },

  id_categoria: {
    type: Sequelize.INTEGER(2),
    allowNull: false,
    primaryKey: true,
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
    type: Sequelize.FLOAT(6),
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

productos.sync().then(() => {



  });



// --- modelo factura ---
class facturas extends Model { }

facturas.init ({

  id_factura: {
    type: Sequelize.INTEGER(6),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  id_usuario: {
    type: Sequelize.INTEGER(4),
    allowNull: false,
    primaryKey: true
  },

  id_producto: {
    type: Sequelize.INTEGER(4),
    allowNull: false,
    primaryKey: true
  },

  total: {
    type: Sequelize.FLOAT(6),
    allowNull: false
  }
},
{
  sequelize,
  modelName: 'facturas'

});

// conectar facturas

facturas.sync().then(() => {



});

// --- modelo categoria ---
class categoria extends Model { }
categoria.init ({

  id_categoria: {
    type: Sequelize.INTEGER(2),
    autoIncrement: true,
    primaryKey: true
  },

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
  modelName: 'categorias'

});

// conectar categoria

categoria.sync().then(() => {



});



// --- Modelo Provincias ---
class provincias extends Model { }

provincias.init ({

  id_provincia: {
  type: Sequelize.INTEGER(2),
  allowNull: false,
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
  modelName: 'provincias'

});

// conectar facturas

provincias.sync().then(() => {



});

