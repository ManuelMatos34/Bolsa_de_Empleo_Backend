import { Router } from "express";
import { getOfertaById,getOfertaByCarrera, getOfertas, updateOferta, deleteOferta, postOferta, getOfertasByComp } from "../controllers/OFERTA.controller";
const router = Router();

router.get("/oferta", getOfertas);
router.get("/ofertasbycomp/:id", getOfertasByComp);
router.get("/oferta/:id", getOfertaById);
router.get("/ofertaByCa/:id", getOfertaByCarrera);
router.post("/oferta", postOferta);
router.put("/oferta", updateOferta);
router.delete("/oferta/:id", deleteOferta);

export default router;