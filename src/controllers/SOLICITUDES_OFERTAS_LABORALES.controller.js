import { getConnection, sql } from "../database/connection";
import { querysSOLICITUDES_OFERTAS_LABORALES } from "../database/querys";
import { sendEmail } from "../helpers/helpers";

export const getSolicitudesByEmpre = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Comp_ID", sql.Numeric, req.params.id)
      .query(querysSOLICITUDES_OFERTAS_LABORALES.getSolicitudesByEmpre);
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

export const getAllDataBySoli = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Job_ID", sql.Int, req.params.id)
      .query(querysSOLICITUDES_OFERTAS_LABORALES.getAllDataBySoli);
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

export const getSoliByCarrera = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Ca_ID", sql.Int, req.params.id)
      .query(querysSOLICITUDES_OFERTAS_LABORALES.getSoliByCarrera);
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

export const postSolicitud = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Req_Date", sql.Date, new Date())
      .input("Req_SalaryExpetation", sql.Numeric, req.body.Req_SalaryExpetation)
      .input("Req_RequestStatus", sql.VarChar, "2")
      .input("Job_ID", sql.Int, req.body.Job_ID)
      .input("Std_ID", sql.VarChar, req.body.Std_ID)
      .query(querysSOLICITUDES_OFERTAS_LABORALES.postSolicitud);
    if (result.rowsAffected[0] > 0) {
      sendEmail(
        req.body.userName,
        req.body.userEmail,
        "Tu postulacion ha sido enviada con exito"
      );
      res.json({
        message: "Solicitud creada",
      });
    } else {
      res.json({
        message: "No se pudo crear la solicitud",
      });
    }
  } catch (error) {
    res.send(error.message);
  }
};

export const confirmSolicitud = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Req_RequestStatus", sql.VarChar, "1")
      .input("Req_ID", sql.Int, req.params.id)
      .query(querysSOLICITUDES_OFERTAS_LABORALES.confirmSolicitud);
    if (result.rowsAffected[0] > 0) {
      sendEmail(
        req.body.nameUser,
        req.body.emailUser,
        "Nos complace informar que ha sido tomado/a en cuenta para la vacante solicitada. Pronto nos comunicaremos usted para proporcionar más detalles sobre el proceso de incorporación y discutir los siguientes pasos. Agradecemos su interés y esperamos dar la bienvenida al nuevo miembro a nuestro equipo."
      );
      res.json({
        message: "Solicitud confirmada",
      });
    } else {
      res.json({
        message: "No se pudo confirmar la solicitud",
      });
    }
  } catch (error) {
    res.send(error.message);
  }
};

export const declaSolicitud = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Req_RequestStatus", sql.VarChar, "0")
      .input("Req_ID", sql.Int, req.params.id)
      .query(querysSOLICITUDES_OFERTAS_LABORALES.declaSolicitud);
    if (result.rowsAffected[0] > 0) {
      sendEmail(
        req.body.nameUser,
        req.body.emailUser,
        "Lamentamos informar que, tras revisar cuidadosamente su candidatura para la vacante, no hemos procedido con su selección en esta ocasión. Agradecemos su interés en formar parte de nuestro equipo y le deseamos éxito en sus futuros esfuerzos profesionales."
      );
      res.json({
        message: "Solicitud declinada",
      });
    } else {
      res.json({
        message: "No se pudo declinar la solicitud",
      });
    }
  } catch (error) {
    res.send(error.message);
  }
};

export const getJobsByStudent = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Std_ID", sql.VarChar, req.params.id)
      .query(querysSOLICITUDES_OFERTAS_LABORALES.getJobsByStudent);
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
