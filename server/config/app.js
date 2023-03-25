import express from 'express';
import fileUpload from 'express-fileupload';
import tareasRouter from '../routes/tareas.routes.js';

const app = express();

//Middleware
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

//Routes
app.use(tareasRouter);

export default app;