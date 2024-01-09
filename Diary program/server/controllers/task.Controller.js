const applyToTheDatabase=require('../model/taske.model')
exports.read=async (req,res)=>{
let re=await applyToTheDatabase.Read(req.body)
res.json(re)
}
exports.creat=async (req,res)=>{
    let allData=await applyToTheDatabase.Creat(req.body)
    res.json(allData)
    }
    
        exports.deletdata=async (req,res)=>{

                await applyToTheDatabase.deletData(req.body)
                res.json({message:'delet:Success'})  
        }
        exports.editedata=async (req,res)=>{

            data=await applyToTheDatabase.editeData(req.body)
            res.json(data) 
    }
    exports.updatedata=async (req,res)=>{
        await applyToTheDatabase.updateData(req.body)
        res.json({message:'Success'})
}