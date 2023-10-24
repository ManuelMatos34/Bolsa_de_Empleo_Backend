import { getConnection, sql } from "../database/connection";
import { querysREL_ESTUDIANTES_HABILIDADES } from "../database/querys";

export const getHabNotEst = async (req, res) => {
    const {
        Std_ID,
        Ca_ID
    } = req.body;
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("Ca_ID", sql.Int, Ca_ID)
            .input("Std_ID", sql.VarChar, Std_ID)
            .query(querysREL_ESTUDIANTES_HABILIDADES.getHabNotEst);
        if (result.recordset.length == 0) {
            res.json({
                message: 0,
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const searchHabByEst = async (req, res) => {
    try {
        const { Std_ID } = req.body;
        if (Std_ID === "") {
            return res.json({
                message: "El id es obligatorio",
            });
        }
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Std_ID", sql.VarChar, Std_ID)
            .query(querysREL_ESTUDIANTES_HABILIDADES.searchHabByEst);

        if (result.recordset.length > 0) {
            res.json(result.recordset);
        } else {
            res.json({
                message: 0,
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const postEstxHab = async (req, res) => {
    const {
        Skill_ID,
        Std_ID
    } = req.body;
    try {
        const pool2 = await getConnection();
        await pool2
            .request()
            .input("Skill_ID", sql.Int, Skill_ID)
            .input("Std_ID", sql.VarChar, Std_ID)
            .query(querysREL_ESTUDIANTES_HABILIDADES.postEstxHab);
        res.json(req.body);
    } catch (error) {
        res.send(error.message);
    }
};

export const deleteEstxHab = async (req, res) => {
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
            .query(querysREL_ESTUDIANTES_HABILIDADES.deleteEstxHab);
        if (result.rowsAffected[0] !== 0) {
            res.json({
                message: "Registro eliminado",
            });
        } else {
            res.json({
                message: "Registro no encontrado",
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};
