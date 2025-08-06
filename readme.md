<h1 align="center">LetMeAsk</h1>

<div align="center">
  <strong>Um app de Q&A para lives com superpoderes de IA 🤖</strong>
</div>

## 📖 Índice

- [📖 Índice](#-índice)
- [🔭 Visão Geral](#-visão-geral)
- [⚙️ Configuração do Ambiente](#️-configuração-do-ambiente)
  - [📌 Pré-requisitos](#-pré-requisitos)
  - [💡 Instruções](#-instruções)
- [💻 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [📄 Licença](#-licença)

## 🔭 Visão Geral

Projeto desenvolvido durante o evento **NLW Agents** da **Rocketseat** (2025).

O **LetMeAsk** é uma plataforma de perguntas e respostas (**Q&A**) para transmissões ao vivo, agora com superpoderes de **inteligência artificial**.  
A proposta é dar um upgrade no projeto clássico das NLWs utilizando IA generativa da Google (Gemini) para organizar, moderar e responder perguntas em tempo real durante as lives.

<br/>

> Este é o repositório do **Backend**.  
> Para acessar o **Frontend**, vá para: [github.com/LeonardoVRR/LetMeAsk_interface](https://github.com/LeonardoVRR/LetMeAsk_interface)

---

## ⚙️ Configuração do Ambiente

### 📌 Pré-requisitos

- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) instalados
- Conta com acesso à **Gemini API** da Google
- PostgreSQL (via Docker)
- Node.js

---

### 💡 Instruções

```bash
# Clone este repositório
$ git clone link-do-repositorio

# Acesse o diretório
$ cd letmeask

# Instale as dependências
$ npm install

# Copie o .env.example para .env e configure as variáveis de ambiente
$ cp .env.example .env

# Suba os containers do banco de dados
$ docker compose up -d

# Execute o app
$ npm run dev
```

## 💻 Tecnologias Utilizadas

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-1E1E1E?style=for-the-badge&logo=drizzle&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-4B5563?style=for-the-badge)
![Gemini API](https://img.shields.io/badge/Gemini_API-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 📄 Licença

Este projeto está licenciado sob a MIT.