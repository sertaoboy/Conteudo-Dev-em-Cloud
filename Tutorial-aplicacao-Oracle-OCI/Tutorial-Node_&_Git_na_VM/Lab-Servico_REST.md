# Objetivos
- Criar um REST no Nodejs e subir no Github
- Fazer o deploy do servico REST na Oracle Cloud
- Testar o servico com requisicoes GET no BROWSER
- Criar um Cliente que ira consumir o servico REst em uma aplicacao Java
- Testar o cliente rodando na maquina localmente

## Passo1 - Implementar a plicacao servidora  como um serivco REST no nodejs. OBS: Pode se basear no tutorial anterior sobre o deploy da aplicacao node na Oracle Cloud.

## 1.1- Baixe os arquivos disponiveis no AVA (servicoREST -SERVIDOR-NODEJS e users.json) suba os dois arquivos em um repo.

## 1.2 - Crie uma VM e configure o Nodejs para usar o pacote Express fazendo o clone do github. Os arquivos devem estar na mesma pasta.
> 1.2.1: Iniciar o projeto `npm init`
> 1.2.2: Instalar o express - `npm install express --save`
> 1.2.3: Configurar o projeto na sua IDE.
> 1.2.4: Rodar a aplicacao.

## 1.3 Testar no browser para as rotas GET definidas com o IP gerado pela AWS.

## Passo 2 - Implementar a aplicacao REST no Java
## 2.1 - Baixe o arquivo (CLiente REST - Aplicacao Java)  e configure um projeto Java no seu ambiente de preferencia (Eclipse, Netbeans, etc).
## 2.2 Compile a aplicacao no terminal retorna as mesmas informacoes que a requisicao do Browser




```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class restClienteNodeExample {

	public static void main(String[] args) {
		try {	
			
			URL url;
			url = new URL("http://127.0.0.1:8081/listUsers");
			//url = new URL("http://127.0.0.1:8081/listUser/3");
			HttpURLConnection connection = (HttpURLConnection) url.openConnection();
			connection.setRequestMethod("GET");

			BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
			StringBuilder stringBuilder = new StringBuilder();

			reader.lines().forEach(a->stringBuilder.append(a));
			System.out.println(stringBuilder);
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
```
> Copie o codigo acima e cole em um arquivo chamado `restClienteNodeExample.java` e salve-o no diretorio `src/main/java` do projeto `restClienteNodeExample`.





<br>





```javascript
user {
    name: 'mahesh',
    password: 'password1',
    profession: 'teacher',
    id: 1
    
};
user 2{
    name: 'suresh',
    password: 'password2',
    profession: 'librarian',
    id: 2
};

user 3 {
    name: 'ramesh',
    password: 'password3',
    profession: 'clerk',
    id: 3
};
```
> Copie o codigo acima e cole em um arquivo chamado `users.json` e salve-o no diretorio `src/main/resources` do projeto `restClienteNodeExample`.