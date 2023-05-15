import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller.js";
import { verifySignup } from "../middlewares/index.js";

const router = Router();

router.post("/signin", authCtrl.signin);

router.post(
  "/signup",
  [verifySignup.checkDuplicateDocumentOrEmail, verifySignup.checkRolesExisted],
  authCtrl.signup
);

export default router;
