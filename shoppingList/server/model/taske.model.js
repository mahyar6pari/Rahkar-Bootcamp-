const databas=require('../util/task.util')

class ApplyToTheDatabase{
    
    async addDatabase(data){
        let {title}=data
       const queri="insert into taskesdata (title)  values (?)"
         await databas.connection.execute(queri,[title]);
    }
    async sendData(){
       const query="SELECT * FROM taskesdata "
       const [rows] = await databas.connection.execute(query);
       return rows
    }
    async doneData(id){
        const queryitem="SELECT * FROM taskesdata WHERE id=? "
        const [data] = await databas.connection.execute(queryitem ,[id]);
        const query="UPDATE taskesdata SET  isDone =? where id=?"
        await databas.connection.execute(query ,[!data[0].isDone,id]);
     }
     async deletData(id){
        const queryitem="SELECT * FROM taskesdata WHERE id=? "
        const [data] = await databas.connection.execute(queryitem ,[id]);
        const query="DELETE FROM taskesdata WHERE id=?;"
        await databas.connection.execute(query ,[id]);
     }
     async editeData(id){
        const queryitem="SELECT * FROM taskesdata WHERE id=? "
        const [data] = await databas.connection.execute(queryitem ,[id]);
        return data
     }
     async updateData(title,id){
        const queryitem="SELECT * FROM taskesdata WHERE id=? "
        const [data] = await databas.connection.execute(queryitem ,[id]);
        const query="UPDATE taskesdata SET  title =? where id=?;"
        await databas.connection.execute(query ,[title,id]);
     }
}
module.exports=new ApplyToTheDatabase()