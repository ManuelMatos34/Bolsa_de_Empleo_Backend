import { getConnection, sql } from "../database/connection";
import { querysRoles } from "../database/querys";

export const getRoles = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysRoles.getRoles);
        if (result.recordset.length == 0) {
            res.status(404).json({
                message: "No hay Roles registrados",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const postRol = async (req, res) => {
    const {
        Rol_Description
    } = req.body;
    try {
        const pool1 = await getConnection();
        const result = await pool1
            .request()
            .input("Rol_Description", sql.VarChar, Rol_Description)
            .query(querysRoles.searchRol);
        if (result.recordset.length > 0) {
            return res.status(400).json({
                message: "El rol ya existe",
            });
        }
        const pool2 = await getConnection();
        await pool2
            .request()
            .input("Rol_Description", sql.VarChar, Rol_Description)
            .query(querysRoles.postRol);
        res.json(req.body);
    } catch (error) {
        res.send(error.message);
    }
};

export const getRolById = async (req, res) => {
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
            .query(querysRoles.getRolById);

        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({
                message: "Rol no encontrado",
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const deleteRol = async (req, res) => {
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
            .query(querysRoles.deleteRol);
        if (result.rowsAffected[0] !== 0) {
            res.json({
                message: "Rol eliminado",
            });
        } else {
            res.status(404).json({
                message: "Rol no encontrado",
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const putRol = async (req, res) => {
    const {
        Rol_ID,
        Rol_Description,
    } = req.body;
    try {
        const pool1 = await getConnection();
        const result = await pool1
            .request()
            .input("Rol_Description", sql.VarChar, Rol_Description)
            .query(querysRoles.searchRol);
        if (result.recordset.length > 0) {
            return res.status(400).json({
                message: "El rol ya existe",
            });
        }
        const pool2 = await getConnection();
        await pool2
            .request()
            .input("Rol_ID", sql.Int, Rol_ID)
            .input("Rol_Description", sql.VarChar, Rol_Description)
            .query(querysRoles.putRol);
        res.json({
            message: "Rol actualizado",
        });
    } catch (error) {
        res.send(error.message);
    }
};