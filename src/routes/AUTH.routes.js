import { Router } from "express";
import {authStudent, authUser} from "../controllers/AUTH.controller";
const router = Router();

router.post("/authStudent", authStudent);
router.post("/authUser", authUser);

export default router;