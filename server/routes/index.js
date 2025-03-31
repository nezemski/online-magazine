import { Router } from "express";
import deviceRoter from "./deviceRoter";
import typeRouter from "./typeRouter";
import userRouter from "./userRouter";
import brandRouter from "./brandRouter";
import basketDeviceRouter from "./basketDeviceRouter";

const router = new Router();

router.use("/user", userRouter);
router.use("/device", deviceRoter);
router.use("/brand", brandRouter);
router.use("/type", typeRouter);
router.use("/basket", basketDeviceRouter);

export default router;
