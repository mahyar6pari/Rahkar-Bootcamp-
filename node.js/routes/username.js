const express=require('express')
const router=express.Router()
const {Get} = require('../controler/usernameControler')
router.get("/",Get)
module.exports=router;
