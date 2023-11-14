import { Router } from "express";
import {authStudent, authUser, authCompanie} from "../controllers/AUTH.controller";
const router = Router();

router.post("/authStudent", authStudent);
router.post("/authUser", authUser);
router.post("/authComp", authCompanie);

export default router;