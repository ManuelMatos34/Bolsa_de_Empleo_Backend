import { Router } from "express";
import { getEmpresas } from "../controllers/EMPRESAS.controller";
import { postEmpresas } from "../controllers/EMPRESAS.controller";
const router = Router();

router.get("/empresas", getEmpresas);
router.get("/empresas",);
router.post("/empresas", postEmpresas);
router.put("/empresas", );
router.delete("/empresas", );

export default router