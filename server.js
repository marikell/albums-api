
const express        = require('express');
//interacts with database
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

//mongo db connection
const db             = require('./config/db');

//http requests
const port = 8000;

//express processing URL encoded forms
app.use(bodyParser.urlencoded({ extended: true }));

//connect with MongoDB

MongoClient.connect(db.url,(err,database)=>{    
    if(err) return console.log(err);
    //import of albums routes
    require('./app/routes')(app,{});

    app.listen(port, ()=>{
        console.log("Funcionando....");
        
    });
});

