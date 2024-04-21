# Roteiro
> Query Params
> Programando com Query Params


# Query Params
- Usado para passar parametros de forma mais dinamica
- Nao precisa fixar o parametro na rota
- Parametros sao opcionais
- Parametros sao passados apos o simbolo de interrogacao `?`
- Ex.: http://localhost:4000/consulta?cpf=123456
  
# Programando com Query Params
- Criar um novo diretorio
-  Criar um novo arquivo: `index.js`
-  Instalar o modulo `express` com o comando: `npm install express`
-  Importar o modulo `express` no arquivo `index.js`
-  Criar uma instancia do express
-  Criar uma rota com query params
-  Iniciar o servidor
-  Executar o arquivo `index.js`
-  Acessar a rota no navegador
-  Verificar o resultado
-  Parar o servidor com `Ctrl + C`

## Exemplo
> Arquivo: index.js
```javascript
const express = require("express"); // importacao do modulo para o arquivo
const app = express(); // criacao de uma instancia do express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("Bem vindo ao meu site");
});

//criando a rota de consulta com query params
app.get("/consulta", function(req,res){
    let cpf = req.query.cpf;
    res.send("Consulta realizada com sucesso para o CPF: " + cpf);
})

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor iniciado com sucesso");
    }
})
```

## Melhorando o codigo acima
> Arquivo: index.js
```javascript
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
```