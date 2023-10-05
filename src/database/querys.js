export const querysEmpresas = {
    insertEmpresas: "INSERT INTO EMPRESAS (Comp_ID,Comp_Name,Comp_Description,Comp_Telephone,Comp_FirstStreet,Comp_SecondStreet,Comp_City,Comp_State,Comp_PostalCode,Comp_KeyContact,Comp_KYTelephone,Comp_EmailAddress,Comp_Website,Comp_Status,User_ID) VALUES (@Comp_ID,@Comp_Name, @Comp_Description, @Comp_Telephone, @Comp_FirstStreet, @Comp_SecondStreet,@Comp_City, @Comp_State, @Comp_PostalCode, @Comp_KeyContact, @Comp_KYTelephone,@Comp_EmailAddress, @Comp_Website, @Comp_Status, @User_ID)",
    selectEmpresas: "SELECT * FROM EMPRESAS WHERE Comp_Status = 1",
    selectEmpresaById: "SELECT * FROM EMPRESAS WHERE Comp_ID = @Id AND Comp_Status = 1",
    deleteEmpresa: "UPDATE EMPRESAS SET Comp_Status = 0 WHERE Comp_ID = @Id",
    updateEmpresa: "UPDATE EMPRESAS SET Comp_Name = @Comp_Name, Comp_Description = @Comp_Description, Comp_Telephone = @Comp_Telephone, Comp_FirstStreet = @Comp_FirstStreet, Comp_SecondStreet = @Comp_SecondStreet, Comp_City = @Comp_City, Comp_State = @Comp_State, Comp_PostalCode = @Comp_PostalCode, Comp_KeyContact = @Comp_KeyContact, Comp_KYTelephone = @Comp_KYTelephone, Comp_EmailAddress = @Comp_EmailAddress, Comp_Website = @Comp_Website, Comp_Status = @Comp_Status, User_ID = @User_ID WHERE Comp_ID = @Comp_ID",
    searchEmpresa: "SELECT * FROM EMPRESAS WHERE Comp_ID = @Id",
    insertIMG: "INSERT INTO EMPRESA_LOGO (Img,Comp_ID,Comp_Logo_Status) VALUES (@Img,@Comp_ID, 1)",
    updateIMG: "UPDATE EMPRESA_LOGO SET Img = @Img WHERE Comp_ID = @Comp_ID",
};

export const querysUsuarios = {
    selectUsuarios: "SELECT * FROM USUARIOS WHERE User_Status = 1",
    searchUsuario: "SELECT * FROM USUARIOS WHERE User_Email = @User_Email",
    insertUsuario: "INSERT INTO USUARIOS (User_Password,User_Email,User_CreationDate,User_PaswdExpire,User_CreationAproval,User_Status,Rol_ID) VALUES (@User_Password,@User_Email,@User_CreationDate,@User_PaswdExpire,@User_CreationAproval,@User_Status,@Rol_ID)",
    selectUsuarioById: "SELECT * FROM USUARIOS WHERE User_ID = @Id AND User_Status = 1",
    deleteUsuario: "UPDATE USUARIOS SET User_Status = 0 WHERE User_ID = @Id",
    searchUsuarioById: "SELECT * FROM USUARIOS WHERE User_ID = @User_ID",
    updatePasswordUser: "UPDATE USUARIOS SET User_Password = @New_Password, User_PaswdExpire = @User_PaswdExpire WHERE User_ID = @User_ID",
    updateMailUsuario: "UPDATE USUARIOS SET User_Email = @User_Email WHERE User_ID = @User_ID",
    searchPass: "SELECT User_Password FROM USUARIOS WHERE User_ID = @User_ID",
    searchEmail: "SELECT User_Email FROM USUARIOS WHERE User_ID = @User_ID",
    validateUser: "UPDATE USUARIOS SET User_CreationAproval = @User_CreationAproval WHERE User_ID = @Id",
    getValidateUser: "SELECT * FROM USUARIOS WHERE User_CreationAproval = @User_CreationAproval",
};

export const querysOfertas = {
    insertOferta: "INSERT INTO OFERTA_LABORAL (Job_Title,Job_Description,Job_Requeriments,Job_CreationDate,Job_EndDate,Job_Modality,Job_NoVacancy,Job_ContractType,Job_Salary,Comp_ID,Job_Status,Ca_ID) VALUES (@Job_Title,@Job_Description,@Job_Requeriments,@Job_CreationDate,@Job_EndDate,@Job_Modality,@Job_NoVacancy,@Job_ContractType,@Job_Salary,@Comp_ID,@Job_Status,@Ca_ID)",
    selectOfertas: "SELECT * FROM OFERTA_LABORAL WHERE Job_Status = 1",
    selectOfertaById: "SELECT * FROM OFERTA_LABORAL WHERE Job_ID = @Id AND Job_Status = 1",
    deleteOferta: "UPDATE OFERTA_LABORAL SET Job_Status = 0 WHERE Job_ID = @Id",
    updateOferta: "UPDATE OFERTA_LABORAL SET Job_Title = @Job_Title, Job_Description = @Job_Description, Job_Requeriments = @Job_Requeriments, Job_Modality = @Job_Modality, Job_NoVacancy = @Job_NoVacancy, Job_ContractType = @Job_ContractType, Job_Salary = @Job_Salary, Ca_ID = @Ca_ID WHERE Job_ID = @Job_ID",
    searchOferta: "SELECT * FROM OFERTA_LABORAL WHERE Job_Title = @Job_Title",
};
