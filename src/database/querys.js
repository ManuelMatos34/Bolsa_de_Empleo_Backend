export default {
    insertEmpresas: "INSERT INTO EMPRESAS (Comp_ID,Comp_Name,Comp_Description,Comp_Telephone,Comp_FirstStreet,Comp_SecondStreet,Comp_City,Comp_State,Comp_PostalCode,Comp_KeyContact,Comp_KYTelephone,Comp_EmailAddress,Comp_Website,Comp_Status,User_ID) VALUES (@Comp_ID,@Comp_Name, @Comp_Description, @Comp_Telephone, @Comp_FirstStreet, @Comp_SecondStreet,@Comp_City, @Comp_State, @Comp_PostalCode, @Comp_KeyContact, @Comp_KYTelephone,@Comp_EmailAddress, @Comp_Website, @Comp_Status, @User_ID)",
    selectEmpresas: "SELECT * FROM EMPRESAS WHERE Comp_Status = 1",
    selectEmpresaById: "SELECT * FROM EMPRESAS WHERE Comp_ID = @Id AND Comp_Status = 1",
    deleteEmpresa: "UPDATE EMPRESAS SET Comp_Status = 0 WHERE Comp_ID = @Id",
    updateEmpresa: "UPDATE EMPRESAS SET Comp_Name = @Comp_Name, Comp_Description = @Comp_Description, Comp_Telephone = @Comp_Telephone, Comp_FirstStreet = @Comp_FirstStreet, Comp_SecondStreet = @Comp_SecondStreet, Comp_City = @Comp_City, Comp_State = @Comp_State, Comp_PostalCode = @Comp_PostalCode, Comp_KeyContact = @Comp_KeyContact, Comp_KYTelephone = @Comp_KYTelephone, Comp_EmailAddress = @Comp_EmailAddress, Comp_Website = @Comp_Website, Comp_Status = @Comp_Status, User_ID = @User_ID WHERE Comp_ID = @Comp_ID",
    searchEmpresa: "SELECT * FROM EMPRESAS WHERE Comp_ID = @Id",
    insertIMG: "INSERT INTO EMPRESA_LOGO (Img,Comp_ID,Comp_Logo_Status) VALUES (@Img,@Comp_ID, 1)",
    updateIMG: "UPDATE EMPRESA_LOGO SET Img = @Img WHERE Comp_ID = @Comp_ID",
}