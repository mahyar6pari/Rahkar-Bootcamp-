function Loger(req,res,next){
    console.log("loger");
    next();
};
module.exports=Loger