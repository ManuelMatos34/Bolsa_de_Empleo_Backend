import { query } from "mssql";
import { getConnection, sql } from "../database/connection";
import { querysFacultades } from "../database/querys";

export const getFacultades = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysFacultades.getFacultades);
        if (result.recordset.length == 0) {
            res.status(404).json({
                message: "No hay facultades registradas",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const postFacultad = async (req, res) => {
    const {
        Fa_Description
    } = req.body;
    try {
        const pool1 = await getConnection();
        const result = await pool1
            .request()
            .input("Fa_Description", sql.VarChar, Fa_Description)
            .query(querysFacultades.searchFacultad);
        if (result.recordset.length > 0) {
            return res.status(400).json({
                message: "La facultad ya existe",
            });
        }
        const pool2 = await getConnection();
        await pool2
            .request()
            .input("Fa_Description", sql.VarChar, Fa_Description)
            .input("Fa_Status", sql.Char, "1")
            .query(querysFacultades.postFacultad);
        res.json(req.body);
    } catch (error) {
        res.send(error.message);
    }
};

export const getFacultadById = async (req, res) => {
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
            .query(querysFacultades.getFacultadById);

        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({
                message: "Facultad no encontrada",
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const deleteFacultad = async (req, res) => {
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
            .query(querysFacultades.deleteFacultad);
        if (result.rowsAffected[0] !== 0) {
            res.json({
                message: "Facultad eliminada",
            });
        } else {
            res.status(404).json({
                message: "Facultad no encontrada",
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const putFacultad = async (req, res) => {
    const {
        Fa_ID,
        Fa_Description
    } = req.body;
    try {
        const pool1 = await getConnection();
        const result = await pool1
            .request()
            .input("Fa_Description", sql.VarChar, Fa_Description)
            .query(querysFacultades.searchFacultad);
        if (result.recordset.length > 0) {
            return res.status(400).json({
                message: "La facultad ya existe",
            });
        }
        const pool2 = await getConnection();
        await pool2
            .request()
            .input("Fa_ID", sql.Int, Fa_ID)
            .input("Fa_Description", sql.VarChar, Fa_Description)
            .query(querysFacultades.putFacultad);
        res.json({
            message: "Facultad actualizada",
        });
    } catch (error) {
        res.send(error.message);
    }
};
