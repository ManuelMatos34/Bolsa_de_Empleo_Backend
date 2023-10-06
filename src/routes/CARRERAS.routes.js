import { Router } from "express";
import {getCarreras, postCarrera, getCarreraById, deleteCarrera, putCarrera} from "../controllers/CARRERAS.controller";
const router = Router();

router.get("/carreras", getCarreras);
router.get("/carreras/:id", getCarreraById);
router.post("/carreras", postCarrera);
router.put("/carreras", putCarrera);
router.delete("/carreras/:id", deleteCarrera);

export default router;