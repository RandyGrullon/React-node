import { Router } from "express";
const router = Router();
import * as tasksController from "../controllers/task.controller";
import { authJwt } from "../middlewares";

// import Task from "../models/Task";

router.get("/", tasksController.getTasks);
router.get("/:taskId", tasksController.getTaskById);
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  tasksController.createTask
);
router.put(
  "/:taskId",
  [authJwt.verifyToken, authJwt.isModerator],
  tasksController.updateTaskById
);
router.delete(
  "/:taskId",
  [authJwt.verifyToken, authJwt.isAdmin],
  tasksController.deleteTaskById
);

module.exports = router;
