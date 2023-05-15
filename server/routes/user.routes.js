import { Router } from "express";
import * as userCtrl from "../controllers/user.controllers.js";
import { authJwt, verifySignup} from "../middlewares/index.js";

const router = Router();

router.post("/", [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted], userCtrl.createUser);

router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], userCtrl.deleteUser);


export default router;
