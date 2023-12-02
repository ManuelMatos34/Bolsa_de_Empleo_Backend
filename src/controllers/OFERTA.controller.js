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
    Job_ContractType,
    Comp_ID,
    Ca_ID,
    Job_EndDate,
    Job_Location,
  } = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Job_Title", sql.VarChar, Job_Title)
      .query(querysOfertas.searchOfertaByTitle);
    if (result.recordset.length > 0) {
      return res.json({
        message: "La oferta ya existe",
      });
    }
    const creationDate = new Date();
    const pool1 = await getConnection();
    await pool1
      .request()
      .input("Job_Title", sql.VarChar, Job_Title)
      .input("Job_Description", sql.VarChar, Job_Description)
      .input("Job_Requeriments", sql.VarChar, Job_Requeriments)
      .input("Job_CreationDate", sql.Date, creationDate)
      .input("Job_EndDate", sql.Date, Job_EndDate)
      .input("Job_Modality", sql.VarChar, Job_Modality)
      .input("Job_ContractType", sql.VarChar, Job_ContractType)
      .input("Comp_ID", sql.Numeric, Comp_ID)
      .input("Job_Status", sql.Char, "1")
      .input("Ca_ID", sql.Int, Ca_ID)
      .input("Job_Location", sql.VarChar, Job_Location)
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

export const getOfertasByComp = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Comp_ID", sql.Numeric, id)
      .query(querysOfertas.selectOfertasByComp);

    if (result.recordset.length > 0) {
      res.json(result.recordset);
    } else {
      res.json({
        message: "Registro no encontrado",
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
    Job_ContractType,
    Job_EndDate,
    Ca_ID,
    Job_Location,
  } = req.body;

  try {
    const poolse = await getConnection();
    const result = await poolse
      .request()
      .input("Job_ID", sql.Int, Job_ID)
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
      .input("Job_ContractType", sql.VarChar, Job_ContractType)
      .input("Job_EndDate", sql.Date, Job_EndDate)
      .input("Ca_ID", sql.Int, Ca_ID)
      .input("Job_Location", sql.VarChar, Job_Location)
      .query(querysOfertas.updateOferta);
    res.json({
      message: "Oferta actualizada",
    });
  } catch (error) {
    res.send(error.message);
  }
};
