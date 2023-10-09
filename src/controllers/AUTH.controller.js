import { getConnection, sql } from "../database/connection";
import { querysAUTH } from "../database/querys";
import { handleCompare } from "../helpers/handleEncrypt";

export const authStudent = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("Std_ID", sql.VarChar, req.body.Std_ID)
            .input("Std_Password", sql.VarChar, req.body.Std_Password)
            .query(querysAUTH.getStudent);
        if (result.recordset.length == 0) {
            res.status(404).json({
                message: "Datos incorrectos",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const authUser = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("User_Email", sql.VarChar, req.body.User_Email)
            .query(querysAUTH.getUser);
        const r = result.recordset[0];
        const encriptedPassword = r.User_Password;
        const comparedPassword = await handleCompare(req.body.User_Password, encriptedPassword);
        if (comparedPassword) {
            res.json(result.recordset);
        } else {
            res.status(404).json({
                message: "Datos incorrectos",
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};