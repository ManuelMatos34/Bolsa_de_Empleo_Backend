import { getConnection, sql } from "../database/connection";
import { querysOfertas } from "../database/querys";
import { handleExpireDateOferta } from "../helpers/expireDate";


export const getOfertas = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysOfertas.selectOfertas);
        if (result.recordset.length == 0) {
            res.json({
                message: "No hay ofertas registradas",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const postOferta = async (req, res) => {
    const {
        Job_Title,
        Job_Description,
        Job_Requeriments,
        Job_Modality,
        Job_NoVacancy,
        Job_ContractType,
        Job_Salary,
        Comp_ID,
        Ca_ID
    } = req.body;
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("Job_Title", sql.VarChar, Job_Title)
            .query(querysOfertas.searchOferta);
        if (result.recordset.length > 0) {
            return res.json({
                message: "La oferta ya existe",
            });
        }
        const creationDate = new Date();
        const expireDate = await handleExpireDateOferta(creationDate);
        const pool1 = await getConnection();
        await pool1
            .request()
            .input("Job_Title", sql.VarChar, Job_Title)
            .input("Job_Description", sql.VarChar, Job_Description)
            .input("Job_Requeriments", sql.VarChar, Job_Requeriments)
            .input("Job_CreationDate", sql.Date, creationDate)
            .input("Job_EndDate", sql.Date, expireDate)
            .input("Job_Modality", sql.VarChar, Job_Modality)
            .input("Job_NoVacancy", sql.Int, Job_NoVacancy)
            .input("Job_ContractType", sql.VarChar, Job_ContractType)
            .input("Job_Salary", sql.Numeric, Job_Salary)
            .input("Comp_ID", sql.Numeric, Comp_ID)
            .input("Job_Status", sql.Numeric, "1")
            .input("Ca_ID", sql.Int, Ca_ID)
            .query(querysOfertas.insertOferta);
        res.json(req.body);
    } catch (error) {
        res.send(error.message);
    }
};

export const getOfertaById = async (req, res) => {
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
            .query(querysOfertas.selectOfertaById);

        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.json({
                message: "Oferta no encontrada",
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const getOfertaByCarrera = async (req, res) => {
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
            .input("Ca_ID", sql.Int, id)
            .query(querysOfertas.selectOfertaByCarrera);

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

export const deleteOferta = async (req, res) => {
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
            .query(querysOfertas.deleteOferta);
        if (result.rowsAffected[0] !== 0) {
            res.json({
                message: "Oferta eliminada",
            });
        } else {
            res.json({
                message: "Oferta no encontrada",
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const updateOferta = async (req, res) => {
    const {
        Job_ID,
        Job_Title,
        Job_Description,
        Job_Requeriments,
        Job_Modality,
        Job_NoVacancy,
        Job_ContractType,
        Job_Salary,
        Ca_ID
    } = req.body;

    try {
        const poolse = await getConnection();
        const result = await poolse.request()
            .input("Job_Title", sql.VarChar, Job_Title)
            .query(querysOfertas.searchOferta);
        if (result.recordset.length > 0) {
            return res.json({
                message: "Ya existe una oferta con ese titulo",
            });
        }
        const pool = await getConnection();
        await pool
            .request()
            .input("Job_ID", sql.Int, Job_ID)
            .input("Job_Title", sql.VarChar, Job_Title)
            .input("Job_Description", sql.VarChar, Job_Description)
            .input("Job_Requeriments", sql.VarChar, Job_Requeriments)
            .input("Job_Modality", sql.VarChar, Job_Modality)
            .input("Job_NoVacancy", sql.Int, Job_NoVacancy)
            .input("Job_ContractType", sql.VarChar, Job_ContractType)
            .input("Job_Salary", sql.Numeric, Job_Salary)
            .input("Ca_ID", sql.Int, Ca_ID)
            .query(querysOfertas.updateOferta);
        res.json({
            message: "Oferta actualizada",
        });
    } catch (error) {
        res.send(error.message);
    }
};