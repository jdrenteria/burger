var mysql = require("mysql");
require("dotenv").config();

var connConfig = process.env.JAWSDB_URL ? process.env.JAWSDB_URL : {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
}
var connection = mysql.createConnection(connConfig);

connection.connect(function(err){
    if (err){
        console.error("error connection:" + err.stack);
        return;
    }
    console.log("connnected as id " + connection.threadId);
});

module.exports=connection;