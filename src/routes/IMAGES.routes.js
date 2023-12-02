
import { Router } from "express";
import { getImgAdmin, getImgEmp, getImgEst, setImgAdmin, setImgEmpresas, setImgEst } from "../controllers/IMAGES.controller";
const router = Router();

router.get("/getEstImg/:id", getImgEst);
router.get("/getImgEmp/:id", getImgEmp);
router.get("/getImgAdmin/:id", getImgAdmin);
router.put("/uploadEstImg/:id", setImgEst);
router.put("/uploadAdminImg/:id", setImgAdmin);
router.put("/uploadEmpImg/:id", setImgEmpresas);


export default router;