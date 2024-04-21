# Roteiro
> Express JS
> Node package manager (npm)
> Instalando Express
> Programando com Express
> Rotas

# Express JS
- Framework para desenvolvimento de aplicacoes web backend com NodeJs
- https://expressjs.com/pt-br/
- Construcao de aplicacoes web profissionais

## Express Js - Instalacao
- Criar uma pasta
- Navegar ate a pasta
- Testar de o npm esta instalado
- Iniciar o npm: `npm init -y`
- "Apertar enter varias vezes" Americo Sampaio (professor)
- Utilizar o comando de instalacao do Express: `npm install express --save`
- Express instalado no Projeto

## Criacao do primeiro programa com Express
- Criar um arquivo `index.js`

# Entendendo Rotas
- Rotas sao caminhos que o cliente pode acessar
- Cliente acessa: www.meusite.com.br
- Neste momento o cliente envia uma requisicao para o app; express js
- O app express js recebe a requisicao e verifica qual rota o cliente esta acessando
- Supondo que o cliente acessou: www.meusite.com.br/home
- O app express js verifica se existe uma rota para `/home`
- Se existir, o app express js envia uma resposta para o cliente
- Se nao existir, o app express js envia uma resposta de erro para o cliente
- Rotas sao caminhos que o cliente pode acessar
- Rotas sao definidas no app express js
- Rotas sao definidas atraves de metodos HTTP

## Criando a primeira rota
> Arquivo: index.js
```javascript
const express = require("express"); // importacao do modulo para o arquivo
const app = express(); // criacao de uma instancia do express

app.get("/", function(req,res){
    res.send("Bem vindo ao meu site");
});

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor iniciado com sucesso");
    }
})
```

## Testando a primeira rota
- Abrir o terminal
- Navegar ate a pasta do projeto
- Executar o comando: `node index.js`
- Abrir o navegador
- Acessar: `http://localhost:4000/`
- Verificar a mensagem: `Bem vindo ao meu site`
- Parar o servidor: `Ctrl + C`

## Criando mais rotas
> Arquivo: index.js
```javascript
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

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor iniciado com sucesso");
    }
})
```

## Testando a segunda rota
- Abrir o terminal
- Navegar ate a pasta do projeto
- Executar o comando: `node index.js`
- Abrir o navegador
- Acessar: `http://localhost:4000/produtos`
- Verificar a mensagem: `<h1>Lista de Produtos</h1>`
- Parar o servidor: `Ctrl + C`

## Rota com parametros
> Arquivo: index.js
```javascript
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
app.get("/consulta/:parametro", function(req,res){
    //req -> dados enviados pelo cliente
    //res -> resposta enviada pelo servidor de volta ao cliente
    res.send("retorno consulta:" + req.params.parametro);
})

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor iniciado com sucesso");
    }
})
```

## Rota com parametro opcional
> Arquivo: index.js
```javascript
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
        res.send("<h1>Nome do produto: " + nome + " criado!</h1>");
    }else{
        res.send("produto criado");
    }

})
```


  

# Instalando o Nodemon
- Nodemon e uma ferramenta que reinicia o servidor automaticamente apos uma alteracao no codigo
- `npm install nodemon -g`
- Agora, ao inves de usar `node index.js`, usar `nodemon index.js`
- Obs: No meu caso, tive que usar `sudo npm install nodemon -g` pois estava dando erro de permissao




