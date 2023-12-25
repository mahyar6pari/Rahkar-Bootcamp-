
const database=require('./databaseController')
/*exports.getuser=(req,res,nex)=>{
    this.data.push
    console.log(req.body);
    }
    exports.sendUser=(req,res,next)=>{
        console.log("saalm");
    }
    }*/
class DataUser{
    data=[]
getuser=(req,res,next)=>{
    console.log(req.body);
this.data.push(req.body)
}
sendUser=(req,res,next)=>{
    console.log(this.data[0].title);
res.json(database.dataDatabase)
}
}

module.exports=new DataUser