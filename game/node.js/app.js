const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Loger=require('./middlewares/logger')
const app = express();

let data=[] ;
let z=0;
function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum).toString(); ;
}
app.use(cors());

app.use(bodyParser.json());

app.post('/',(req, res, next) => {
 data.push(req.body)
});

app.get('/names', (req, res, next) => {
    if (data.length==1) {

        console.log(  data );
        res.json({name:  data[0].name });
       z++
    }
   else if (data.length==2) {

        console.log(  data );
        res.json({name:  data[1].name });
       z++
    }
    else if (data.length>2) {

    }
});
app.get('/number', (req, res, next) => {
    res.json({number:randomNumber(1,6)})
});

app.listen(3000,()=>{
    console.log("hello");
});
