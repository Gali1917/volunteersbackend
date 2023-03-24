import express from 'express';
import tareasRouter from '../routes/tareas.routes.js';

const app = express();

app.use(express.json());
app.use(tareasRouter);

export default app;