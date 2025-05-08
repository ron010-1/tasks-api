import express from "express";
import UserController from "../controllers/user-controller.js";

const UserRouter = express.Router();

UserRouter.get('/', UserController.getUsers);
UserRouter.get('/:id', UserController.getUserById);
UserRouter.post('/', UserController.createUser);
UserRouter.put('/:id', UserController.updateUser);
UserRouter.delete('/:id', UserController.deleteUser);

export default UserRouter;