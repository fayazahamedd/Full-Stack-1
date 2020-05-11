const express=require('express');
const bodyParser = require('body-parser');
const path=require('path');
const controller=require("../contoller/admincontroller");

const adminRouter=express.Router();
adminRouter.post("/signupsucess",controller.signupsucess);

module.exports=adminRouter;