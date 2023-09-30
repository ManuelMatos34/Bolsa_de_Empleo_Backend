import { Router } from "express";
import { getUsuarios, postUsuario, getUsuarioById, deleteUsuario, updateUsuario, validateUser, getValidateUser} from "../controllers/USUARIOS.controller";
const router = Router();

router.get("/usuarios", getUsuarios);
router.get("/usuarios/:id", getUsuarioById);
router.post("/usuarios", postUsuario);
router.put("/usuarios", updateUsuario);
router.delete("/usuarios/:id", deleteUsuario);
router.put("/usuarios/:id", validateUser);
router.get("/usuariosToValidate", getValidateUser);

export default router;