const User=require("../models/user")
exports.addUserData = async (req, res) => {
  let checkmobile = /^09[0|1|2|3][0-9]{8}$/;
  let mobile = req.body.mobile;
  
  if (mobile.match(checkmobile)){
     let data=await User.create({
       Name: req.body.Name,
       mobile: req.body.mobile,
      });
      res.json(data)
  }
  else{
    res.json("The number entered is incorrect",200);
  }  
  }

