# Roteiro
> Controle de versao de codigo
> Ferramenta Git

# Controle de versao de codigo
- Gerenciar as versoes de um ou mais arquivos
* Muito utilizado em projetos de desenvolvimento de software
  * Precisa-se ter controle sobre as alteracoes realizadas
  * Manter as atualizacoes realizadas
  * Nao perder o trabalho feito
  * Evitar conflito de versoes
  * Trabalho em equipe (quem fez o que e quando)
- Historico de versoes
- Caso ocorra problemas pode voltar a versao estavel

# Controle de versao no Git
- Leitura: https://engsoftmoderna.info/cap10.html

# Caracteristicas do Git
- Operacoes locais
- Permite navegar pelo historico
- Facilita o desenvolvimento por diversas pessoas
- Podem trabalhar ao mesmo tempo nos mesmos arquivos

## Primeiros comandos
- Configurar nome e email
> No terminal do projeto:
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@.com"
```
- Testando: `git config --list`

## Iniciando um repositorio
- ```bash
  git init
  ```
- Cria um diretorio oculto `.git` na pasta do projeto
- Este diretorio contem todos os arquivos necessarios para o controle de versao
- Nao mexer neste diretorio
- O diretorio `.git` e o repositorio
- O diretorio do projeto e o diretorio de trabalho
- O diretorio de trabalho e onde os arquivos do projeto estao
- O diretorio de trabalho e onde os arquivos sao modificados
- O diretorio de trabalho e onde os arquivos sao adicionados
- O diretorio de trabalho e onde os arquivos sao removidos
- O diretorio de trabalho e onde os arquivos sao commitados
- O diretorio de trabalho e onde os arquivos sao enviados para o repositorio
- O diretorio de trabalho e onde os arquivos sao recebidos do repositorio
- O diretorio de trabalho e onde os arquivos sao atualizados


## Adicionando um arquivo
- ```bash
  git add nome_do_arquivo
  ```
- Verificando o status:
- ```bash
  git status
  ```

## Commitando um arquivo
- ```bash
  git commit -m "Mensagem do commit"
  ```

## Fazendo alteracoes
- Apos editar o arquivo, digitar o comando `git status`
- O arquivo modificado aparecera em vermelho
- Adicionar o arquivo modificado: `git add -A`
- Flag `-A` adiciona todos os arquivos modificados

## Conferindo o historico - git log
- ```bash
  git log
  ```
- Mostra o historico de commits
- Mostra o hash do commit
- Mostra o autor do commit
- Mostra a data do commit
- Mostra a mensagem do commit
- Mostra o conteudo do commit

## Usando uma versao anterior - git checkout
- ```bash
  git checkout hash_do_commit
  ```
- Volta para a versao do commit informado
- O hash do commit e um numero unico
- O hash do commit e gerado automaticamente
- O hash do commit e uma sequencia de caracteres

## Voltando para a versao atual - git checkout
- ```bash
  git checkout master
  ```
- Volta para a versao atual
- A branch master e a branch principal

## Desfazendo uma alteracao em um arquivo
- Edite o conteudo do arquivo
- Suponha que voce nao gostou da alteracoes que fez e queira desfazer use o comando:
- ```bash
  git checkout -- nome_do_arquivo
  ```
- Abra o arquivo e veja que a alteracao foi desfeita

## Ignorando arquivos
- Criar um arquivo chamado `.gitignore`
- Alguns arquivos do projeto nao precisam ser versionados
- Exemplos:
  * Arquivos temporarios
  * Arquivos de log
  * Arquivos de configuracao
  * Arquivos de build
  * Arquivos de dependencias
  * Arquivos de bibliotecas

# Como testar o .gitignore
- Copie e cole um arquivo
- Renomeie o arquivo
- Edite o .gitignore para ignorar figuras :
- ```bash
  *.jpg
  ```
- Veja o comando `git status` antes e depois de editar o .gitignore

## Clonando um repositorio
- git clone serve para fazer uma copia de um repo
- Esse repo pode ser local ou estar num servidor na nuvem como no GitHub

# Testando localmente
- Crie uma pasta onde voce ira criar o clone
- Execute o comando `git clone caminho_do_repositorio`

