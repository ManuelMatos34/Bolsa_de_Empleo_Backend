import { getConnection, sql } from "../database/connection";
import { querysCarreras } from "../database/querys";

export const getCarreras = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysCarreras.getCarreras);
        if (result.recordset.length == 0) {
            res.json({
                message: "No hay carreras registradas",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const postCarrera = async (req, res) => {
    const {
        Ca_Description,
        Fac_ID
    } = req.body;
    try {
        const pool1 = await getConnection();
        const result = await pool1
            .request()
            .input("Ca_Description", sql.VarChar, Ca_Description)
            .query(querysCarreras.searchCarrera);
        if (result.recordset.length > 0) {
            return res.json({
                message: "La carrera ya existe",
            });
        }
        const pool2 = await getConnection();
        await pool2
            .request()
            .input("Ca_Description", sql.VarChar, Ca_Description)
            .input("Fac_ID", sql.Int, Fac_ID)
            .query(querysCarreras.postCarrera);
        res.json(req.body);
    } catch (error) {
        res.send(error.message);
    }
};

export const getCarreraById = async (req, res) => {
    try {
        const { id } = req.params;
        if (id === "") {
            return res.json({
                message: "El id es obligatorio",
            });
        }
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Id", sql.Int, id)
            .query(querysCarreras.getCarreraById);

        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.json({
                message: "Carrera no encontrada",
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const deleteCarrera = async (req, res) => {
    try {
        const { id } = req.params;
        if (id === "") {
            return res.json({
                message: "El id es obligatorio",
            });
        }
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Id", sql.Int, id)
            .query(querysCarreras.deleteCarrera);
        if (result.rowsAffected[0] !== 0) {
            res.json({
                message: "Carrera eliminada",
            });
        } else {
            res.json({
                message: "Carrera no encontrada",
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const putCarrera = async (req, res) => {
    const {
        Ca_ID,
        Ca_Description,
        Fac_ID
    } = req.body;
    try {
        const pool1 = await getConnection();
        const result = await pool1
            .request()
            .input("Ca_Description", sql.VarChar, Ca_Description)
            .query(querysCarreras.searchCarrera);
        if (result.recordset.length > 0) {
            return res.json({
                message: "La carrera ya existe",
            });
        }
        const pool2 = await getConnection();
        await pool2
            .request()
            .input("Ca_ID", sql.Int, Ca_ID)
            .input("Ca_Description", sql.VarChar, Ca_Description)
            .input("Fac_ID", sql.VarChar, Fac_ID)
            .query(querysCarreras.putCarrera);
        res.json({
            message: "Carrera actualizada",
        });
    } catch (error) {
        res.send(error.message);
    }
};