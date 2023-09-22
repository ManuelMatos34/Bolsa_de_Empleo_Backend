var sql = require("msnodesqlv8");

async function GetConn() {
    const connectionString =
        "server=DESKTOP-A3EVB09\\SQLEXPRESS;Database=node_practice;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

    await sql.query(connectionString, query, (err, rows) => {
        if (err) {
            console.error(err);
        } else {
            console.log(rows);
        }
    });
}

GetConn();
