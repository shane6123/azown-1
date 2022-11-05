const mysql = require("mysql2");


module.exports = mysql.createConnection({
    host: "database-1.cuht8i8puax8.ap-northeast-1.rds.amazonaws.com",
    user: 'admin',
    password: 'admin123',
   port:3306
})