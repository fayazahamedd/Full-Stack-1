const express=require('express');
const bodyParser = require('body-parser');
const path=require('path');
const controller=require("../contoller/shopcontroller");

const Shoproutes=express.Router();
Shoproutes.post("/loginsucess",controller.loginsucess);

module.exports=Shoproutes;