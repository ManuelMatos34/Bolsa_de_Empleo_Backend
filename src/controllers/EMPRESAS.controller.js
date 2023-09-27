import { getConnection, sql } from "../database/connection";

export const getEmpresas = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query("SELECT * FROM EMPRESAS");
        res.json(result.recordset);
    } catch (error) {
        res.send(error.message);
    }
};

export const postEmpresas = async (req, res) => {
    const {
        Comp_ID,
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
        Img_ID,
        Comp_Website,
        Comp_Status,
        User_ID,
    } = req.body;

    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Comp_ID", sql.Numeric, Comp_ID)
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
            .input("Img_ID", sql.Int, Img_ID)
            .input("Comp_Website", sql.VarChar, Comp_Website)
            .input("Comp_Status", sql.Char, Comp_Status)
            .input("User_ID", sql.Int, User_ID)
            .query(
                "INSERT INTO EMPRESAS (Comp_ID,Comp_Name,Comp_Description,Comp_Telephone,Comp_FirstStreet,Comp_SecondStreet,Comp_City,Comp_State,Comp_PostalCode,Comp_KeyContact,Comp_KYTelephone,Comp_EmailAddress,Img_ID,Comp_Website,Comp_Status,User_ID) VALUES (@Comp_ID,@Comp_Name, @Comp_Description, @Comp_Telephone, @Comp_FirstStreet, @Comp_SecondStreet,@Comp_City, @Comp_State, @Comp_PostalCode, @Comp_KeyContact, @Comp_KYTelephone,@Comp_EmailAddress, @Img_ID, @Comp_Website, @Comp_Status, @User_ID)"
            );
        res.json(req.body);
    } catch (error) {
        res.send(error.message);
    }
};
