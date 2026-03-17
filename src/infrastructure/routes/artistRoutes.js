import { Router } from "express";

export default function artistRoutes(controller) {
  const router = Router();

  router.post  ("/artists",      (req, res) => controller.create(req, res));
  router.get   ("/artists",      (req, res) => controller.getAll(req, res));


  return router;
}
