import express from "express";
import Task from "../model/task.js";
import TaskController from "../controllers/task-controller.js";

const TaskRouter = express.Router();

TaskRouter.get('/', TaskController.getTasks);
TaskRouter.get('/:id', TaskController.getTaskById);
TaskRouter.post('/', TaskController.createTask);
TaskRouter.put('/:id', TaskController.updateTask);
TaskRouter.delete('/:id', TaskController.deleteTask);

export default TaskRouter;