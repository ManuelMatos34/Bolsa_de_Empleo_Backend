export const querysEmpresas = {
  insertEmpresas:
    "INSERT INTO EMPRESAS (Comp_ID,User_Email,User_Password,User_CreationAproval,Comp_Name,Comp_Description,Comp_Telephone,Comp_FirstStreet,Comp_SecondStreet,Comp_City,Comp_State,Comp_PostalCode,Comp_KeyContact,Comp_KYTelephone,Comp_EmailAddress,Comp_Website,Comp_Status,User_ID) VALUES (@Comp_ID,@User_Email,@User_Password,@User_CreationAproval,@Comp_Name, @Comp_Description, @Comp_Telephone, @Comp_FirstStreet, @Comp_SecondStreet,@Comp_City, @Comp_State, @Comp_PostalCode, @Comp_KeyContact, @Comp_KYTelephone,@Comp_EmailAddress, @Comp_Website, @Comp_Status, @User_ID)",
  selectEmpresas: "SELECT * FROM EMPRESAS",
  selectEmpresaById:
    "SELECT E.*, EL.[Img] FROM EMPRESAS E JOIN EMPRESA_LOGO EL ON E.[Comp_ID] = EL.[Comp_ID] Where E.[Comp_ID] = @Id",
  deleteEmpresa: "UPDATE EMPRESAS SET Comp_Status = 0 WHERE Comp_ID = @Id",
  updateEmpresa:
    "UPDATE EMPRESAS SET User_Email = @User_Email, Comp_Name = @Comp_Name, Comp_Description = @Comp_Description, Comp_Telephone = @Comp_Telephone, Comp_FirstStreet = @Comp_FirstStreet, Comp_SecondStreet = @Comp_SecondStreet, Comp_City = @Comp_City, Comp_KeyContact = @Comp_KeyContact, Comp_KYTelephone = @Comp_KYTelephone, Comp_EmailAddress = @Comp_EmailAddress, Comp_Website = @Comp_Website WHERE Comp_ID = @Comp_ID",
  searchEmpresa: "SELECT * FROM EMPRESAS WHERE Comp_ID = @Id",
  insertIMG:
    "INSERT INTO EMPRESA_LOGO (Img,Comp_ID,Comp_Logo_Status) VALUES (@Img,@Comp_ID, 1)",
  updateIMG: "UPDATE EMPRESA_LOGO SET Img = @Img WHERE Comp_ID = @Comp_ID",
};

export const querysUsuarios = {
  selectUsuarios: "SELECT * FROM USUARIOS WHERE User_Status = 1",
  searchUsuario: "SELECT * FROM USUARIOS WHERE User_Email = @User_Email",
  insertUsuario:
    "INSERT INTO USUARIOS (User_Password,User_Email,User_CreationDate,User_PaswdExpire,User_CreationAproval,User_Status,Rol_ID) VALUES (@User_Password,@User_Email,@User_CreationDate,@User_PaswdExpire,@User_CreationAproval,@User_Status,@Rol_ID)",
  selectUsuarioById:
    "SELECT U.[User_ID], U.[User_Name], U.[User_Password], U.[User_Phone], U.[User_CreationDate], U.[User_Email], U.[User_Status], U.[Rol_ID], UI.[Img] FROM USUARIOS U LEFT JOIN USUARIOS_IMAGEN UI ON U.[User_ID] = UI.[User_ID] WHERE U.[User_ID] = @Id;",
  deleteUsuario: "UPDATE USUARIOS SET User_Status = 0 WHERE User_ID = @Id",
  searchUsuarioById:
    "SELECT * FROM USUARIOS WHERE User_ID = @User_ID AND User_Status = 1",
  updatePasswordUser:
    "UPDATE USUARIOS SET User_Password = @New_Password, User_PaswdExpire = @User_PaswdExpire WHERE User_ID = @User_ID",
  updateMailUsuario:
    "UPDATE USUARIOS SET User_Email = @User_Email WHERE User_ID = @User_ID",
  searchPass: "SELECT User_Password FROM USUARIOS WHERE User_ID = @User_ID",
  searchEmail: "SELECT User_Email FROM USUARIOS WHERE User_ID = @User_ID",
  validateUser:
    "UPDATE EMPRESAS SET User_CreationAproval = @User_CreationAproval WHERE Comp_ID = @Id",
  getValidateUser:
    "SELECT * FROM USUARIOS WHERE User_CreationAproval = @User_CreationAproval",
  searchEmailUser:
    "SELECT * FROM USUARIOS WHERE User_Email = @User_Email AND User_ID <> @User_ID;",
  updateUsuario:
    "UPDATE USUARIOS SET User_Phone = @User_Phone, User_Email = @User_Email WHERE User_ID = @User_ID",
};

export const querysOfertas = {
  selectOfertaByCarrera:
    "SELECT O.*, E.[Comp_Name] FROM [OFERTA_LABORAL] AS O INNER JOIN [EMPRESAS] AS E ON O.[Comp_ID] = E.[Comp_ID] WHERE O.[Ca_ID] = @Ca_ID AND O.[Job_Status] = 1;",
  insertOferta:
    "INSERT INTO OFERTA_LABORAL (Job_Title,Job_Description,Job_Requeriments,Job_CreationDate,Job_EndDate,Job_Modality,Job_ContractType,Comp_ID,Job_Status,Ca_ID,Job_Location) VALUES (@Job_Title,@Job_Description,@Job_Requeriments,@Job_CreationDate,@Job_EndDate,@Job_Modality,@Job_ContractType,@Comp_ID,@Job_Status,@Ca_ID,@Job_Location)",
  selectOfertas: "SELECT * FROM OFERTA_LABORAL WHERE Job_Status = 1",
  selectOfertasByComp:
    "SELECT OL.[Job_ID], OL.[Job_Title], OL.[Job_Description], OL.[Job_Requeriments], OL.[Job_CreationDate], OL.[Job_EndDate], OL.[Job_ContractType], OL.[Job_Location], OL.[Job_Modality], OL.[Job_NoVacancy], OL.[Job_Salary], OL.[Ca_ID], OL.[Comp_ID], OL.[Job_Status], CA.[Ca_Description] FROM OFERTA_LABORAL AS OL INNER JOIN CARRERAS AS CA ON OL.[Ca_ID] = CA.[Ca_ID] WHERE OL.[Comp_ID] = @Comp_ID",
  selectOfertaById:
    "SELECT * FROM OFERTA_LABORAL WHERE Job_ID = @Id AND Job_Status = 1",
  deleteOferta: "UPDATE OFERTA_LABORAL SET Job_Status = 0 WHERE Job_ID = @Id",
  updateOferta:
    "UPDATE OFERTA_LABORAL SET Job_Location = @Job_Location, Job_EndDate = @Job_EndDate, Job_Title = @Job_Title, Job_Description = @Job_Description, Job_Requeriments = @Job_Requeriments, Job_Modality = @Job_Modality, Job_ContractType = @Job_ContractType, Ca_ID = @Ca_ID WHERE Job_ID = @Job_ID",
  searchOferta:
    "SELECT * FROM OFERTA_LABORAL WHERE Job_Title = @Job_Title AND Job_ID <> @Job_ID;",
  searchOfertaByTitle:
    "SELECT * FROM OFERTA_LABORAL WHERE Job_Title = @Job_Title;",
};
export const querysCalificaciones = {
  selectCalificaciones:
    "SELECT c.Rev_ID ,c.Rev_Confirmation ,c.Rev_Description ,c.Std_ID, e.Std_FisrtName, e.Std_SecondName ,c.Job_ID ,c.Rev_Status FROM CALIFICACIONES c INNER JOIN ESTUDIANTES e ON c.Std_ID = e.Std_ID WHERE e.Ca_ID = @Ca_ID;",
  selectCalificacionesById:
    "SELECT c.Rev_ID,c.Rev_Confirmation,c.Rev_Description ,c.Std_ID,c.Job_ID,c.Rev_Status,e.Std_FisrtName,e.Std_SecondName,e.Std_LastName ,o.Job_Title FROM CALIFICACIONES c INNER JOIN ESTUDIANTES e ON c.Std_ID = e.Std_ID INNER JOIN OFERTA_LABORAL o ON c.Job_ID = o.Job_ID WHERE Rev_ID = @Id;",
  postCalificacion:
    "INSERT INTO CALIFICACIONES (Rev_Confirmation,Rev_Description,Std_ID,Job_ID,Rev_Status) VALUES (@Rev_Confirmation,@Rev_Description,@Std_ID,@Job_ID,@Rev_Status)",
  putCalificacion:
    "UPDATE CALIFICACIONES SET Rev_Confirmation = @Rev_Confirmation, Rev_Description = @Rev_Description WHERE Rev_ID = @Rev_ID",
};

export const querysCarreras = {
  getCarreras: "SELECT * FROM CARRERAS WHERE Ca_Status = 1",
  searchCarrera:
    "SELECT * FROM CARRERAS WHERE Ca_Description = @Ca_Description",
  postCarrera:
    "INSERT INTO CARRERAS (Ca_Description,Fac_ID,Ca_Status) VALUES (@Ca_Description,@Fac_ID,1)",
  getCarreraById: "SELECT * FROM CARRERAS WHERE Ca_ID = @Id and Ca_Status = 1",
  deleteCarrera: "UPDATE CARRERAS SET Ca_Status = 0 WHERE Ca_ID = @Id",
  putCarrera:
    "UPDATE CARRERAS SET Ca_Description = @Ca_Description, Fac_ID = @Fac_ID WHERE Ca_ID = @Ca_ID",
};

export const querysFacultades = {
  getFacultades: "SELECT * FROM FACULTADES WHERE Fa_Status = 1",
  searchFacultad:
    "SELECT * FROM FACULTADES WHERE Fa_Description = @Fa_Description",
  postFacultad:
    "INSERT INTO FACULTADES (Fa_Description,Fa_Status) VALUES (@Fa_Description,@Fa_Status)",
  getFacultadById:
    "SELECT * FROM FACULTADES WHERE Fa_ID = @Id and Fa_Status = 1",
  deleteFacultad: "UPDATE FACULTADES SET Fa_Status = 0 WHERE Fa_ID = @Id",
  putFacultad:
    "UPDATE FACULTADES SET Fa_Description = @Fa_Description WHERE Fa_ID = @Fa_ID",
};

export const querysHabilidades = {
  getHabilidades:
    "SELECT H.Skill_ID, H.Skill, C.Ca_ID, C.Ca_Description, H.Skill_Status FROM HABILIDADES AS H INNER JOIN CARRERAS AS C ON H.Ca_ID = C.Ca_ID AND H.Skill_Status = 1",
  searchHabilidad:
    "SELECT * FROM HABILIDADES WHERE Skill = @Skill AND Ca_ID = @Ca_ID And Skill_Status = 1",
  postHabilidad:
    "INSERT INTO HABILIDADES (Skill,Ca_ID,Skill_Status) VALUES (@Skill,@Ca_ID,1)",
  getHabilidadById:
    "SELECT H.Skill_ID, H.Skill, C.Ca_ID, C.Ca_Description, H.Skill_Status FROM HABILIDADES AS H INNER JOIN CARRERAS AS C ON H.Ca_ID = C.Ca_ID AND H.Skill_Status = 1 and H.Skill_ID = @Id",
  deleteHabilidad:
    "UPDATE HABILIDADES SET Skill_Status = 0 WHERE Skill_ID = @Id",
  putHabilidad:
    "UPDATE HABILIDADES SET Skill = @Skill WHERE Skill_ID = @Skill_ID",
};

export const querysRoles = {
  getRoles: "SELECT * FROM ROLES WHERE Rol_Status = 1",
  searchRol: "SELECT * FROM ROLES WHERE Rol_Description = @Rol_Description",
  postRol:
    "INSERT INTO ROLES (Rol_Description,Rol_Status) VALUES (@Rol_Description,1)",
  getRolById: "SELECT * FROM ROLES WHERE Rol_ID = @Id and Rol_Status = 1",
  deleteRol: "UPDATE ROLES SET Rol_Status = 0 WHERE Rol_ID = @Id",
  putRol:
    "UPDATE ROLES SET Rol_Description = @Rol_Description WHERE Rol_ID = @Rol_ID",
};

export const querysREL_ESTUDIANTES_HABILIDADES = {
  getHabNotEst:
    "SELECT H.Skill_ID, H.Skill FROM HABILIDADES AS H WHERE H.Ca_ID = @Ca_ID and H.Skill_ID NOT IN (SELECT REH.Skill_ID FROM REL_ESTUDIANTES_HABILIDADES AS REH WHERE REH.Std_ID = @Std_ID);",
  searchHabByEst:
    "SELECT REH.ID, REH.Std_ID, REH.Skill_ID, REH.Rel_Status, H.Skill FROM REL_ESTUDIANTES_HABILIDADES AS REH INNER JOIN HABILIDADES AS H ON REH.Skill_ID = H.Skill_ID WHERE REH.Std_ID = @Std_ID",
  postEstxHab:
    "INSERT INTO REL_ESTUDIANTES_HABILIDADES (Skill_ID,Std_ID,Rel_Status) VALUES (@Skill_ID,@Std_ID,1)",
  deleteEstxHab: "DELETE FROM REL_ESTUDIANTES_HABILIDADES WHERE ID = @Id",
};

export const querysSOLICITUDES_OFERTAS_LABORALES = {
  getSolicitudesByEmpre:
    "SELECT OL.[Job_Location], OL.[Job_CreationDate], SOL.Req_ID, OL.[Job_ID], OL.[Job_Title], OL.[Job_ContractType], OL.[Job_Modality], OL.[Job_NoVacancy], OL.[Job_Salary], COUNT(SOL.[Std_ID]) AS NumberOfApplicants FROM [sis_bolsa_empleo].[dbo].[OFERTA_LABORAL] OL LEFT JOIN [sis_bolsa_empleo].[dbo].[SOLICITUDES_OFERTAS_LABORALES] SOL ON OL.[Job_ID] = SOL.[Job_ID] WHERE OL.[Comp_ID] = @Comp_ID GROUP BY SOL.Req_ID, OL.[Job_ID], OL.[Job_Title], OL.[Job_ContractType], OL.[Job_Modality], OL.[Job_NoVacancy], OL.[Job_Salary] ORDER BY OL.[Job_ID];",
  getAllDataBySoli:
    "SELECT SOL.Req_ID, SOL.Req_RequestStatus, E.Std_ID, E.Std_FirstName, E.Std_LastName, E.Std_SecondName FROM ESTUDIANTES E INNER JOIN SOLICITUDES_OFERTAS_LABORALES SOL ON E.Std_ID = SOL.Std_ID WHERE SOL.Job_ID = @Job_ID;",
  getSoliByCarrera:
    "SELECT [Job_ID], [Job_Title], [Job_Modality], [Job_NoVacancy], [Job_ContractType], [Job_Location], [Job_CreationDate] FROM OFERTA_LABORAL WHERE [Ca_ID] = @Ca_ID;",
  postSolicitud:
    "INSERT INTO SOLICITUDES_OFERTAS_LABORALES (Req_Date,Req_SalaryExpetation,Req_RequestStatus,Job_ID,Std_ID,Req_Status) VALUES (@Req_Date,@Req_SalaryExpetation,@Req_RequestStatus,@Job_ID,@Std_ID,1)",
  confirmSolicitud:
    "UPDATE SOLICITUDES_OFERTAS_LABORALES SET Req_RequestStatus = @Req_RequestStatus WHERE Req_ID = @Req_ID",
  declaSolicitud:
    "UPDATE SOLICITUDES_OFERTAS_LABORALES SET Req_RequestStatus = @Req_RequestStatus WHERE Req_ID = @Req_ID",
  getJobsByStudent:
    "SELECT OL.*, E.[Comp_Name], SOL.[Req_RequestStatus] FROM OFERTA_LABORAL OL INNER JOIN SOLICITUDES_OFERTAS_LABORALES SOL ON OL.[Job_ID] = SOL.[Job_ID] INNER JOIN [sis_bolsa_empleo].[dbo].[EMPRESAS] E ON OL.[Comp_ID] = E.[Comp_ID] WHERE SOL.[Std_ID] = @Std_ID;",
};

export const querysAUTH = {
  getStudent:
    "SELECT E.Std_EducationalEmail, E.Std_ID, E.Ca_ID, E.Std_FirstName ,E.Std_SecondName ,E.Std_LastName, E.Rol_ID FROM ESTUDIANTES E WHERE E.Std_ID = @Std_ID AND E.Std_Password = @Std_Password AND E.Std_Status = 1;",
  getUser:
    "SELECT * FROM USUARIOS U WHERE User_Email = @User_Email AND User_Status = 1",
  getCompanie:
    "SELECT * FROM EMPRESAS WHERE User_Email = @User_Email AND User_Password = @User_Password AND Comp_Status = 1 AND User_CreationAproval = 1;",
};

export const querysESTUDIANTES = {
  getStdById:
    "SELECT C.Ca_Description, E.Rol_ID, E.Std_LastName, E.Std_ID, E.Std_Birthday, E.Std_City, E.Std_FirstName, E.Std_FirstStreet, E.Std_EducationalEmail, E.Std_HomePhone, E.Std_Telephone, E.Std_Identification, E.Std_SecondStreet, E.Std_SecondName, E.Std_PostalCode, E.Std_PersonalEmail, E.Std_State, I.Img, V.Cv_ID FROM ESTUDIANTES E LEFT JOIN CARRERAS C ON E.Ca_ID = C.Ca_ID LEFT JOIN ESTUDIANTES_IMAGEN I ON E.Std_ID = I.Std_ID LEFT JOIN CV V ON E.Std_ID = V.Std_ID WHERE E.Std_ID = @Std_ID;",
  putStd:
    "UPDATE ESTUDIANTES SET Std_FirstName = @Std_FirstName, Std_SecondName = @Std_SecondName, Std_LastName = @Std_LastName, Std_PersonalEmail = @Std_PersonalEmail, Std_FirstStreet = @Std_FirstStreet, Std_SecondStreet = @Std_SecondStreet, Std_City = @Std_City, Std_State = @Std_State, Std_PostalCode = @Std_PostalCode, Std_Telephone = @Std_Telephone, Std_HomePhone = @Std_HomePhone WHERE Std_ID = @Std_ID",
};

export const querysIMAGES = {
  getImgEst:
    "SELECT * FROM ESTUDIANTES_IMAGEN WHERE Std_ID = @Id",
  getImgEmp: "SELECT * FROM EMPRESA_LOGO WHERE Comp_ID = @Comp_ID",
  postImgEst:
    "INSERT INTO ESTUDIANTES_IMAGEN (Img,Std_ID,Std_Img_Status) VALUES (@Img,@Std_ID,1)",
  postImgAdmin:
    "INSERT INTO USUARIOS_IMAGEN (Img,User_ID,Img_Status) VALUES (@Img,@User_ID,1)",
  postImgEmp:
    "INSERT INTO EMPRESA_LOGO (Img,Comp_ID,Comp_Logo_Status) VALUES (@Img,@id,1)",
  verifyImg: "select * from ESTUDIANTES_IMAGEN where Std_ID = @Std_ID",
  verifyAdminImg: "select * from USUARIOS_IMAGEN where User_ID = @User_ID",
  updateImgEst:
    "UPDATE ESTUDIANTES_IMAGEN SET Img = @Img WHERE Std_ID = @Std_ID",
  updateImgAdmin:
    "UPDATE USUARIOS_IMAGEN SET Img = @Img WHERE User_ID = @User_ID",
  updateImgEmp: "UPDATE EMPRESA_LOGO SET Img = @Img WHERE Comp_ID = @Comp_ID",
  postImgEmp:
    "INSERT INTO EMPRESA_LOGO (Img,Comp_ID,Comp_Logo_Status) VALUES (@Img,@Comp_ID,1)",
};

export const querysCV = {
  searchCV: "SELECT Cv_ID FROM CV WHERE Std_ID = @Std_ID",
  postCv: "INSERT INTO CV (Cv, Std_ID, Cv_Status) VALUES (@CV, @Std_ID, 1);",
  putCv: "UPDATE CV SET Cv = @CV WHERE Std_ID = @Std_ID",
  getCv: "SELECT Cv FROM CV WHERE Std_ID = @Std_ID",
};

export const querysEXPERIENCIA = {
  getExp: "SELECT * FROM EXPERIENCIA WHERE Exp_Status = 1",
  getExpByEst:
    "SELECT * FROM EXPERIENCIA WHERE Std_ID = @Std_ID AND Exp_Status = 1",
  postExp:
    "INSERT INTO EXPERIENCIA (Position,Company,ContractType,Country,Modality,Exp_Status,InitiaDate,EndDate,Std_ID) VALUES (@Position,@Company,@ContractType,@Country,@Modality,1,@InitiaDate,@EndDate,@Std_ID)",
  getExpById:
    "SELECT * FROM EXPERIENCIA WHERE Exp_ID = @Exp_ID AND Exp_Status = 1",
  deleteExp: "UPDATE EXPERIENCIA SET Exp_Status = 0 WHERE Exp_ID = @Exp_ID",
  putExp:
    "UPDATE EXPERIENCIA SET Position = @Position, Company = @Company, ContractType = @ContractType, Country = @Country, Modality = @Modality, Exp_Status = 1, InitiaDate = @InitiaDate, EndDate = @EndDate WHERE Exp_ID = @Exp_ID",
};

export const querysSTATS = {
  getStatsByOferta:
    "SELECT H.Ca_Description, COUNT(C.Ca_ID) as Total_Ofertas FROM CARRERAS H, OFERTA_LABORAL C WHERE H.Ca_ID = C.Ca_ID GROUP BY H.Ca_Description;",
  getStatsByFacultad:
    "SELECT COUNT(Fa_ID) AS TOTAL_FACULTADES FROM FACULTADES;",
  getStatsByEmpresas:
    "SELECT (SELECT COUNT(Comp_ID) FROM EMPRESAS) as Total, (SELECT COUNT(Comp_ID) FROM EMPRESAS WHERE User_CreationAproval = 1) as Aprovadas, (SELECT COUNT(Comp_ID) FROM EMPRESAS WHERE User_CreationAproval = 0) as No_aprovadas, (SELECT COUNT(Comp_ID) FROM EMPRESAS WHERE User_CreationAproval = 2) as Pendientes;",
  getStatsByCarrera: "SELECT COUNT(CA_ID) AS TOTAL_CARRERAS FROM CARRERAS;",
  getStatsByHabilidad:
    "SELECT C.Ca_Description, COUNT(C.Ca_ID) as Total_Habilidades FROM HABILIDADES H, CARRERAS C WHERE H.Ca_ID = C.Ca_ID GROUP BY C.Ca_Description;",
  getCountByHab:
    "SELECT COUNT(Skill_ID) As total_habilidades FROM HABILIDADES WHERE Skill_Status = '1'",
  getStatsByUser:
    "SELECT ((SELECT COUNT(Comp_ID) FROM EMPRESAS WHERE User_CreationAproval = 1) + (SELECT COUNT(User_ID) FROM USUARIOS) + (SELECT COUNT(Std_ID) FROM ESTUDIANTES)) as Total, (SELECT COUNT(User_ID) FROM USUARIOS) as Administradores, (SELECT COUNT(Std_ID) FROM ESTUDIANTES WHERE Rol_ID = 6) as Estudiantes, (SELECT COUNT(Std_ID) FROM ESTUDIANTES WHERE Rol_ID = 4) as Egresados, (SELECT COUNT(Comp_ID) FROM EMPRESAS WHERE User_CreationAproval = 1) as Empresas;",
  getStatsOfertasByComp:
    "SELECT (SELECT COUNT(*) FROM OFERTA_LABORAL WHERE Comp_ID = @id) AS TOTAL_CREADAS, (SELECT COUNT(*) FROM OFERTA_LABORAL WHERE Comp_ID = @id AND Job_Status = '1') AS VIGENTES;",
  getsChartByComp:
    "SELECT DATENAME(MONTH, Comp_RegisterDate) AS Month, COUNT(Comp_ID) AS NumEmpresasRegistradas FROM EMPRESAS GROUP BY DATENAME(MONTH, Comp_RegisterDate) ORDER BY Month;",
  getsChartByOfer:
    "SELECT DATENAME(MONTH, Job_CreationDate) AS Month, COUNT(Job_ID) AS NumOfertasRegistradas FROM OFERTA_LABORAL GROUP BY DATENAME(MONTH, Job_CreationDate) ORDER BY Month;",
};
