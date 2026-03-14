import { Router } from "express";

export default function songRoutes(controller) {
  const router = Router();

  router.post  ("/songs",      (req, res) => controller.create(req, res));
  router.get   ("/songs",      (req, res) => controller.getAll(req, res));


  return router;
}
