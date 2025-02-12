const { Pool } = require("pg"); // Correctly import Pool (uppercase)

function connectionObject() {
    const pool = new Pool({ // Use Pool (uppercase) here
        user: "postgres",
        host: "localhost",
        database: "playerdb",
        password: "Uttam@rku2004",
        port: 5432,
        max: 20, // Maximum number of connections in the pool
    });
    return pool;
}

module.exports = { connectionObject };
