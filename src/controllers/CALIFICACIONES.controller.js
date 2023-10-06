import { getConnection, sql } from "../database/connection";
import { querysCalificaciones } from "../database/querys";

export const getCalificaciones = async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input("Ca_ID", sql.Int, id)
        .query(querysCalificaciones.selectCalificaciones);
        if (result.recordset.length == 0) {
            res.status(404).json({
                message: "No hay calificaciones registradas",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const getCalificacionById = async (req, res) => {
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
            .query(querysCalificaciones.selectCalificacionesById);

        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({
                message: "Calificacion no encontrada",
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const postCalificacion = async (req, res) => {
    const {
        Rev_Confirmation,
        Rev_Description,
        Std_ID,
        Job_ID,
    } = req.body;
    try {
        const pool2 = await getConnection();
        await pool2
            .request()
            .input("Rev_Confirmation", sql.Char, Rev_Confirmation)
            .input("Rev_Description", sql.VarChar, Rev_Description)
            .input("Std_ID", sql.VarChar, Std_ID)
            .input("Job_ID", sql.Int, Job_ID)
            .input("Rev_Status", sql.Char, "1")
            .query(querysCalificaciones.postCalificacion);
        res.json(req.body);
    } catch (error) {
        res.send(error.message);
    }
};

export const putCalificaciones = async (req, res) => {
    const {
        Rev_ID,
        Rev_Confirmation,
        Rev_Description,
    } = req.body;
    try {
        const pool2 = await getConnection();
        await pool2
            .request()
            .input("Rev_ID", sql.Int, Rev_ID)
            .input("Rev_Confirmation", sql.Char, Rev_Confirmation)
            .input("Rev_Description", sql.VarChar, Rev_Description)
            .query(querysCalificaciones.putCalificacion);
            res.json({
                message: "Calificacion actualizada",
            });
    } catch (error) {
        res.send(error.message);
    }
};