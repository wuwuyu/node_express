const express = require("express");
const router = express.Router();
const handler = require("../routerHandler/user.js");
router.post("/login",handler.login);
router.post("/reg",handler.reguser);
module.exports=router;
