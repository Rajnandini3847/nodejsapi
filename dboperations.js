var config = require('./dbconfig');
const sql = require('mssql');

async function getIds(){
    try {
        let pool = await sql.connect(config);
        let values = await pool.request().query("SELECT * FROM Users");
        return values.recordsets;
    }
    catch(error) {
        console.log(error);
    }

}