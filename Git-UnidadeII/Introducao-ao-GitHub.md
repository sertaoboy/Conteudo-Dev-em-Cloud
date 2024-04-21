# Roteiro
> GitHub
> Criando a conta
> Criando um repositorio
> Controlando versoes
> Clonando um repositorio

# Github
- Servico de hospedagem de repositorios Git
- Crie uma conta no GitHub
- Crie um repositorio no GitHub
- Assinale a opcao de criar o .gitignore
- Adicione um arquivo. Exemplo: index.js do projeto visto anteroirmente (Node.js)
- Clone o repositorio no seu computador
- Adicione um arquivo ou edite um arquivo

## Testando o projeto criado
- Faca o clone do repositorio na sua maquina
- Crie uma pasta para esse projeto
- Faca o clone para essa pasta
- `git clone url_do_repositorio`
- Verifique se esta OK

## Rodando o projeto no Node
- Os arquivos do projeto agora ja estao na sua maquina
- Vamos testar roda-lo no Node.js
* Antes de abrir o projeto na IDE lembre de:
    * Abrir o terminal
    * Navegar ate a pasta do projeto
    * Iniciar o npm: `npm init -y`
    * Instalar o Express: `npm install express --save`
    * Abrir o projeto na IDE
    * Executar o projeto: `node index.js`
    * Testar o programa: http://localhost:*porta_escolhida*/
  
  # Exercicio 
  - Crie sua conta no github
  - Crie um projeto
  - Faca upload de um index.js
  - CLone na sua maquina
  - Faca as configuracoes do slide anterior e rode o projeto
  
  ## Alterando o arquivo index.js
    - Faca uma alteracao no arquivo index.js
    - Veja o status do git
    - Adicione o arquivo alterado: `git add .`
    - Faca um commit: `git commit -m "Alteracao no arquivo index.js"`
    - Faca um push: `git push`
    - Obs: ele podera pedir login e senha nessa etapa
    - Sugestao: Criar um token
    - https://docs.github.com/pt/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token