const applyToTheDatabase=require('../model/app.model')
exports.senddata=async (req,res)=>{
    const result = await applyToTheDatabase.addDataFromDatabase(req.body)
    if (result) res.json("Success")
    else res.json("Failed")
    }
    exports.checkdata=async (req,res)=>{
        const result = await applyToTheDatabase.GettingDataFromDatabase(req.body)
        if (result=="PasswordIsWrong") res.json("PasswordIsWrong")
        else if(result=="NotAccount") res.json("NotAccount");
        else if(result) res.json(result);
        }
