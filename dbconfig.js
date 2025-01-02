const sql = require('mssql');

const config = {
    user: 'rajnandini',
    password: 'raj_nandini',
    server: '127.0.0.1',
    database: 'my_database',
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
    port: 54152,
};

sql.connect(config)
    .then(() => console.log('Connected to SQL Server'))
    .catch((err) => console.error('Connection failed:', err));


module.exports = config