import { getConnection, sql } from "../database/connection";
import { querysSOLICITUDES_OFERTAS_LABORALES} from "../database/querys";

export const getSolicitudesByEmpre = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("Comp_ID", sql.Numeric, req.params.id)
            .query(querysSOLICITUDES_OFERTAS_LABORALES.getSolicitudesByEmpre);
        if (result.recordset.length == 0) {
            res.status(404).json({
                message: "No hay registros",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const getAllDataBySoli = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("Job_ID", sql.Int, req.params.id)
            .query(querysSOLICITUDES_OFERTAS_LABORALES.getAllDataBySoli);
        if (result.recordset.length == 0) {
            res.status(404).json({
                message: "No hay registros",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getSoliByCarrera = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("Ca_ID", sql.Int, req.params.id)
            .query(querysSOLICITUDES_OFERTAS_LABORALES.getSoliByCarrera);
        if (result.recordset.length == 0) {
            res.status(404).json({
                message: "No hay registros",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const postSolicitud = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("Req_Date", sql.Date, new Date())
            .input("Req_SalaryExpetation", sql.Numeric, req.body.Req_SalaryExpetation)
            .input("Req_RequestStatus", sql.VarChar, req.body.Req_RequestStatus)
            .input("Job_ID", sql.Int, req.body.Job_ID)
            .input("Std_ID", sql.VarChar, req.body.Std_ID)
            .query(querysSOLICITUDES_OFERTAS_LABORALES.postSolicitud);
        if (result.rowsAffected[0] > 0) {
            res.json({
                message: "Solicitud creada",
            });
        } else {
            res.status(400).json({
                message: "No se pudo crear la solicitud",
            });
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const confirmSolicitud = async (req, res) => {   
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("Req_RequestStatus", sql.VarChar, "Apto")
            .input("Req_ID", sql.Int, req.params.id)
            .query(querysSOLICITUDES_OFERTAS_LABORALES.confirmSolicitud);
        if (result.rowsAffected[0] > 0) {
            res.json({
                message: "Solicitud confirmada",
            });
        } else {
            res.status(400).json({
                message: "No se pudo confirmar la solicitud",
            });
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const declaSolicitud = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("Req_RequestStatus", sql.VarChar, "No Apto")
            .input("Req_ID", sql.Int, req.params.id)
            .query(querysSOLICITUDES_OFERTAS_LABORALES.declaSolicitud);
        if (result.rowsAffected[0] > 0) {
            res.json({
                message: "Solicitud declinada",
            });
        } else {
            res.status(400).json({
                message: "No se pudo declinar la solicitud",
            });
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getJobsByStudent = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("Std_ID", sql.VarChar, req.params.id)
            .query(querysSOLICITUDES_OFERTAS_LABORALES.getJobsByStudent);
        if (result.recordset.length == 0) {
            res.status(404).json({
                message: "No hay registros",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}