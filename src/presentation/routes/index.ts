import { Router } from "express";
import { UserController } from "../controllers/user-controller";

const routes = Router();
routes.post("/users", UserController.create);

export { routes };