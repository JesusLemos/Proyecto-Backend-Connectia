module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notNull: { msg: "El campo es requerido" },
      }
    },
    apellido: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notNull: { msg: "El campo es requerido" },
      }
    },

    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notNull: { msg: "El campo es requerido" },
      }
    },

    dni: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: "El campo es requerido" },
      }
    },

    direccion: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notNull: { msg: "El campo es requerido" },
      }
    },

    fecha_nacimiento: {
      type: DataTypes.DATEONLY(10),
      allowNull: false,
      validate: {
        notNull: { msg: "El campo es requerido" },
      }
    },

    pregunta_secreta: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notNull: { msg: "El campo es requerido" },
      }
    },

    contrasenya: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notNull: { msg: "El campo es requerido" },
      }
    },

    telefono: {
      type: DataTypes.INTEGER(15),
      allowNull: false,
      validate: {
        notNull: { msg: "El campo es requerido" },
      }
    },

    admin: {
      type: DataTypes.BOOLEAN
    }
  });

  Usuario.associate = models => {
    Usuario.hasOne(models.Provincia);
    Usuario.hasMany(models.Factura)
  };


  Usuario.sync({ force: true }).catch(error =>
    console.log(`no se puede conectar a la base de datos`, error),
  );
  return Usuario;
};