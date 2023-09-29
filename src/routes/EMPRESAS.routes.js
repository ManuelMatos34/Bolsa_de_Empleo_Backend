import { Router } from "express";
import { getEmpresas, postEmpresas, getEmpresaById, deleteEmpresa, updateEmpresa } from "../controllers/EMPRESAS.controller";
const router = Router();

router.get("/empresas", getEmpresas);
router.get("/empresas/:id", getEmpresaById);
router.post("/empresas", postEmpresas);
router.put("/empresas", updateEmpresa);
router.delete("/empresas/:id", deleteEmpresa);

export default router;