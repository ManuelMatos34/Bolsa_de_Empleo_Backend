import { Router } from "express";
import { getHabilidades, getHabilidadById, postHabilidad, putHabilidad, deleteHabilidad } from "../controllers/HABILIDADES.controller";
const router = Router();

router.get("/habilidades", getHabilidades );
router.get("/habilidades/:id", getHabilidadById );
router.post("/habilidades", postHabilidad );
router.put("/habilidades", putHabilidad );
router.delete("/habilidades/:id", deleteHabilidad );

export default router;