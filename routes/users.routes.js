import { Router } from "express";
import UsersController from "../app/controllers/users.controller.js";
// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();
routes.get("/", UsersController.index);
routes.post("/", UsersController.store);
// Add routes
// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export default routes;
