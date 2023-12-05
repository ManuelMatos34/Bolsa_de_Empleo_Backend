import { getConnection, sql } from "../database/connection";
import { querysEmpresas } from "../database/querys";
import { sendEmail } from "../helpers/helpers";

export const getEmpresas = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querysEmpresas.selectEmpresas);
    if (result.recordset.length == 0) {
      res.status(404).json({
        message: "No hay empresas registradas",
      });
    } else {
      res.json(result.recordset);
    }
  } catch (error) {
    res.send(error.message);
  }
};

export const postEmpresas = async (req, res) => {
  const {
    Comp_ID,
    User_Email,
    User_Password,
    Comp_Name,
    Comp_Description,
    Comp_Telephone,
    Comp_FirstStreet,
    Comp_SecondStreet,
    Comp_City,
    Comp_State,
    Comp_PostalCode,
    Comp_KeyContact,
    Comp_KYTelephone,
    Comp_EmailAddress,
    Comp_Website,
  } = req.body;
  try {
    const pool1 = await getConnection();
    const result = await pool1
      .request()
      .input("Id", sql.Numeric, Comp_ID)
      .query(querysEmpresas.searchEmpresa);
    if (result.recordset.length > 0) {
      return res.status(400).json({
        message: "La empresa ya existe",
      });
    }
    const pool2 = await getConnection();
    await pool2
      .request()
      .input("Comp_ID", sql.Numeric, Comp_ID)
      .input("User_Email", sql.VarChar, User_Email)
      .input("User_Password", sql.VarChar, User_Password)
      .input("User_CreationAproval", sql.Char, "2")
      .input("Comp_Name", sql.VarChar, Comp_Name)
      .input("Comp_Description", sql.VarChar, Comp_Description)
      .input("Comp_Telephone", sql.Numeric, Comp_Telephone)
      .input("Comp_FirstStreet", sql.VarChar, Comp_FirstStreet)
      .input("Comp_SecondStreet", sql.VarChar, Comp_SecondStreet)
      .input("Comp_City", sql.VarChar, Comp_City)
      .input("Comp_State", sql.VarChar, Comp_State)
      .input("Comp_PostalCode", sql.VarChar, Comp_PostalCode)
      .input("Comp_KeyContact", sql.VarChar, Comp_KeyContact)
      .input("Comp_KYTelephone", sql.Numeric, Comp_KYTelephone)
      .input("Comp_EmailAddress", sql.VarChar, Comp_EmailAddress)
      .input("Comp_Website", sql.VarChar, Comp_Website)
      .input("Comp_Status", sql.Char, "1")
      .input("Comp_RegisterDate", sql.Date, new Date())
      .input("Rol_ID", sql.Int, 3)
      .query(querysEmpresas.insertEmpresas);
    res.json(req.body);
    sendEmail(
      Comp_Name,
      User_Email,
      `Su solicitud de registro ha sido recibida, en breve recibirá un correo con la aprobación de su solicitud. \n\nGracias por preferirnos.`
    );
    console.log("Correo enviado", User_Email);
  } catch (error) {
    res.send(error.message);
  }
};

export const getEmpresaById = async (req, res) => {
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
      .input("Id", sql.Numeric, id)
      .query(querysEmpresas.selectEmpresaById);

    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.status(404).json({
        message: "Empresa no encontrada",
      });
    }
  } catch (error) {
    res.send(error.message);
  }
};

export const deleteEmpresa = async (req, res) => {
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
      .input("Id", sql.Numeric, id)
      .query(querysEmpresas.deleteEmpresa);
    if (result.rowsAffected[0] !== 0) {
      res.json({
        message: "Empresa eliminada",
      });
    } else {
      res.status(404).json({
        message: "Empresa no encontrada",
      });
    }
  } catch (error) {
    res.send(error.message);
  }
};

export const updateEmpresa = async (req, res) => {
  const {
    Comp_ID,
    Comp_Name,
    Comp_Description,
    Comp_Telephone,
    Comp_FirstStreet,
    Comp_SecondStreet,
    Comp_City,
    Comp_KeyContact,
    Comp_KYTelephone,
    Comp_EmailAddress,
    Comp_Website,
    User_Email,
  } = req.body;

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Comp_ID", sql.Numeric, Comp_ID)
      .input("Comp_Name", sql.VarChar, Comp_Name)
      .input("Comp_Description", sql.VarChar, Comp_Description)
      .input("Comp_Telephone", sql.Numeric, Comp_Telephone)
      .input("Comp_FirstStreet", sql.VarChar, Comp_FirstStreet)
      .input("Comp_SecondStreet", sql.VarChar, Comp_SecondStreet)
      .input("Comp_City", sql.VarChar, Comp_City)
      .input("Comp_KeyContact", sql.VarChar, Comp_KeyContact)
      .input("Comp_KYTelephone", sql.Numeric, Comp_KYTelephone)
      .input("Comp_EmailAddress", sql.VarChar, Comp_EmailAddress)
      .input("Comp_Website", sql.VarChar, Comp_Website)
      .input("User_Email", sql.VarChar, User_Email)
      .query(querysEmpresas.updateEmpresa);
    res.json({
      message: "Empresa actualizada",
    });
  } catch (error) {
    res.send(error.message);
  }
};
