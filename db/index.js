const mysql = require("mysql")
const db = mysql.createPool({
host:"127.0.0.1",
user:"root",
password:"314159",
database:"node_express"
})
module.exports=db;