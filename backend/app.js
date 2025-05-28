import express from 'express';
import cors from 'cors';
import db from './database/db.js';

import blogRoutes from './routes/routes.js';

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' })); // ✅ Solo esta
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use('/blogs', blogRoutes); // endpoint principal

try {
    await db.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
} catch (error) {
    console.log('No se pudo conectar a la base de datos:', error);
}


const PORT = process.env.PORT || 8000;

app.listen(8000, '0.0.0.0',() => {
    console.log('Servidor corriendo en el puerto 8000');
});
