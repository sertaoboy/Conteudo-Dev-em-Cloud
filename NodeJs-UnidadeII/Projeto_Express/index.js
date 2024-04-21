// const express = require('express'); // importando o modulo express neste arquivo
// const app = express(); // instanciando o express

// app.listen(4000, function(erro){ //inicializando o servidor na porta 4000
//     if(erro){
//         console.log("Ocorreu um erro!");
//     }else{
//         console.log("Servidor iniciado com sucesso!");
//     }
// })
////////////////////////Acima: primeiro exemplo de servidor express////////////////////////






// const express = require("express"); // importacao do modulo para o arquivo
// const app = express(); // criacao de uma instancia do express

// app.get("/", function(req,res){
//     res.send("Bem vindo ao meu site");
// });

// app.listen(4000, function(erro){
//     if(erro){
//         console.log("Ocorreu um erro");
//     }else{
//         console.log("Servidor iniciado com sucesso");
//     }
// })
////////////////////////Acima: segundo exemplo de servidor express////////////////////////







// const express = require("express"); // importacao do modulo para o arquivo
// const app = express(); // criacao de uma instancia do express

// //criando a rota inicial
// app.get("/", function(req,res){
//     res.send("Bem vindo ao meu site");
// });

// //criando a rota do cadastro de produtos por exemplo
// app.get("/produtos", function(req,res){
//     res.send("<h1>Lista de Produtos</h1>");
// })

// app.listen(4000, function(erro){
//     if(erro){
//         console.log("Ocorreu um erro");
//     }else{
//         console.log("Servidor iniciado com sucesso");
//     }
// })

////////////////////////Acima: terceiro exemplo de servidor express////////////////////////

const express = require("express"); // importacao do modulo para o arquivo
const app = express(); // criacao de uma instancia do express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("Bem vindo ao meu site");
});

//criando a rota do cadastro de produtos por exemplo
app.get("/produtos", function(req,res){
    res.send("<h1>Lista de Produtos</h1>");
})

//criando a rota de produtos com parametros
app.get("/cadastro/:nome?", function(req,res){
    //req -> dados enviados pelo cliente
    //res -> resposta enviada pelo servidor de volta ao cliente
    var nome = req.params.nome;
    if(nome){
        res.send("<h1>produto: " + nome + " criado!</h1>");
    }else{
        res.send("produto criado");
    }

})

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor iniciado com sucesso");
    }
}
)