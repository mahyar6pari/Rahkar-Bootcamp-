const applyToTheDatabase=require('../model/app.model')
exports.registr=async (req,res)=>{
    const result = await applyToTheDatabase.Registr(req.body)
    if (result) res.json("Success")

    else res.json("Failed")
    }
    exports.login=async (req,res)=>{
        const result = await applyToTheDatabase.Login(req.body)
        if (result=="PasswordIsWrong") res.json("PasswordIsWrong")
        else if(result=="NotAccount") res.json("NotAccount");
        else if(result) res.json(result);
        }
        exports.savingmoneyinthedatabase=async (req,res)=>{
            const result = await applyToTheDatabase.Savingmoneyinthedatabase(req.body)
            res.json(result)
         console.log(req.body);
            }
            exports.moneyspentonthedatabase=async (req,res)=>{
                const result = await applyToTheDatabase.Moneyspentonthedatabase(req.body)
             res.json("succesfull")
              console.log(req.body);
                }
            exports.gettingvaluesfromthedatabase=async (req,res)=>{
                console.log(req.body);
                    await res.json(await applyToTheDatabase.Gettingvaluesfromthedatabase(req.body))    
            }