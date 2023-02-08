import {Router} from "express";
import * as tasksController from "../controllers/task.controller"
const router = Router();

const Task = require("../models/Task");



router.get("/", tasksController.getTasks);
router.get("/:id", tasksController.getTaskById);
router.post("/", tasksController.createTask);
router.put("/:id", tasksController.updateTaskById);
router.delete("/:id", tasksController.deleteTaskById);



module.exports = router;
