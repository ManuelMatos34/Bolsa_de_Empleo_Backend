import { getConnection, sql } from "../database/connection";
import { querysCV } from "../database/querys";
import { sendEmail } from "../helpers/helpers";

export const postCv = async (req, res) => {
    try {
        const { id } = req.params;
        const { cv } = req.files;

        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Std_ID", sql.VarChar, id)
            .query(querysCV.searchCV);
        if (result.recordset.length === 0) {
            const pool2 = await getConnection();
            await pool2
                .request()
                .input("Std_ID", sql.VarChar, id)
                .input("CV", sql.VarBinary, cv.data)
                .query(querysCV.postCv);
        } else {
            const pool3 = await getConnection();
            await pool3
                .request()
                .input("Std_ID", sql.VarChar, id)
                .input("CV", sql.VarBinary, cv.data)
                .query(querysCV.putCv);
        }
        res.json({
            message: "CV uploaded successfully!",
        });
    } catch (error) {
        res.send(error.message);
    }
};


export const getCv = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Std_ID", sql.VarChar, id)
            .query(querysCV.getCv);

        if (result.recordset.length > 0) {
            res.json({
                message: result.recordset[0],
            });
        } else {
            // Devuelve un mensaje adecuado si no se encontraron registros.
            res.json({ message: "No se encontraron registros." });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const send = async (req, res) => {
    try {
        sendEmail();  
    } catch (error) {
        res.status(500).send(error.message);
    }
};