import express from "express";
import fileUpload from "express-fileupload";
import { Jwt } from "jsonwebtoken";
import expressJwt from "express-jwt";
import { config } from "./config";
import tareasRouter from "../routes/tareas.routes.js";
import sgMail from "@sendgrid/mail";
import userRouter from "../routes/access.routes.js";

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
  res.send("Home");
});
//Routes
app.use(tareasRouter);

//JWT
app.use(
  expressJwt({ secret: config.secret }).unless({ path: ["/login", "/signup"] })
);

const authentication = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ error: "Acceso no autorizado" });
  }
};

export default app;
