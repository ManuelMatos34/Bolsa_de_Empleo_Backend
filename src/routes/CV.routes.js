import { Router } from "express";
import { postCv, getCv} from "../controllers/CV.controller";
const router = Router();

router.post("/cv/:id", postCv);
router.get("/cv/:id", getCv);

export default router;