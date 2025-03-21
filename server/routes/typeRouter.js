import { Router } from "express";
import typeController from "../controllers/typeController";

const router = new Router();

router.post("/", typeController.create);
router.get("/", typeController.getAll);

export default router;
