const express=require('express');
const bodyParser = require('body-parser');
const path=require('path');
const controller=require("../contoller/forgotcontroller");

const Forgotroutes=express.Router();
Forgotroutes.post("/forgot_password",controller.forgot_password);

module.exports=Forgotroutes;

