const databas=require('../util/task.util')
class ApplyToTheDatabase{
    
    async Creat(data){
        let {title}=data
       const queri="insert into users (title)  values (?)"
         await databas.connection.execute(queri,[title]);
    }
    async Read(){
       const query="SELECT * FROM users "
       const [rows] = await databas.connection.execute(query);
       return rows
    }
     async deletData(data){
        let {id} = data
        const query="DELETE FROM users WHERE id=?;"
        await databas.connection.execute(query ,[id]);
     }
     async editeData(data){
        let {id} = data
        const queryitem="SELECT * FROM users WHERE id=? "
        const [title] = await databas.connection.execute(queryitem ,[id]);
        return title
     }
     async updateData(data){
      let {title,id} = data
      console.log(title);
        const queryitem="SELECT * FROM users WHERE id=? "
         await databas.connection.execute(queryitem ,[id]);
        const query="UPDATE users SET  title =? where id=?;"
        await databas.connection.execute(query ,[title,id]);
     }
}
module.exports=new ApplyToTheDatabase()