import { Router } from "express";
import { getEmpresas } from "../controllers/EMPRESAS.controller";
const router = Router();

router.get("/empresas", getEmpresas);
router.get("/empresas",);
router.post("/empresas", );
router.put("/empresas", );
router.delete("/empresas", );

export default router