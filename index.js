const express = require("express")
const app = express();
const router =  require("./router/user.js")
const cors = require("cors")
app.use(cors())
app.use(express.urlencoded({
extended:false
}))
app.use('/my',router)
app.listen(80,()=>{
    console.log("服务器已启动 http://127.0.0.1 ")
})