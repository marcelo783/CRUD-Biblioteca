<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Biblioteca API

Este projeto é uma API de gerenciamento de biblioteca desenvolvida com NestJS e MongoDB. O foco principal do projeto é a implementação de testes e documentações para garantir a qualidade e a funcionalidade da API.

## Tecnologias Utilizadas
- NestJS
- MongoDB
- Jest
- Swagger

## Setup
Instale as dependências

```bash
$ npm install
```

## Configuração do Banco de Dados

Crie um banco chamado biblioteca.
Altere o arquivo .env com a URL de conexão do MongoDB. Exemplo:
```bash

 MONGO_URI=mongodb://localhost:27017/biblioteca

```

## Documentação com Swagger

A documentação da API pode ser acessada em http://localhost:3000/Docs após iniciar o servidor.


## Iniciando a API

```
npm run start:dev
```

## Testes

```
npm run test
```

## Documentação de Testes
Os testes automatizados foram utilizando Jest
### Testes de Unidade para LivroService
- Criação de Livro.
- Listagem de Todos os Livros.
- Busca de Livro por ID.
- Atualização de Livro.
- Exclusão de Livro.

## Testes Manuais com Insomnia
Os testes manuais foram documentados em uma planilha de Excel, incluindo
### Cadastro de Livros:
- Enviar uma requisição POST para /livros
- Verificar se o livro foi cadastrado corretamente.
### Verificar se o livro foi cadastrado corretamente.
- Enviar uma requisição POST para /livros com campos faltando.
- Verificar se a API retorna erro 400 Bad Request.
### Busca de Todos os Livros:
- Enviar uma requisição GET para /livros
- Verificar se a lista de livros está correta.
### Atualização de Livros:
- Enviar uma requisição PUT para /livros/{id}.
- Verificar se os dados do livro foram atualizados.
### Exclusão de Livros
- Enviar uma requisição DELETE para /livros/{id}.
- Verificar se o livro foi excluído corretamente.
## Planilha de Documentação de Testes
- ID: Identificador único do teste.
- Funcionalidade: A funcionalidade sendo testada.
- Passos: Passos necessários para realizar o teste.
- Resultado Esperado: Resultado esperado do teste.
- Resultado Obtido: Resultado obtido ao realizar o teste.
- Status: Status do teste (passou/falhou).

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
