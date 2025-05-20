import express from 'express';
import cors from 'cors';
import db from './database/db.js';


import blogRoutes from './routes/routes.js';    

const app = express();

app.use(cors());
app.use(express.json());

app.use('/blogs', blogRoutes); // Cambié '/act' a '/blog' para que sea más descriptivo

try {
    await db.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
} catch (error) {
    console.log('No se pudo conectar a la base de datos:', error);
}





app.listen(8000, () => {
    console.log('Servidor corriendo en el puerto 8000');
})