import { Router } from "express";
import { getUsuarios, postUsuario, getUsuarioById, deleteUsuario, updateUsuario} from "../controllers/USUARIOS.controller";
const router = Router();

router.get("/usuarios", getUsuarios);
router.get("/usuarios/:id", getUsuarioById);
router.post("/usuarios", postUsuario);
router.put("/usuarios", updateUsuario);
router.delete("/usuarios/:id", deleteUsuario);

export default router;