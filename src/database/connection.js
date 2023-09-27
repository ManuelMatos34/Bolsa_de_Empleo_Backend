import sql from "mssql";

export const dbSettings = {
    user: "pu",
    password: "sa",
    server: "DESKTOP-A3EVB09\\SQLEXPRESS",
    database: "sis_bolsa_empleo",
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
  };
  
  export const getConnection = async () => {
    try {
      const pool = await sql.connect(dbSettings);
      return pool;
    } catch (error) {
      console.error(error);
    }
  };
  
  export { sql };