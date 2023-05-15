import { Router } from "express";
import * as tareasCtrl from "../controllers/tareas.controllers.js";
import { postEmail } from "../controllers/email.controllers.js";
import { authJwt } from "../middlewares";

const router = Router();

router.get('/tareas', tareasCtrl.getTareas);
router.post('/tareas', [authJwt.verifyToken, authJwt.isModerator], tareasCtrl.postTareas);
router.put('/tareas/:id', [authJwt.verifyToken, authJwt.isModerator], tareasCtrl.putTareas);
router.delete('/tareas/:id', [authJwt.verifyToken, authJwt.isAdmin], tareasCtrl.deleteTareas);
router.get('/tareas/:id', tareasCtrl.getTareasId);

router.post('/send-email', postEmail);

export default router;