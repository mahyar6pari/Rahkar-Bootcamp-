const express=require('express')
const router=express.Router()
const DataUser=require('../controllers/takesController')
router.post('',DataUser.getuser)
      .get('/send',DataUser.sendUser)
module.exports=router