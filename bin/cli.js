#!/usr/bin/env node
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const { execSync } = require('child_process');

const runCommand = command => {
  try { 
    execSync(`${command}`, {stdio: 'inherit'})
  } catch (error) {
    console.error(`Failed to execute ${command}`, error)
    return false
  }
  return true
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/thadeucbr/back-end-template ${repoName}`
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Criando o projeto ${repoName}`)
const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) {
  console.error("\x1b[31m",'Algo deu errado durante a criação do projeto, não foi possível criar o projeto.')
  process.exit(-1);
}
console.log('Projeto criado com sucesso')

console.log(`Instalando dependencias para ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) { 
  console.error("\x1b[31m",'Algo deu errado durante a instalação das dependencias do projeto.')
  process.exit(-1);
}
console.log(' ')
console.log(`Projeto ${repoName} criado com sucesso.`)
console.log(' ')
console.log(`Digite \x1b[36m cd ${repoName}\x1b[0m para acessar o seu projeto`)
console.log(' ')
console.log(`Descomente o arquivo \x1b[36m".env.example"\x1b[0m, preencha com seus dados e remova o ".example" do nome do arquivo`)
console.log(' ')
console.log('Para rodar a aplicação utilizando docker execute o comando \x1b[36m"docker-compose up"\x1b[0m')
console.log(' ')
console.log('Para rodar sem o docker utilize o comando \x1b[36m"npm run migrate && npm run dev"\x1b[0m')