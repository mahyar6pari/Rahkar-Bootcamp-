const applyToTheDatabase=require('../model/taske.model')
exports.adddata=async (req,res)=>{

let re=await applyToTheDatabase.addDatabase(req.body)
}
exports.senddata=async (req,res)=>{
    
    let allData=await applyToTheDatabase.sendData()
    res.json(allData)
    }
    exports.donedata=async (req,res)=>{
        try {
            await applyToTheDatabase.doneData(req.params.id)
            res.json({message:'Success'})
        } catch (error) {
            
        }
    }
        exports.deletdata=async (req,res)=>{

                await applyToTheDatabase.deletData(req.params.id)
                res.json({message:'Success'})
          
            
        }
        exports.editedata=async (req,res)=>{

            data=await applyToTheDatabase.editeData(req.params.id)
            res.json(data) 
    }
    exports.updatedata=async (req,res)=>{
        await applyToTheDatabase.updateData(req.body.title,req.params.id)
        res.json({message:'Success'})
}