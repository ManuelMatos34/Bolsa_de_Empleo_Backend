import { getConnection, sql } from "../database/connection";
import { querysUsuarios } from "../database/querys";
import { handleEncrypt } from "../helpers/handleEncrypt"
import { handleExpireDate } from "../helpers/expireDate";

export const getUsuarios = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysUsuarios.selectUsuarios);
        if (result.recordset.length == 0) {
            res.status(404).json({
                message: "No hay usuarios registrados",
            });
        } else {
            res.json(result.recordset);
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const postUsuario = async (req, res) => {
    const {
        User_Password,
        User_Email,
        Rol_ID
    } = req.body;
    try {
        const pool1 = await getConnection();
        const result = await pool1
            .request()
            .input("User_Email", sql.VarChar, User_Email)
            .query(querysUsuarios.searchUsuario);
        if (result.recordset.length > 0) {
            return res.status(400).json({
                message: "Ya existe un usuario con ese correo electrónico",
            });
        }
        const encryptedPassword = await handleEncrypt(User_Password);
        const creationDate = new Date();
        const expireDate = await handleExpireDate(creationDate);
        const pool2 = await getConnection();
        await pool2
            .request()
            .input("User_Password", sql.VarChar, encryptedPassword)
            .input("User_Email", sql.VarChar, User_Email)
            .input("User_CreationDate", sql.Date, creationDate)
            .input("User_PaswdExpire", sql.Date, expireDate)
            .input("User_CreationAproval", sql.Char, "0")
            .input("User_Status", sql.Char, "1")
            .input("Rol_ID", sql.Int, Rol_ID)
            .query(querysUsuarios.insertUsuario);
        res.json(req.body);
    } catch (error) {
        res.send(error.message);
    }
};