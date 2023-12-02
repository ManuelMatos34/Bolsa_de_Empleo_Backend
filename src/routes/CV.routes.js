import { Router } from "express";
import { postCv, getCv, send} from "../controllers/CV.controller";
const router = Router();

router.post("/cv/:id", postCv);
router.post("/cv", send);
router.get("/cv/:id", getCv);

export default router;