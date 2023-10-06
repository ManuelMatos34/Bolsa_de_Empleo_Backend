import { Router } from "express";
import {getCalificaciones, getCalificacionById, postCalificacion, putCalificaciones} from "../controllers/CALIFICACIONES.controller";
const router = Router();

router.get("/calificaciones/:id", getCalificaciones);
router.get("/calificacion/:id", getCalificacionById);
router.post("/calificacion", postCalificacion);
router.put("/calificacion", putCalificaciones);


export default router;