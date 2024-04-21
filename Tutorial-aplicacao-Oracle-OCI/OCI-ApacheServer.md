> Pre-condicao: Deve ter uma conta criada na Oracle Cloud
> Obs: Este material foi criado com base em matriel de treinamento da Oracle disponivel no Programa Oracle Academy.

* Objetivos do lab:
  * Criar uma instancia de maquina virtual na Oracle Cloud
  * Conectar-se na instancia via SSH e chave privada.
  * Instalar o Apache Server na instancia
  * Acessar o Apache Server via browser usando o IP publico ou DNS da instancia

# Passo 1 - Criar uma instancia na Oracle Cloud do tipo gratuita(Always Free)
> 1.1 faca Login na sua conta 
> 1.2 Selecione Create a VM instance (Always Free)
> 1.3 Nas proximas telas utilize as configuracoes padrao sugeridas
> 1.4 Na tela abaixo, salve a chave em um local seguro na sua maquina pessoal. Esse e o arquivo que contem a chave privada para conectar na sua instancia SSH. Nao deixe esse arquivo salvo em outras maquinas.
> 1.5 Deixe as outras opcoes conforme padrao e lcique em create para criar a instancia. Apos alguns minutos a maquina sera criada.

<br>


# Passo 2 - Configure a liberacao da porta HTTP para sua instancia.
> 2.1 Na pagina principal da sua conta selecione Compute --> Instances
> 2.2 Escolha a instancia que voce acabou de criar. Provavelmente so aparecera uma.
> 2.3 Nos detalhes da instancia clique no link Virtual CLoud Network conforme assinalado em vermelho abiaxo.
> 2.4 Na aba Resource ao lado esquerdo, selecione security lists.
> 2.5 Selecione a Default security list
> 2.6 Selecione Add Ingress Rules
> Coloque as seguintes informacoes e selecione ADD


# Conexao via SSh
- Apos fazer o download da chave, abra um terminal e navegue ate a pasta onde a chave foi salva.
- Execute o seguinte comando para mudar as permissoes da chave:
```bash
chmod 400 <nome-da-chave>
```
- Execute o seguinte comando para conectar na instancia via SSH:
```bash
ssh -i <nome-da-chave> opc@<ip-publico-da-instancia>
```
- No windows : ssh -i "caminho-para-chave" <nomeDoUsuario>@<IP>
- Uma vez conectado, executar os seguintes comandos para configurar o Firewall: `sudo firewall-cmd --permanent --add-port=80/tcp` e `sudo firewall-cmd --reload`
- Instale o Apache Server com o comando: `sudo yum install httpd`, sendo a Distro escolhida o CentOS.
- Inicie o Apache Server com o comando: `sudo systemctl start httpd`
- Acesse o Apache Server via browser usando o IP publico ou DNS da instancia.
