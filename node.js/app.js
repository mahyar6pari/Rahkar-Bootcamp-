const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usernamerouter = require('./routes/username')
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use("/users",usernamerouter);


app.listen(3000,()=>{
    console.log("is ok");
});
