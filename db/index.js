const mysql = require("mysql")
const db = mysql.createpool({
host:"127.0.0.1",
user:"root",
password:"",
database:"node_express"
})
module.exports=db;