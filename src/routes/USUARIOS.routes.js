import { Router } from "express";
import { getUsuarios, postUsuario } from "../controllers/USUARIOS.controller";
const router = Router();

router.get("/usuarios", getUsuarios);
router.get("/usuarios/:id", );
router.post("/usuarios", postUsuario);
router.put("/usuarios", );
router.delete("/usuarios/:id",);

export default router;