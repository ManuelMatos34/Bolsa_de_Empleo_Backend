import { getConnection, sql } from "../database/connection";
import { querysUsuarios } from "../database/querys";
import { handleEncrypt, handleCompare } from "../helpers/handleEncrypt";
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
    const { User_Password, User_Email, Rol_ID, User_CreationAproval } = req.body;
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
            .input("User_CreationAproval", sql.Char, User_CreationAproval)
            .input("User_Status", sql.Char, "1")
            .input("Rol_ID", sql.Int, Rol_ID)
            .query(querysUsuarios.insertUsuario);
        res.json(req.body);
    } catch (error) {
        res.send(error.message);
    }
};

export const getUsuarioById = async (req, res) => {
    try {
        const { id } = req.params;
        if (id === null) {
            return res.status(400).json({
                message: "El id es obligatorio",
            });
        }
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Id", sql.Int, id)
            .query(querysUsuarios.selectUsuarioById);

        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({
                message: "Usuario no encontrado",
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        if (id === null) {
            return res.status(400).json({
                message: "El id es obligatorio",
            });
        }
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Id", sql.Int, id)
            .query(querysUsuarios.deleteUsuario);
        if (result.rowsAffected[0] !== 0) {
            res.json({
                message: "Usuario eliminado",
            });
        } else {
            res.status(404).json({
                message: "Usuario no encontrado",
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};

export const updateUsuario = async (req, res) => {
    const { User_ID, New_Password, User_Password, New_User_Email } = req.body;
    try {
        if (New_Password !== "" && User_Password !== "") {
            if (New_Password !== "" && User_Password !== "") {
                const poolUser = await getConnection();
                const result = await poolUser
                    .request()
                    .input("User_ID", sql.Int, User_ID)
                    .query(querysUsuarios.searchPass);
                const r = result.recordset[0];
                const encriptedPassword = r.User_Password;
                const comparedPassword = await handleCompare(User_Password, encriptedPassword);
                if (comparedPassword === false) {
                    return res.status(400).json({
                        message: "La contraseña es incorrecta",
                    });
                } else {
                    const New_Password_encripted = await handleEncrypt(New_Password);
                    const new_date_expire = await handleExpireDate(new Date());
                    const pool = await getConnection();
                    await pool
                        .request()
                        .input("User_ID", sql.Int, User_ID)
                        .input("New_Password", sql.VarChar, New_Password_encripted)
                        .input("User_PaswdExpire", sql.Date, new_date_expire)
                        .query(querysUsuarios.updatePasswordUser);
                }
            } else {
                return res.status(400).json({
                    message: "Introduce las dos contraseñas",
                });
            }
        }

        if (New_User_Email !== "") {
            const pool1 = await getConnection();
            const result1 = await pool1
                .request()
                .input("User_Email", sql.VarChar, New_User_Email)
                .query(querysUsuarios.searchUsuario);
            if (result1.recordset.length > 0) {
                return res.status(400).json({
                    message: "Ya existe un usuario con ese correo electrónico",
                });
            }
            else {
                const pool2 = await getConnection();
                await pool2
                    .request()
                    .input("User_ID", sql.Int, User_ID)
                    .input("User_Email", sql.VarChar, New_User_Email)
                    .query(querysUsuarios.updateMailUsuario);
            }
        }
        res.json({
            message: "Usuario actualizado",
        });
    } catch (error) {
        res.send(error.message);
    }
};
