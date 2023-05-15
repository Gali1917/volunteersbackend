import express from "express";
import fileUpload from "express-fileupload";
import expressJwt from "express-jwt";
import { config } from "./config";
import tareasRouter from "../routes/tareas.routes.js";
import sgMail from "@sendgrid/mail";
import userRouter from "../routes/access.routes.js";
import authRouter from "../routes/auth.routes.js";
import { createRoles } from "../libs/initialSetup.js";


const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
