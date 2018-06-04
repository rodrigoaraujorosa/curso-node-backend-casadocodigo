var express = require('express');
var app = express();

var porta = 3000;
var ip = 'localhost';

app.set('view engine', 'ejs');

app.get('/produtos', function(request, response){
    console.log('Recebeu uma requisição...');
    response.render('produtos/lista');
});

app.listen(porta, ip, function () {
    console.log('Servidor rodando...');
});

// dá para fazer assim também
/* app.set('view engine', 'ejs').get('/produtos', function (request, response) {
    response.render('produtos/lista');
}).listen(porta, ip, function () {
    console.log('Servidor rodando...');
}); */