import { getConnection, sql } from "../database/connection";
import { querysESTUDIANTES } from "../database/querys";

export const getEstudianteById = async (req, res) => {
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
            .input("Std_ID", sql.VarChar, id)
            .query(querysESTUDIANTES.getStdById);

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

export const putEstudiantes = async (req, res) => {
    try {
        const pool = await getConnection();
        const {
            Std_ID,
            Std_FirstName,
            Std_SecondName,
            Std_LastName,
            Std_PersonalEmail,
            Std_FirstStreet,
            Std_SecondStreet,
            Std_City,
            Std_State,
            Std_PostalCode,
            Std_Telephone,
            Std_HomePhone,
        } = req.body; // Extraer los valores del objeto JSON

        await pool
            .request()
            .input("Std_ID", sql.VarChar, Std_ID)
            .input("Std_FirstName", sql.VarChar, Std_FirstName)
            .input("Std_SecondName", sql.VarChar, Std_SecondName)
            .input("Std_LastName", sql.VarChar, Std_LastName)
            .input("Std_PersonalEmail", sql.VarChar, Std_PersonalEmail)
            .input("Std_FirstStreet", sql.VarChar, Std_FirstStreet)
            .input("Std_SecondStreet", sql.VarChar, Std_SecondStreet)
            .input("Std_City", sql.VarChar, Std_City)
            .input("Std_State", sql.VarChar, Std_State)
            .input("Std_PostalCode", sql.VarChar, Std_PostalCode)
            .input("Std_Telephone", sql.Numeric, Std_Telephone)
            .input("Std_HomePhone", sql.Numeric, Std_HomePhone)
            .query(querysESTUDIANTES.putStd);
        res.json({
            message: "Registro actualizado",
        });
    } catch (error) {
        res.send(error.message);
    }
};