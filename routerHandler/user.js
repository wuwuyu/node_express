const db = require("../db/index.js");
module.exports.login=(req,res)=>{
if(!req.body.username || !req.body.password){
return res.send({
status:1,
message:"参数不存在或为空"
})}
var dbq="select * from `ne_user` where username=? "
db.query(dbq,req.username,function(err,results){
console.log(results)
res.send(results)
})
}

module.exports.reguser=(req,res)=>{
res.send('reguser page')
}