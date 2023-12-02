import { getConnection, sql } from "../database/connection";
import { querysIMAGES } from "../database/querys";

export const getImgEst = async (req, res) => {
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
      .input("Id", sql.VarChar, id)
      .query(querysIMAGES.getImgEst);

    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.json({
        message: "Registro no encontrado",
      });
    }
  } catch (error) {
    res.send(error.message);
  }
};

export const getImgEmp = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Comp_ID", sql.Numeric, id)
      .query(querysIMAGES.getImgEmp);

    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.json({
        message: "Registro no encontrado",
      });
    }
  } catch (error) {
    res.send(error.message);
  }
};

export const getImgAdmin = async (req, res) => {
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
      .input("User_ID", sql.Int, id)
      .query(querysIMAGES.verifyAdminImg);

    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.json({
        message: "Registro no encontrado",
      });
    }
  } catch (error) {
    res.send(error.message);
  }
};

export const setImgEst = async (req, res) => {
  try {
    const { id } = req.params;
    const { img } = req.files;

    const pool_img2 = await getConnection();
    const result = await pool_img2
      .request()
      .input("Std_ID", sql.VarChar, id)
      .query(querysIMAGES.verifyImg);
    if (result.recordset.length > 0) {
      const pool_img = await getConnection();
      await pool_img
        .request()
        .input("Img", sql.VarBinary, img.data)
        .input("Std_ID", sql.VarChar, id)
        .query(querysIMAGES.updateImgEst);
    } else {
      const pool_img = await getConnection();
      await pool_img
        .request()
        .input("Img", sql.VarBinary, img.data)
        .input("Std_ID", sql.VarChar, id)
        .query(querysIMAGES.postImgEst);
    }
    res.sendStatus(200);
  } catch (error) {
    res.json(error.message);
  }
};

export const setImgAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { img } = req.files;

    const pool_img2 = await getConnection();
    const result = await pool_img2
      .request()
      .input("User_ID", sql.Int, id)
      .query(querysIMAGES.verifyAdminImg);
    if (result.recordset.length > 0) {
      const pool_img = await getConnection();
      await pool_img
        .request()
        .input("Img", sql.VarBinary, img.data)
        .input("User_ID", sql.Int, id)
        .query(querysIMAGES.updateImgAdmin);
    } else {
      const pool_img = await getConnection();
      await pool_img
        .request()
        .input("Img", sql.VarBinary, img.data)
        .input("User_ID", sql.Int, id)
        .query(querysIMAGES.postImgAdmin);
    }
    res.sendStatus(200);
  } catch (error) {
    res.json(error.message);
  }
};

export const setImgEmpresas = async (req, res) => {
  try {
    const { id } = req.params;
    const { img } = req.files;

    const pool_img2 = await getConnection();
    const result = await pool_img2
      .request()
      .input("Comp_ID", sql.Numeric, id)
      .query(querysIMAGES.getImgEmp);
    if (result.recordset.length > 0) {
      const pool_img = await getConnection();
      await pool_img
        .request()
        .input("Img", sql.VarBinary, img.data)
        .input("Comp_ID", sql.Numeric, id)
        .query(querysIMAGES.updateImgEmp);
    } else {
      const pool_img = await getConnection();
      await pool_img
        .request()
        .input("Img", sql.VarBinary, img.data)
        .input("Comp_ID", sql.Numeric, id)
        .query(querysIMAGES.postImgEmp);
    }
    res.sendStatus(200);
  } catch (error) {
    res.json(error.message);
  }
};
