import express from 'express';
import tareasRouter from './routes/tareas.routes.js';
import { connectDB } from './db.js';
import { PORT } from '../config/config.js';

const app = express();
connectDB();

app.use(tareasRouter);

app.listen(PORT);
console.log("Servidor corriendo por puerto ", PORT);
