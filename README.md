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

####4. Instale o pacote auth
Utilize os comandos abaixo para instalar o pacote

