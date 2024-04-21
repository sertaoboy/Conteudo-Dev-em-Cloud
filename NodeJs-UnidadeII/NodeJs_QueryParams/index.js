// const express = require("express"); // importacao do modulo para o arquivo
// const app = express(); // criacao de uma instancia do express

// //criando a rota inicial
// app.get("/", function(req,res){
//     res.send("Bem vindo ao meu site");
// });

// //criando a rota de consulta com query params
// app.get("/consulta", function(req,res){
//     let cpf = req.query.cpf;
//     res.send("Consulta realizada com sucesso para o CPF: " + cpf);
// })

// app.listen(4000, function(erro){
//     if(erro){
//         console.log("Ocorreu um erro");
//     }else{
//         console.log("Servidor iniciado com sucesso");
//     }
// })

/////////////////Codigo antigo acima////////////////////
/////////////////Codigo com melhorias abaixo////////////////////

const express = require("express"); // importacao do modulo para o arquivo
const app = express(); // criacao de uma instancia do express

//rota com query params
app.get("/consulta", function(req,res){
    var cpf = req.query["cpf"];
    if(cpf){
        res.send("Consulta realizada com sucesso para o CPF: " + cpf);
    }else{
        res.send("CPF NAO FORNECIDO");
    }
})

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor iniciado com sucesso");
    }
})