const config = {
    user: 'rajnandini',
    password: 'raj_nandini',
    server: '127.0.0.1',
    database: 'my_database',
    options: {
        encrypt: false,
        trustServerCertificate: true,
        enableArithAbort: true,
    },
    port: 1433
};

module.exports = config;
