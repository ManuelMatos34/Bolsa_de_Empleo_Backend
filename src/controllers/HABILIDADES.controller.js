import { getConnection, sql } from "../database/connection";
import { querysHabilidades } from "../database/querys";

export const getHabilidades = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysHabilidades.getHabilidades);
        if (result.recordset.length == 0) {
            res.status(404).json({
                message: "No hay habilidades registradas",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const postHabilidad = async (req, res) => {
    const {
        Skill,
        Ca_ID 
    } = req.body;
    try {
        const pool1 = await getConnection();
        const result = await pool1
            .request()
            .input("Skill", sql.VarChar, Skill)
            .input("Ca_ID", sql.Int, Ca_ID)
            .query(querysHabilidades.searchHabilidad);
        if (result.recordset.length > 0) {
            return res.status(400).json({
                message: "La habilidad ya existe en esa carrera",
            });
        }
        const pool2 = await getConnection();
        await pool2
            .request()
            .input("Skill", sql.VarChar, Skill)
            .input("Ca_ID", sql.Int, Ca_ID)
            .query(querysHabilidades.postHabilidad);
        res.json(req.body);
    } catch (error) {
        res.send(error.message);
    }
};

export const getHabilidadById = async (req, res) => {
    try {
        const { id } = req.params;
        if (id === "") {
            return res.status(400).json({
                message: "El id es obligatorio",
            });
        }
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Id", sql.Int, id)
            .query(querysHabilidades.getHabilidadById);

        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({
                message: "Habilidad no encontrada",
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const deleteHabilidad = async (req, res) => {
    try {
        const { id } = req.params;
        if (id === "") {
            return res.status(400).json({
                message: "El id es obligatorio",
            });
        }
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Id", sql.Int, id)
            .query(querysHabilidades.deleteHabilidad);
        if (result.rowsAffected[0] !== 0) {
            res.json({
                message: "Habilidad eliminada",
            });
        } else {
            res.status(404).json({
                message: "Habilidad no encontrada",
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const putHabilidad = async (req, res) => {
    const {
        Skill_ID,
        Skill,
        Ca_ID 
    } = req.body;
    try {
        const pool1 = await getConnection();
        const result = await pool1
            .request()
            .input("Skill", sql.VarChar, Skill)
            .input("Ca_ID", sql.Int, Ca_ID)
            .query(querysHabilidades.searchHabilidad);
        if (result.recordset.length > 0) {
            return res.status(400).json({
                message: "La habilidad ya existe en esa carrera",
            });
        }
        const pool2 = await getConnection();
        await pool2
            .request()
            .input("Skill_ID", sql.Int, Skill_ID)
            .input("Skill", sql.VarChar, Skill)
            .query(querysHabilidades.putHabilidad);
        res.json(req.body);
    } catch (error) {
        res.send(error.message);
    }
};