import { GetConn } from "../database/connection";
const sql = require("msnodesqlv8");

export const getEmpresas = async (req, res) => {
    const query = "SELECT * FROM EMPRESAS";
    const cnn = GetConn();
    try{
        await sql.query(cnn, query, (err, rows) => {
            if (rows.length !== 0) {
                res.json(rows);
            } else {
                res.json("No se encontraron empresas");
            }
        }); 
    }
    catch{
        res.json({message: "Error al obtener las empresas"});
    }    
};
