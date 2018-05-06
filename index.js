const express = require('express');
const app = express();

app.get('/Medical/schedules',function(req,res){

    res.send({Type : 'GET....'});
});

app.post('/Medical/schedules',function(req,res){

    res.send({Type : 'POST...'});
});

app.put('/Medical/schedules',function(req,res){

    res.send({Type : 'PUT...'});
});

app.delete('/Medical/schedules',function(req,res){

    res.send({Type : 'DELETE...'});
});

app.listen(process.env.port || 5000, function(req,res){
   
    console.log('Listening port.....');
});