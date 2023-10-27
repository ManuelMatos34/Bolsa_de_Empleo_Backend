import { getConnection, sql } from "../database/connection";
import { querysEXPERIENCIA } from "../database/querys";

export const getExp = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysEXPERIENCIA.getExp);
        if (result.recordset.length == 0) {
            res.json({
                message: "No hay registros",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const postExp = async (req, res) => {
    const {
        Position,
        Company,
        ContractType,
        Country,
        Modality,
        InitiaDate,
        EndDate,
        Std_ID
    } = req.body;
    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("Position", sql.VarChar, Position)
            .input("Company", sql.VarChar, Company)
            .input("ContractType", sql.VarChar, ContractType)
            .input("Country", sql.VarChar, Country)
            .input("Modality", sql.VarChar, Modality)
            .input("InitiaDate", sql.VarChar, InitiaDate)
            .input("EndDate", sql.VarChar, EndDate)
            .input("Std_ID", sql.VarChar, Std_ID)
            .query(querysEXPERIENCIA.postExp);
        res.json(req.body);
    } catch (error) {
        res.send(error.message);
    }
};

export const getExpById = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Exp_ID", sql.Int, id)
            .query(querysEXPERIENCIA.getExpById);
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.json({
                message: "No hay registros",
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const getExpByEst = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Std_ID", sql.VarChar, id)
            .query(querysEXPERIENCIA.getExpByEst);
        if (result.recordset.length > 0) {
            res.json(result.recordset);
        } else {
            res.json({
                message: "No hay registros",
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const deleteExp = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Exp_ID", sql.Int, id)
            .query(querysEXPERIENCIA.deleteExp);
        if (result.rowsAffected[0] !== 0) {
            res.json({
                message: "Registro eliminado",
            });
        } else {
            res.json({
                message: "No hay registros",
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const putExp = async (req, res) => {
    const {
        Exp_ID,
        Position,
        Company,
        ContractType,
        Country,
        Modality,
        InitiaDate,
        EndDate,
        Std_ID
    } = req.body;
    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("Exp_ID", sql.Int, Exp_ID)
            .input("Position", sql.VarChar, Position)
            .input("Company", sql.VarChar, Company)
            .input("ContractType", sql.VarChar, ContractType)
            .input("Country", sql.VarChar, Country)
            .input("Modality", sql.VarChar, Modality)
            .input("InitiaDate", sql.VarChar, InitiaDate)
            .input("EndDate", sql.VarChar, EndDate)
            .input("Std_ID", sql.VarChar, Std_ID)
            .query(querysEXPERIENCIA.putExp);
        res.json(req.body);
    } catch (error) {
        res.send(error.message);
    }
};