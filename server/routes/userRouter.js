import { Router } from "express";
import userController from "../controllers/userController";

const router = new Router();

router.post("/reqistration", userController.registration);

router.post("/login", userController.login);
router.get("/auth", userController.check);

export default router;
