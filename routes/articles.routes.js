import { Router } from "express";

// import all controllers
import ArticlesController from "../app/controllers/articles.controller.js";

const routes = new Router();

// Add routes
routes.get("/", ArticlesController.index);
routes.post("/", ArticlesController.store);
routes.put("/:id", ArticlesController.update);
routes.delete("/:id", ArticlesController.destroy);

export default routes;
