const express=require('express')
const cors=require('cors')
const bookrouter=require('./router/book.router')
const userrouter=require('./router/user.router')
const app=express()
app.use(cors())
app.use(express.json())
app.use('/api',userrouter)
app.use('/api',bookrouter)






app.listen(3000,()=>{
    console.log("run");
})

