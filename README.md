# Curupiras (Back-end Template)

## Conteúdo

 1. [O que é o curupiras?](#introdução)
 2. [Requisitos para utilizar o curupiras](#requisitos)
 3. [O que vem instalado no curupira?](#o-que-vem-instalado)
 4. [Instalando o Curupiras](#instalação)
 5. [🚧Configurando as variáveis de ambiente🚧](#configurando-as-variáveis-de-ambiente)
 6. [🚧Iniciando o Curupiras🚧](#)
 7. [🚧Scripts Json🚧](#) 

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

## Configurando as variáveis de ambiente 🚧(Ainda escrevendo)🚧

**TYPEORM PATHS**

| variavel |  valor  | descrição |
|--|--|--|
| TYPEORM_ENTITIES | Não alterar | Indica o diretório onde estão os arquivos das entidades com extensão ts |
| TYPEORM_MIGRATIONS | Não alterar | Indica o diretório dos arquivos das migrations com extensão ts|
| TYPEORM_MIGRATIONS_DIR | Não alterar | Indica o diretório das migrations |

**TYPEORM CONFIG**

| variavel |  valor  | descrição |
|--|--|--|
| TYPEORM_CONNECTION |string| |
| TYPEORM_LOGGING |boolean| |
| TYPEORM_SYNCHRONIZE |boolean| |

**LOCAL DATABASE | TESTING DATABASE | PROD DATABASE**
| variavel |  valor  | descrição |
|--|--|--|
|TYPEORM_HOST |string| |
|TYPEORM_PORT | string| |
|TYPEORM_USERNAME|string| |
|TYPEORM_PASSWORD|string| |
|TYPEORM_DATABASE|string| |

**SERVER**

| variavel |  valor  | descrição |
|--|--|--|
|APP_PORT|number|Porta que vai rodar a API|
