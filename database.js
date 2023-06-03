const mysql = require("mysql");
require('dotenv').config();

var properties = { /*link to env file */
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWD,
    database: process.env.DBNAME
    
};
var connection =  mysql.createConnection(properties);

connection.connect((errors) => {
    if (errors) {
    console.log("Could not connect to MySQL server . Error:" + errors )
    } else {
    // if successful, write a message to the console
    console.log("Connected to MySQL");
    }
});

module.exports = {
    connection
};
