import express from "express";
import fileUpload from "express-fileupload";
import tareasRouter from "../routes/tareas.routes.js";
import sgMail from "@sendgrid/mail";
import userRouter from "../routes/user.routes.js";
import authRouter from "../routes/auth.routes.js";
import { createRoles } from "../libs/initialSetup.js";


const app = express();
createRoles();

//Envio de mails
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//Configuracion del CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://evolunteers.org/');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//Middleware
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    // tempFileDir: './upload'
    tempFileDir: "C:/upload",
  })
);

app.get("/", (req, res) => {
  res.send("Home of Volunteers");
});
//Routes
app.use('/api', tareasRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

//JWT

export default app;
