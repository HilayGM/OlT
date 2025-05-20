import { Sequelize } from "sequelize";

const db = new Sequelize('olt', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

export default db;


//pues guardamos la bases de datos en una constante
// y exportamos la constante para usarla en otros archivos