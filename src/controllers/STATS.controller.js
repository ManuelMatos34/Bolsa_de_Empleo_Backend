import { getConnection, sql } from "../database/connection";
import { querysSTATS } from "../database/querys";

export const getStatsComp = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(querysSTATS.getStatsByEmpresas);
        if (result.recordset.length == 0) {
            res.json({
                message: "Sin datos",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const getStatsUser = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(querysSTATS.getStatsByUser);
        if (result.recordset.length == 0) {
            res.json({
                message: "Sin datos",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const getStatsHabByCa = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(querysSTATS.getStatsByHabilidad);
        if (result.recordset.length == 0) {
            res.json({
                message: "Sin datos",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const getStatsHab = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(querysSTATS.getCountByHab);
        if (result.recordset.length == 0) {
            res.json({
                message: "Sin datos",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const getStatsCarreras = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(querysSTATS.getStatsByCarrera);
        if (result.recordset.length == 0) {
            res.json({
                message: "Sin datos",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const getStatsFacultades = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(querysSTATS.getStatsByFacultad);
        if (result.recordset.length == 0) {
            res.json({
                message: "Sin datos",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const getStatsOfertas = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(querysSTATS.getStatsByOferta);
        if (result.recordset.length == 0) {
            res.json({
                message: "Sin datos",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const getStatsOfertasByComp = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("id", sql.Numeric, req.params.id)
            .query(querysSTATS.getStatsOfertasByComp);
        if (result.recordset.length == 0) {
            res.json({
                message: "Sin datos",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const getChartByComp = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(querysSTATS.getsChartByComp);
        if (result.recordset.length == 0) {
            res.json({
                message: "Sin datos",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const getChartByOfer = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(querysSTATS.getsChartByOfer);
        if (result.recordset.length == 0) {
            res.json({
                message: "Sin datos",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};