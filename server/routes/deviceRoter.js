import { Router } from "express";
import deviceController from "../controllers/deviceController";
import authMiddleware from "../middleware/authMiddleware";

const router = new Router();

router.post("/", deviceController.create);
router.get("/", deviceController.getAll);
router.get("/:id", authMiddleware, deviceController.getOne);

export default router;
