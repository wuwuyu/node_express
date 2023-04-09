const express = require("express");
const router = express.Router();
const handler = require("../routerHandler/user.js");
router.get("/login",handler.login);
router.get("/reg",handler.reguser);
module.exports=router;
