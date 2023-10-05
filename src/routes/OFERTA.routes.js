import { Router } from "express";
import { getOfertaById, getOfertas, updateOferta, deleteOferta, postOferta } from "../controllers/OFERTA.controller";
const router = Router();

router.get("/oferta", getOfertas);
router.get("/oferta/:id", getOfertaById);
router.post("/oferta", postOferta);
router.put("/oferta", updateOferta);
router.delete("/oferta/:id", deleteOferta);

export default router;