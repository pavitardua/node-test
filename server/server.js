const express = require('express');

var app = express();

app.get('/',(req,res)=>{
    res.status(404).send({
        error:'Custom error message',
        name: 'Todo App v1.0'
    });
});

app.get('/users',(req,res)=>{
    res.status(200).send([
        {name:'pavitar',age:28},
        {name:'paul',age:25}
    ]);
});

app.listen(3000);

module.exports.app = app;