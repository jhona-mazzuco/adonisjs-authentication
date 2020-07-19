# Autenticação com AdonisJs v5
 
 ##### 1. Crie e inicie o projeto

Utilize os comandos abaixo para criar o projeto

```
npm init adonis-ts-app blog
```

ou

```
yarn create adonis-ts-app blog
```

Após isso inicialize o servidor utilizando 

```
node ace serve --watch
```

##### 2. Instale o pacote Lucid

Instale o pacote Lucid utilizando

```
npm i @adonisjs/lucid@alpha
```

ou

```
yarn add @adonisjs/lucid@alpha
```

Após isso inicie os comandos abaixo para criar os arquivos de configuração padrão

```
node ace generate:manifest
```

e também

```
node ace invoke @adonisjs/lucid
```

##### 3. Configure o banco de dados

Note que foi criado um arquivo .env dentro da raiz do projeto e nele estará contido os atributos abaixo

```
DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_USER=lucid
DB_PASSWORD=lucid
DB_NAME=lucid
```

Altere eles conforme seus dados de conexão, no meu caso, como utilizarei o banco de dados Postgresql ficará conforme mostrado abaixo

```
DB_CONNECTION=pg
DB_HOST=127.0.0.1
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=auth
```

Também foi utilizado o comando abaixo para instalar o driver do banco de dados

```
npm install pg
````

ou

```
yarn add pg
```

##### 4. Instale o pacote Auth

Instale o pacote Auth utilizando

```
npm i @adonisjs/auth@alpha
```

ou

```
yarn add @adonisjs/auth@alpha
```

Após instalado utilizado o comando abaixo
```
node ace invoke @adonisjs/auth
```

Logo após ele ira pedir o provider na qual será utilizado

```
> Select provider for finding users ...
  > Lucid  (Uses Data Models)
  Database  (Uses Database QueryBuilder)
```

Selecione o Lucid, após isso ele pedirá qual o guard que será utilizado

```
> Select which guard you need for authentication (select using space) ...
  ( ) Web  (Uses sessions for managing auth state)
  (*) API tokens  (Uses database backed opaque tokens)
```

Selecione o API Tokens para que seja trabalhado com tokens no banco de dados, então ele pedirá o nome do model que será utilizado para autenticação

```
Enter model name to be used for authentication: 
```

Preencher com `User` ou qualquer outro nome que simbolize sua model de usuários, então ele pedirá para criar as migrações que serão utilizadas para autenticação.

##### 5. Crie um usuário

Execute o comando abaixo para criar as tabelas geradas pelo Adonis na etapa anterior

```
node ace migration:run
```

Para criar um usuário padrão será criado um seeder para criar o usuário sem a necessidade do endpoint, então utilize os comandos abaixo

```
node ace make:seeder user
```

Veja que foi gerado dentro da pasta `./database/migrations/seeders` um arquivo `User.ts` e insira os dados para criar um novo usuário, em meu caso ficará conforme abaixo

```
export default class UserSeeder extends BaseSeeder {
  public async run () {
    const user = new User()
    user.email = 'user@email.com'
    user.password = '123456789'
    await user.save();
  }
}
```

E execute o comando abaixo para inserir o usuário

```
node ace db:seed
```

##### 6. Crie os métodos de autenticação

Por fim criaremos o controller que irá conter os métodos de login e logout, para gerar o controller use o comando abaixo

```
node ace make:controller auth
```

Após isso entre no AuthController que estará na seguinte pasta `./app/Controllers/Htpp/` e insira os seguintes métodos

```
public async login(ctx: HttpContextContract) {
  const {email, password} = ctx.request.only(['email', 'password'])
  return await ctx.auth.attempt(email, password)
}

public async logout(ctx: HttpContextContract) {
  return await ctx.auth.logout()
}
```

Feito isso, entre no arquivo `routes.ts` em `./start/` e crie duas rotas para chamada dos métodos, conforme abaixo

```
Route.post('/', 'AuthController.login')
Route.delete('/', 'AuthController.logout')
```

Então, ao fazer uma chamada `POST` na url `http:/localhost:3333/` com o body com `email` e `password` retornará um objeto semelhante abaixo

```
{
    "type": "bearer",
    "token": "Ng.5eXNbRgRTs6roLDtxbqpDEzlGZCrsU-XRlElAHX2jycOnWWdOXDXgj6pBtcS"
}
```

Assim copiando o token retornado e inserindo no Authentication da requisição, você conseguirá apagar o token fazendo uma chamada `DELETE` na url `http:/localhost:3333/`

###### Observações

 Toda documentação utilizada é encontrada em https://preview.adonisjs.com/
