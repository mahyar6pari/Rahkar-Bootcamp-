const express=require('express')
const router=express.Router()
const {senddata,checkdata}=require('../controllers/app.controller')
router.post('/senddata',senddata)
      .post('/checkdata',checkdata)
module.exports=router