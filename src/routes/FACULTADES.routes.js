import { Router } from "express";
import { getFacultades, getFacultadById, postFacultad, putFacultad, deleteFacultad } from "../controllers/FACULTADES.controller";
const router = Router();

router.get("/facultades", getFacultades);
router.get("/facultades/:id", getFacultadById);
router.post("/facultades", postFacultad);
router.put("/facultades", putFacultad);
router.delete("/facultades/:id", deleteFacultad);

export default router;