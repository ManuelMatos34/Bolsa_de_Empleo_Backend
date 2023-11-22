import { Router } from "express";
import {getChartByComp, getChartByOfer, getStatsCarreras, getStatsComp, getStatsFacultades, getStatsHab, getStatsHabByCa, getStatsOfertas, getStatsOfertasByComp, getStatsUser} from "../controllers/STATS.controller";
const router = Router();

router.get("/statscomp", getStatsComp);
router.get("/statsuser", getStatsUser);
router.get("/statshabbycar", getStatsHabByCa);
router.get("/statshab", getStatsHab);
router.get("/statscarreras", getStatsCarreras);
router.get("/statsfac", getStatsFacultades);
router.get("/statsofertas", getStatsOfertas);
router.get("/statsofertasbycomp/:id", getStatsOfertasByComp);
router.get("/chartcomp", getChartByComp);
router.get("/chartofer", getChartByOfer);

export default router;