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
        if (id === "") {
            return res.json({
                message: "El id es obligatorio",
            });
        }
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Id", sql.Numeric, id)
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

export const postImgEmp = async (req, res) => {
    try {
        const pool_img = await getConnection();
        await pool_img
            .request()
            .input("Img", sql.VarBinary, req.files.archivo.data)
            .input("id", sql.Numeric, req.params.id)
            .query();
        res.json(req.body);
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




