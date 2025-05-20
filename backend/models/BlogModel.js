// Importamos la conexión a la base de datos
import db from "../database/db.js";

// Importamos los tipos de datos de Sequelize
import { DataTypes } from "sequelize";

// Definimos el modelo del blog
const BlogModel = db.define('blog', {
  title: {
    type: DataTypes.STRING,
    allowNull: false, // evita que el campo sea nulo
  },
  description: {
    type: DataTypes.TEXT, // más adecuado si puede ser más largo que 255 caracteres
    allowNull: false,
  },
  image: {
    type: DataTypes.BLOB('long'), // si quieres guardar la imagen directamente (como mencionaste antes)
    allowNull: false,
  }
});

export default BlogModel;
