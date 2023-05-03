import express from 'express';
import fileUpload from 'express-fileupload';
import tareasRouter from '../routes/tareas.routes.js';
import sgMail from "@sendgrid/mail";

const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//Middleware
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    // tempFileDir: './upload'
    tempFileDir: 'C:/upload'

}))

app.get("/", (req, res) =>{
    res.send("Home");
})
//Routes
app.use(tareasRouter);

export default app;