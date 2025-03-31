import { Router } from "express";

import basketDeviceController from "../controllers/basketDeviceController";

import authMiddleware from "../middleware/authMiddleware";
const router = new Router();

router.post("/", authMiddleware, basketDeviceController.create);
router.get("/", authMiddleware, basketDeviceController.getAll);

export default router;
