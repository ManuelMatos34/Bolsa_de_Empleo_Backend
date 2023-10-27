import { Router } from "express";
import { getExp, getExpById, postExp, putExp, deleteExp, getExpByEst } from "../controllers/EXPERIENCIA.controller";
const router = Router();

router.get("/experiencia", getExp);
router.get("/experiencia/:id", getExpById);
router.get("/experienciaest/:id", getExpByEst);
router.post("/experiencia", postExp);
router.put("/updateexperiencia", putExp);
router.put("/deleteexperiencia/:id", deleteExp);

export default router;