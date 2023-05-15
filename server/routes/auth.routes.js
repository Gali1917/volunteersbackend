import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller.js";
import { verifySignup } from "../middlewares";

const router = Router();

router.post("/signin", authCtrl.signin);

router.post(
  "/signup",
  [verifySignup.checkDuplicateDocumentOrEmail, verifySignup.checkRolesExisted],
  authCtrl.signup
);

export default router;
