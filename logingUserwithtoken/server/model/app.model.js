const databas=require('../util/database')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const privateKey='private.key'
class ApplyToTheDatabase{
    
    async addDataFromDatabase(data){
        let {name,password}=data
        const salt = await bcrypt.genSaltSync(saltRounds);
        const hash = await bcrypt.hashSync(password, salt);
       const queri="insert into users (username,password)  values (?,?)"
        try {
         await databas.connection.execute(queri, [name,hash]);
            return true
        } catch (error) {
            return false
        }
    }
    async GettingDataFromDatabase(data){
        let {name,password}=data
       const query="SELECT * FROM users WHERE username= ? "

       const [user] = await databas.connection.execute(query, [name])
       console.log(user.length);
       if (user.length!=0) {
        const   pkey=bcrypt.compareSync(password, user[0].password);
        if (pkey) {
         var token = jwt.sign({ name,password }, privateKey);
         return token
        } else {
         return "PasswordIsWrong"
   
       }
       
       }

       else{ return "NotAccount"}
      

}
}
module.exports=new ApplyToTheDatabase()