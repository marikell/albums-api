
const express        = require('express');

//parse requests by json
const bodyParser     = require('body-parser');
const app            = express();

//http requests
const port = 8000;

app.use(bodyParser.json());

require('./app/routes')(app,{});
app.listen(port, ()=>{
    console.log("Funcionando....");
    
});
