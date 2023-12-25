const express=require('express')
const router=express.Router()
const Database=require('../controllers/databaseController')
router.get('/readdata',Database.read)
      .post('/sendData',Database.send)
module.exports=router