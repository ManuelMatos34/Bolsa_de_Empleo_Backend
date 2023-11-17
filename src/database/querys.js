export const querysEmpresas = {
    insertEmpresas: "INSERT INTO EMPRESAS (Comp_ID,User_Email,User_Password,User_CreationAproval,Comp_Name,Comp_Description,Comp_Telephone,Comp_FirstStreet,Comp_SecondStreet,Comp_City,Comp_State,Comp_PostalCode,Comp_KeyContact,Comp_KYTelephone,Comp_EmailAddress,Comp_Website,Comp_Status,User_ID) VALUES (@Comp_ID,@User_Email,@User_Password,@User_CreationAproval,@Comp_Name, @Comp_Description, @Comp_Telephone, @Comp_FirstStreet, @Comp_SecondStreet,@Comp_City, @Comp_State, @Comp_PostalCode, @Comp_KeyContact, @Comp_KYTelephone,@Comp_EmailAddress, @Comp_Website, @Comp_Status, @User_ID)",
    selectEmpresas: "SELECT * FROM EMPRESAS",
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
    searchUsuarioById: "SELECT * FROM USUARIOS WHERE User_ID = @User_ID AND User_Status = 1",
    updatePasswordUser: "UPDATE USUARIOS SET User_Password = @New_Password, User_PaswdExpire = @User_PaswdExpire WHERE User_ID = @User_ID",
    updateMailUsuario: "UPDATE USUARIOS SET User_Email = @User_Email WHERE User_ID = @User_ID",
    searchPass: "SELECT User_Password FROM USUARIOS WHERE User_ID = @User_ID",
    searchEmail: "SELECT User_Email FROM USUARIOS WHERE User_ID = @User_ID",
    validateUser: "UPDATE USUARIOS SET User_CreationAproval = @User_CreationAproval WHERE User_ID = @Id",
    getValidateUser: "SELECT * FROM USUARIOS WHERE User_CreationAproval = @User_CreationAproval",
};

export const querysOfertas = {
    selectOfertaByCarrera: "SELECT O.*, E.[Comp_Name] FROM [OFERTA_LABORAL] AS O INNER JOIN [EMPRESAS] AS E ON O.[Comp_ID] = E.[Comp_ID] WHERE O.[Ca_ID] = @Ca_ID AND O.[Job_Status] = 1;",
    insertOferta: "INSERT INTO OFERTA_LABORAL (Job_Title,Job_Description,Job_Requeriments,Job_CreationDate,Job_EndDate,Job_Modality,Job_NoVacancy,Job_ContractType,Job_Salary,Comp_ID,Job_Status,Ca_ID) VALUES (@Job_Title,@Job_Description,@Job_Requeriments,@Job_CreationDate,@Job_EndDate,@Job_Modality,@Job_NoVacancy,@Job_ContractType,@Job_Salary,@Comp_ID,@Job_Status,@Ca_ID)",
    selectOfertas: "SELECT * FROM OFERTA_LABORAL WHERE Job_Status = 1",
    selectOfertasByComp: "SELECT * FROM OFERTA_LABORAL WHERE Comp_ID = @Comp_ID",
    selectOfertaById: "SELECT * FROM OFERTA_LABORAL WHERE Job_ID = @Id AND Job_Status = 1",
    deleteOferta: "UPDATE OFERTA_LABORAL SET Job_Status = 0 WHERE Job_ID = @Id",
    updateOferta: "UPDATE OFERTA_LABORAL SET Job_Title = @Job_Title, Job_Description = @Job_Description, Job_Requeriments = @Job_Requeriments, Job_Modality = @Job_Modality, Job_NoVacancy = @Job_NoVacancy, Job_ContractType = @Job_ContractType, Job_Salary = @Job_Salary, Ca_ID = @Ca_ID WHERE Job_ID = @Job_ID",
    searchOferta: "SELECT * FROM OFERTA_LABORAL WHERE Job_Title = @Job_Title",
};
export const querysCalificaciones = {
    selectCalificaciones: "SELECT c.Rev_ID ,c.Rev_Confirmation ,c.Rev_Description ,c.Std_ID, e.Std_FisrtName, e.Std_SecondName ,c.Job_ID ,c.Rev_Status FROM CALIFICACIONES c INNER JOIN ESTUDIANTES e ON c.Std_ID = e.Std_ID WHERE e.Ca_ID = @Ca_ID;",
    selectCalificacionesById: "SELECT c.Rev_ID,c.Rev_Confirmation,c.Rev_Description ,c.Std_ID,c.Job_ID,c.Rev_Status,e.Std_FisrtName,e.Std_SecondName,e.Std_LastName ,o.Job_Title FROM CALIFICACIONES c INNER JOIN ESTUDIANTES e ON c.Std_ID = e.Std_ID INNER JOIN OFERTA_LABORAL o ON c.Job_ID = o.Job_ID WHERE Rev_ID = @Id;",
    postCalificacion: "INSERT INTO CALIFICACIONES (Rev_Confirmation,Rev_Description,Std_ID,Job_ID,Rev_Status) VALUES (@Rev_Confirmation,@Rev_Description,@Std_ID,@Job_ID,@Rev_Status)",
    putCalificacion: "UPDATE CALIFICACIONES SET Rev_Confirmation = @Rev_Confirmation, Rev_Description = @Rev_Description WHERE Rev_ID = @Rev_ID",
};

export const querysCarreras = {
    getCarreras: "SELECT * FROM CARRERAS WHERE Ca_Status = 1",
    searchCarrera: "SELECT * FROM CARRERAS WHERE Ca_Description = @Ca_Description",
    postCarrera: "INSERT INTO CARRERAS (Ca_Description,Fac_ID,Ca_Status) VALUES (@Ca_Description,@Fac_ID,1)",
    getCarreraById: "SELECT * FROM CARRERAS WHERE Ca_ID = @Id and Ca_Status = 1",
    deleteCarrera: "UPDATE CARRERAS SET Ca_Status = 0 WHERE Ca_ID = @Id",
    putCarrera: "UPDATE CARRERAS SET Ca_Description = @Ca_Description, Fac_ID = @Fac_ID WHERE Ca_ID = @Ca_ID",
};

export const querysFacultades = {
    getFacultades: "SELECT * FROM FACULTADES WHERE Fa_Status = 1",
    searchFacultad: "SELECT * FROM FACULTADES WHERE Fa_Description = @Fa_Description",
    postFacultad: "INSERT INTO FACULTADES (Fa_Description,Fa_Status) VALUES (@Fa_Description,@Fa_Status)",
    getFacultadById: "SELECT * FROM FACULTADES WHERE Fa_ID = @Id and Fa_Status = 1",
    deleteFacultad: "UPDATE FACULTADES SET Fa_Status = 0 WHERE Fa_ID = @Id",
    putFacultad: "UPDATE FACULTADES SET Fa_Description = @Fa_Description WHERE Fa_ID = @Fa_ID",
};

export const querysHabilidades = {
    getHabilidades: "SELECT H.Skill_ID, H.Skill, C.Ca_ID, C.Ca_Description, H.Skill_Status FROM HABILIDADES AS H INNER JOIN CARRERAS AS C ON H.Ca_ID = C.Ca_ID",
    searchHabilidad: "SELECT * FROM HABILIDADES WHERE Skill = @Skill AND Ca_ID = @Ca_ID",
    postHabilidad: "INSERT INTO HABILIDADES (Skill,Ca_ID,Skill_Status) VALUES (@Skill,@Ca_ID,1)",
    getHabilidadById: "SELECT * FROM HABILIDADES WHERE Skill_ID = @Id and Skill_Status = 1",
    deleteHabilidad: "UPDATE HABILIDADES SET Skill_Status = 0 WHERE Skill_ID = @Id",
    putHabilidad: "UPDATE HABILIDADES SET Skill = @Skill WHERE Skill_ID = @Skill_ID"
};

export const querysRoles = {
    getRoles: "SELECT * FROM ROLES WHERE Rol_Status = 1",
    searchRol: "SELECT * FROM ROLES WHERE Rol_Description = @Rol_Description",
    postRol: "INSERT INTO ROLES (Rol_Description,Rol_Status) VALUES (@Rol_Description,1)",
    getRolById: "SELECT * FROM ROLES WHERE Rol_ID = @Id and Rol_Status = 1",
    deleteRol: "UPDATE ROLES SET Rol_Status = 0 WHERE Rol_ID = @Id",
    putRol: "UPDATE ROLES SET Rol_Description = @Rol_Description WHERE Rol_ID = @Rol_ID"
};

export const querysREL_ESTUDIANTES_HABILIDADES = {
    getHabNotEst: "SELECT H.Skill_ID, H.Skill FROM HABILIDADES AS H WHERE H.Ca_ID = @Ca_ID and H.Skill_ID NOT IN (SELECT REH.Skill_ID FROM REL_ESTUDIANTES_HABILIDADES AS REH WHERE REH.Std_ID = @Std_ID);",
    searchHabByEst: "SELECT REH.ID, REH.Std_ID, REH.Skill_ID, REH.Rel_Status, H.Skill FROM REL_ESTUDIANTES_HABILIDADES AS REH INNER JOIN HABILIDADES AS H ON REH.Skill_ID = H.Skill_ID WHERE REH.Std_ID = @Std_ID",
    postEstxHab: "INSERT INTO REL_ESTUDIANTES_HABILIDADES (Skill_ID,Std_ID,Rel_Status) VALUES (@Skill_ID,@Std_ID,1)",
    deleteEstxHab: "DELETE FROM REL_ESTUDIANTES_HABILIDADES WHERE ID = @Id",
};

export const querysSOLICITUDES_OFERTAS_LABORALES = {
    getSolicitudesByEmpre: "SELECT SOL.Req_ID, OL.[Job_ID], OL.[Job_Title], OL.[Job_ContractType], OL.[Job_Modality], OL.[Job_NoVacancy], OL.[Job_Salary], COUNT(SOL.[Std_ID]) AS NumberOfApplicants FROM [sis_bolsa_empleo].[dbo].[OFERTA_LABORAL] OL LEFT JOIN [sis_bolsa_empleo].[dbo].[SOLICITUDES_OFERTAS_LABORALES] SOL ON OL.[Job_ID] = SOL.[Job_ID] WHERE OL.[Comp_ID] = @Comp_ID GROUP BY SOL.Req_ID, OL.[Job_ID], OL.[Job_Title], OL.[Job_ContractType], OL.[Job_Modality], OL.[Job_NoVacancy], OL.[Job_Salary] ORDER BY OL.[Job_ID];",
    getAllDataBySoli: "SELECT E.Std_ID, E.Std_FirstName, E.Std_LastName, E.Std_SecondName FROM ESTUDIANTES E INNER JOIN SOLICITUDES_OFERTAS_LABORALES SOL ON E.Std_ID = SOL.Std_ID WHERE SOL.Job_ID = @Job_ID;",
    getSoliByCarrera: "SELECT [Job_ID], [Job_Title], [Job_Modality], [Job_NoVacancy], [Job_ContractType] FROM [sis_bolsa_empleo].[dbo].[OFERTA_LABORAL] WHERE [Ca_ID] = @Ca_ID;",
    postSolicitud: "INSERT INTO SOLICITUDES_OFERTAS_LABORALES (Req_Date,Req_SalaryExpetation,Req_RequestStatus,Job_ID,Std_ID,Req_Status) VALUES (@Req_Date,@Req_SalaryExpetation,@Req_RequestStatus,@Job_ID,@Std_ID,1)",
    confirmSolicitud: "UPDATE SOLICITUDES_OFERTAS_LABORALES SET Req_RequestStatus = @Req_RequestStatus WHERE Req_ID = @Req_ID",
    declaSolicitud: "UPDATE SOLICITUDES_OFERTAS_LABORALES SET Req_RequestStatus = @Req_RequestStatus WHERE Req_ID = @Req_ID",
    getJobsByStudent: "SELECT OL.*, E.[Comp_Name], SOL.[Req_RequestStatus] FROM [sis_bolsa_empleo].[dbo].[OFERTA_LABORAL] OL INNER JOIN [sis_bolsa_empleo].[dbo].[SOLICITUDES_OFERTAS_LABORALES] SOL ON OL.[Job_ID] = SOL.[Job_ID] INNER JOIN [sis_bolsa_empleo].[dbo].[EMPRESAS] E ON OL.[Comp_ID] = E.[Comp_ID] WHERE SOL.[Std_ID] = @Std_ID;"
};

export const querysAUTH = {
    getStudent: "SELECT E.Std_ID, E.Ca_ID, E.Std_FirstName ,E.Std_SecondName ,E.Std_LastName, E.Rol_ID FROM ESTUDIANTES E WHERE E.Std_ID = @Std_ID AND E.Std_Password = @Std_Password AND E.Std_Status = 1;",
    getUser: "SELECT * FROM USUARIOS U WHERE User_Email = @User_Email AND User_Status = 1",
    getCompanie: "SELECT * FROM EMPRESAS WHERE User_Email = @User_Email AND User_Password = @User_Password AND Comp_Status = 1 AND User_CreationAproval = 1;",
};

export const querysESTUDIANTES = {
    getStdById: "SELECT C.Ca_Description, E.Rol_ID, E.Std_LastName, E.Std_ID, E.Std_Birthday, E.Std_City, E.Std_FirstName, E.Std_FirstStreet, E.Std_EducationalEmail, E.Std_HomePhone, E.Std_Telephone, E.Std_Identification, E.Std_SecondStreet, E.Std_SecondName, E.Std_PostalCode, E.Std_PersonalEmail, E.Std_State, I.Img, V.Cv_ID FROM ESTUDIANTES E LEFT JOIN CARRERAS C ON E.Ca_ID = C.Ca_ID LEFT JOIN ESTUDIANTES_IMAGEN I ON E.Std_ID = I.Std_ID LEFT JOIN CV V ON E.Std_ID = V.Std_ID WHERE E.Std_ID = @Std_ID;",
    putStd: "UPDATE ESTUDIANTES SET Std_FirstName = @Std_FirstName, Std_SecondName = @Std_SecondName, Std_LastName = @Std_LastName, Std_PersonalEmail = @Std_PersonalEmail, Std_FirstStreet = @Std_FirstStreet, Std_SecondStreet = @Std_SecondStreet, Std_City = @Std_City, Std_State = @Std_State, Std_PostalCode = @Std_PostalCode, Std_Telephone = @Std_Telephone, Std_HomePhone = @Std_HomePhone WHERE Std_ID = @Std_ID",

};

export const querysIMAGES = {
    getImgEst: "SELECT Std_Img_ID, Img ,Std_Img_Status FROM ESTUDIANTES_IMAGEN WHERE Std_ID = @Id",
    getImgEmp: "SELECT Comp_Logo_ID,Img ,Comp_Logo_Status FROM EMPRESA_LOGO where Comp_ID = @Id",
    postImgEst: "INSERT INTO ESTUDIANTES_IMAGEN (Img,Std_ID,Std_Img_Status) VALUES (@Img,@Std_ID,1)",
    postImgEmp: "INSERT INTO EMPRESA_LOGO (Img,Comp_ID,Comp_Logo_Status) VALUES (@Img,@id,1)",
    verifyImg: "select * from ESTUDIANTES_IMAGEN where Std_ID = @Std_ID",
    updateImgEst: "UPDATE ESTUDIANTES_IMAGEN SET Img = @Img WHERE Std_ID = @Std_ID",
};

export const querysCV = {
    searchCV: "SELECT Cv_ID FROM CV WHERE Std_ID = @Std_ID",
    postCv: "INSERT INTO CV (Cv, Std_ID, Cv_Status) VALUES (@CV, @Std_ID, 1);",
    putCv: "UPDATE CV SET Cv = @CV WHERE Std_ID = @Std_ID",
    getCv: "SELECT Cv FROM CV WHERE Std_ID = @Std_ID",
};

export const querysEXPERIENCIA = {
    getExp: "SELECT * FROM EXPERIENCIA WHERE Exp_Status = 1",
    getExpByEst: "SELECT * FROM EXPERIENCIA WHERE Std_ID = @Std_ID",
    postExp: "INSERT INTO EXPERIENCIA (Position,Company,ContractType,Country,Modality,Exp_Status,InitiaDate,EndDate,Std_ID) VALUES (@Position,@Company,@ContractType,@Country,@Modality,1,@InitiaDate,@EndDate,@Std_ID)",
    getExpById: "SELECT * FROM EXPERIENCIA WHERE Exp_ID = @Exp_ID AND Exp_Status = 1",
    deleteExp: "UPDATE EXPERIENCIA SET Exp_Status = 0 WHERE Exp_ID = @Id",
    putExp: "UPDATE EXPERIENCIA SET Position = @Position, Company = @Company, ContractType = @ContractType, Country = @Country, Modality = @Modality, Exp_Status = 1, InitiaDate = @InitiaDate, EndDate = @EndDate WHERE Exp_ID = @Exp_ID",
};
