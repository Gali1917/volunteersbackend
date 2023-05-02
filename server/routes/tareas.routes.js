import { Router } from "express";
import { getTareas } from "../controllers/tareas.controllers.js";
import { postTareas } from "../controllers/tareas.controllers.js";
import { putTareas } from "../controllers/tareas.controllers.js";
import { deleteTareas } from "../controllers/tareas.controllers.js";
import { getTareasId } from "../controllers/tareas.controllers.js";
import { postEmail } from "../controllers/email.controllers.js";

const router = Router();

router.get('/tareas', getTareas);
router.post('/tareas', postTareas);
router.put('/tareas/:id', putTareas);
router.delete('/tareas/:id', deleteTareas);

router.get('/tareas/:id', getTareasId);

router.post('/send-email', postEmail);

export default router;