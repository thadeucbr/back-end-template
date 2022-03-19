
![](https://img.shields.io/npm/l/curupiras) ![](https://img.shields.io/librariesio/release/npm/curupiras) ![](https://img.shields.io/npm/v/curupiras) ![](https://img.shields.io/npm/dt/curupiras)
# Curupiras (Back-end Template)

## Conteúdo

 1. [O que é o curupiras?](#introdução)
 2. [Requisitos para utilizar o curupiras](#requisitos)
 3. [O que vem instalado no curupira?](#o-que-vem-instalado)
 4. [Instalando o Curupiras](#instalação)
 5. [Configurando as variáveis de ambiente](#configurando-as-variáveis-de-ambiente)
 6. [Iniciando o Curupiras](#iniciando-o-curupiras)
 7. [Utils](#utils) 

## Introdução

**O que é o curupiras?**
	

> O Curupiras é um template para criação de API's REST utilizando Express e outras tecnologias.

**Como surgiu?**

> Curupiras surgiu da ideia de economizar tempo na criação de novos projetos, seu principal objetivo é eliminar a complexidade de ter que pensar nas estruturas e configurações básicas de cada projeto.

Atualmente o Curupiras está na primeira versão, qualquer pessoa é bem vinda para sugerir alterações na sua estrutura, libs e configurações.

## Requisitos

 - [Node v16+](https://nodejs.org/en/download/)
 - npm ou [yarn](https://yarnpkg.com/getting-started/install)
 - [git v2.35+](https://git-scm.com/book/pt-br/v2/Começando-Instalando-o-Git)
 - tsc v4.5 (opcional) (`npm install -g typescript`)
 - [Docker](https://docs.docker.com/get-docker/)
 - [Docker Compose](https://docs.docker.com/compose/install/)

## O que vem instalado
Hoje o Curupiras vem com as seguintes libs instaladas:

**Dependencias**
 - argon2
 - celebrate
 - cors
 - dotenv
 - express
 - express-async-errors
 - jsonwebtoken
 - mysql
 - reflect-metadata
 - tsyringe
 - typeorm

**Dependencias de desenvolvimento**

 - ts-node-dev
 - tsconfig-paths
 - typescript

**Alem das libs ele também vem pré configurado com Dockerfile e docker-compse.yml, já com os containers do MySQL e da própria API**

## Instalação

Execute o comando `npx curupiras nome-do-seu-projeto`, pode ser que apareça uma mensagem pedindo para instalar o curupiras, digite "y" ou "s".

Configure suas variáveis de ambiente no arquivo .env.example e depois remova o .example do nome do arquivo.

Caso pretenda utilizar o Docker execute o comando docker-compose up, o projeto já vem pré configurado com o banco de dados e a aplicação. **Lembre de acessar o contêiner que está rodando o mysql e criar o database que foi declarado no .env**

**Lembrando que o TypeORM não cria o banco o banco de dados, sendo necessário já existir um para que o template funcione.** 

## Configurando as variáveis de ambiente

**TYPEORM PATHS**

| variavel |  valor  | descrição |
|--|--|--|
| TYPEORM_ENTITIES | Não alterar | Indica o diretório onde estão os arquivos das entidades com extensão ts |
| TYPEORM_MIGRATIONS | Não alterar | Indica o diretório dos arquivos das migrations com extensão ts|
| TYPEORM_MIGRATIONS_DIR | Não alterar | Indica o diretório das migrations |

**TYPEORM CONFIG**

| variavel |  valor  | descrição |
|--|--|--|
| TYPEORM_CONNECTION |string|Indica qual é o banco que estamos utilizando (MySQL, PG, MongoDB, etc)|
| TYPEORM_LOGGING |boolean|Habilita o modo debug do TypeORM mostrando todas as querys que são executadas|
| TYPEORM_SYNCHRONIZE |boolean|Realiza a sincronização de todas as entidades com o banco de dados ao iniciar|

**LOCAL DATABASE | TESTING DATABASE | PROD DATABASE**
| variavel |  valor  | descrição |
|--|--|--|
|TYPEORM_HOST |string|url do banco de dados caso esteja executando com Docker utilize o nome database|
|TYPEORM_PORT | string|porta do banco|
|TYPEORM_USERNAME|string|usuario do banco|
|TYPEORM_PASSWORD|string|senha do banco|
|TYPEORM_DATABASE|string|nome do banco|

**SERVER**

| variavel |  valor  | descrição |
|--|--|--|
|APP_PORT|number|Porta que vai rodar a API|

## Iniciando o Curupiras
### Utilizando com docker
Execute o comando `docker-compose up`

### Sem docker
 1. Rode as migrations com o comando `npm run migrate`
 2. Execute a api com o `npm run dev`

## Utils
### Geração automatica chaves RSA256
O projeto já veio com uma geração de chave public e private, o arquivo está no diretório src > shared > config > jwt

### AppError
src > shared > errors

Lançador de erros, a baixo um exemplo de como usar

    if (!validPassword) throw  new  AppError('Invalid user', 401)
AppError('Mensagem com erro', status code)

O erro lançado vai ser capturado pelo middleware ErrorHandler 

### ErrorHandler
src > shared > errors

Serve para tratar os erros inesperados e os erros do AppError, também envia no console um erro customizado.
