import { Router } from "express";
import {getEstudianteById, putEstudiantes} from "../controllers/ESTUDIANTES.controller";
const router = Router();

router.get("/estudiantes/:id", getEstudianteById);
router.put("/estudiantes", putEstudiantes);

export default router;