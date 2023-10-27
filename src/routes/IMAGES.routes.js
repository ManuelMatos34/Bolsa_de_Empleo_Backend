
import { Router } from "express";
import { getImgEmp, getImgEst, setImgEst } from "../controllers/IMAGES.controller";
const router = Router();

router.get("/getEstImg/:id", getImgEst);
router.get("/getImgEmp/:id", getImgEmp);
router.put("/uploadEstImg/:id", setImgEst);

export default router;