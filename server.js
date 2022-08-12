const express = require('express'); // importation d'express
const app = express(); // init express

app.listen(3500, function(){
    console.log('Server started successfuly');
});

app.get('/toto', function(req, res){
    res.send('Hello Toto');
});

app.get('/isig', function(req, res){
    res.send('Fier et plein de dignité');
});
