import { Router } from "express";
import {getRoles,getRolById,postRol,putRol,deleteRol} from "../controllers/ROLES.controller";
const router = Router();

router.get("/roles", getRoles );
router.get("/roles/:id", getRolById );
router.post("/roles", postRol );
router.put("/roles", putRol );
router.delete("/roles/:id", deleteRol );

export default router;