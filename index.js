const express = require('express');
const app = express();


app.get('/medical-center/doctor-list',function(req,res){

     res.send({type:'GET'});
});

app.put('/medical-center/doctor-list',function(req,res){

    res.send({type:'PUT'});
});

app.post('/medical-center/doctor-list',function(req,res){

    res.send({type:'POST'});
});

app.delete('/medical-center/doctor-list',function(req,res){

    res.send({type:'DELETE'});
});

app.listen(process.env.port || 5000,function(req,res){
  
    console.log('Simple API');
});