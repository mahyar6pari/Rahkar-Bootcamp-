// get the client
const mysql = require('mysql2/promise');

class Database{
  constructor(){
    this.connection=undefined
    this.database()
  }

    async database(){
      this.connection = await mysql.createConnection({host:'localhost', user: 'root',password:'' ,database: 'user'});
      
}
}
module.exports=new Database()