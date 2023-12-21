exports.Get=(  async (req, res, next) => {
    const mysql = require('mysql2/promise');
    const connection =await mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'bootcamp' });
    let [rows] = await connection.execute("SELECT * FROM users")
    
    res.json(rows)
   });