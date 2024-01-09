const databas=require('../util/database')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const privateKey='private.key'
class ApplyToTheDatabase{
    
    async Registr(data){
        let {mobile,password}=data
        console.log(password);
        const salt = await bcrypt.genSaltSync(saltRounds);
        const hash = await bcrypt.hashSync(password, salt);
       const queri="insert into users (mobile,password)  values (?,?)"
        try {
         await databas.connection.execute(queri, [mobile,hash]);
            return true
        } catch (error) {
            return false
        }
    }
    async Login(data){
        let {mobile,password}=data
       const query="SELECT * FROM users WHERE mobile= ? "

       const [user] = await databas.connection.execute(query, [mobile])
       console.log(user.length);
       console.log(user[0].id);
       if (user.length!=0) {
        const   pkey=bcrypt.compareSync(password, user[0].password);
        if (pkey) {
         var token = jwt.sign({
            "mobile":mobile,"id":user[0].id}, privateKey);

         return token
        } else {
         return "PasswordIsWrong"
   
       }
       
       }

       else{ return "NotAccount"}
}
async Savingmoneyinthedatabase(data){
    let {id,Money}=data
    
    const queri="insert into transaction (amount,users_id,type)  values (?,?,?)"

    await databas.connection.execute(queri, [Money,id,"add"]);
        
}
async Moneyspentonthedatabase(data){
    let {id,title,Money}=data
    
    const queri="insert into transaction (amount,users_id,type,title)  values (?,?,?,?)"

    await databas.connection.execute(queri, [Money,id,"mines",title]);
        
}
async Gettingvaluesfromthedatabase(data){   
    let {id}=data 
    const query="SELECT * FROM transaction WHERE users_id = ? "
    console.log(id);
    const [user] = await databas.connection.execute(query, [id])
    return user
}
}
module.exports=new ApplyToTheDatabase()