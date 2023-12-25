const DataUser=require('./takesController')
class Database{
  dataDatabase
  read=async(req,res)=>{
        const mysql = require('mysql2/promise');
        const connection = await mysql.createConnection({host:'localhost', user: 'root',password:'', database: 'taske'});
        const [rows] = await connection.execute('SELECT * FROM taskes ');
        this.dataDatabase=rows
        console.log(this.dataDatabase);
}
  send=async (req,res,nex)=>{
        const mysql = require('mysql2/promise');
        const connection = await mysql.createConnection({host:'localhost', user: 'root',password:'', database: 'taske'});
        const [rows] = await connection.execute("insert into taskes (title)  values (?)",[DataUser.data[DataUser.data.length-1].title]);
      res.json(rows)
    }
    }
module.exports=new Database()