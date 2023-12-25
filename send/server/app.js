const express=require('express')
const cors=require('cors')
const app=express()
const routertakes=require('./routes/routerUser')
const routerDatabase=require('./routes/routerDatabase')
app.use(cors())
app.use(express.json())


app.use('/api',routertakes)
app.use('/api',routerDatabase)


app.listen(4000,()=>{
    console.log("Hello");
})