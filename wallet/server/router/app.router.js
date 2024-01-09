const express=require('express')
const router=express.Router()
const {registr,login,savingmoneyinthedatabase,moneyspentonthedatabase,gettingvaluesfromthedatabase}=require('../controllers/app.controller')
router.post('/senddata',registr)
      .post('/checkdata',login)
      .post('/savingmoneyinthedatabase',savingmoneyinthedatabase)
      .post('/Moneyspentonthedatabase',moneyspentonthedatabase)
      .post('/transaction',gettingvaluesfromthedatabase)
module.exports=router