import { Router } from "express";
const router = Router();
import * as userController from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewares";

router.get("/", /*[authJwt.verifyToken],*/ userController.getUsers);

router.get("/:id", /*[authJwt.verifyToken],*/ userController.getUserById);

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted],
  userController.createUser
);

router.put(
  "/:id",
  [authJwt.verifyToken, authJwt.isModerator],
  userController.updateUser
);

router.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  userController.deleteUser
);

export default router;
