import { Router } from "express";
import { confirmSolicitud, declaSolicitud, getAllDataBySoli, getSoliByCarrera, getSolicitudesByEmpre, postSolicitud, getJobsByStudent } from "../controllers/SOLICITUDES_OFERTAS_LABORALES.controller";
const router = Router();

router.get("/getSolicitudesByEmpre/:id", getSolicitudesByEmpre);
router.get("/getSoliByCarrera/:id", getSoliByCarrera);
router.post("/postSolicitud", postSolicitud);
router.get("/getAllDataBySoli/:id", getAllDataBySoli);
router.put("/declaSolicitud/:id", declaSolicitud);
router.put("/confirmSolicitud/:id",  confirmSolicitud);
router.get("/getJobsByStudent/:id", getJobsByStudent); 

export default router;