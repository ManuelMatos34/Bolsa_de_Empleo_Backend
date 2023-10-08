import { Router } from "express";
import { getHabNotEst,searchHabByEst,deleteEstxHab, postEstxHab } from "../controllers/REL_ESTUDIANTES_HABILIDADES.controller";
const router = Router();

router.post("/estuxhabilidad", getHabNotEst);
router.post("/estuxhabilidades", searchHabByEst);
router.post("/estuxhabilidadnew", postEstxHab);
router.delete("/estuxhabilidad/:id", deleteEstxHab);

export default router;