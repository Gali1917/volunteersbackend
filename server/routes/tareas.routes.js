import { Router } from "express";
import { get } from "mongoose";
import { getTareas } from "../controllers/tareas.controllers.js";
import { postTareas } from "../controllers/tareas.controllers.js";
import { putTareas } from "../controllers/tareas.controllers.js";
import { deleteTareas } from "../controllers/tareas.controllers.js";
import { getTareasId } from "../controllers/tareas.controllers.js";

const router = Router();

router.get('/tareas', getTareas);
router.post('/tareas', postTareas);
router.put('/tareas', putTareas);
router.delete('/tareas', deleteTareas);

router.get('/tareas/:id', getTareasId);



export default router;