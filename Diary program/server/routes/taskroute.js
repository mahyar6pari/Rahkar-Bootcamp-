const express=require('express')
const router=express.Router()
const {creat,read,deletdata,editedata, updatedata}=require('../controllers/task.Controller')
router.post('/creat',creat)
      .get('/read',read)
      .post('/dalet',deletdata)
      .post('/edite',editedata)
      .put('/update',updatedata)
module.exports=router