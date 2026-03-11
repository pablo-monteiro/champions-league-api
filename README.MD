# 🏆 Champions League API

Uma API RESTful desenvolvida para gerenciar informações de jogadores e clubes da UEFA Champions League. Este projeto foi construído seguindo as melhores práticas de desenvolvimento, utilizando **Node.js**, **TypeScript** e uma **Arquitetura em Camadas (N-Layers)**.

---

## 🚀 Tecnologias Utilizadas

- **Runtime:** [Node.js](https://nodejs.org/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Framework Web:** [Express](https://expressjs.com/)
- **Transpilação/Build:** [Tsup](https://tsup.egoist.dev/)
- **Execução em Desenvolvimento:** [Tsx](https://tsx.is/)

---

## 🏗️ Arquitetura do Projeto

O projeto utiliza uma **Arquitetura em Camadas (N-Layers)** para garantir a separação de responsabilidades, facilidade de manutenção e testabilidade.

- **Controllers:** Responsáveis por lidar com as requisições HTTP e retornar as respostas.
- **Services:** Camada onde reside a lógica de negócio da aplicação.
- **Repositories:** Camada de abstração para acesso aos dados (atualmente utiliza dados em memória).
- **Models:** Definição das interfaces e tipos de dados.
- **Utils:** Funções utilitárias e helpers.

> [!NOTE]
> Você pode visualizar o diagrama de arquitetura detalhado na pasta `docs/arquitetura-n-layers.png`.

---

## 🛠️ Como Executar

### Pré-requisitos

- Node.js instalado (v18+)
- Gerenciador de pacotes (npm, yarn ou pnpm)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/pablo-monteiro/champions-league-api.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### Scripts Disponíveis

- **Desenvolvimento:** Inicia o servidor com hot-reload.

  ```bash
  npm run dev
  ```

- **Build:** Gera a versão de produção na pasta `dist`.

  ```bash
  npm run build
  ```

- **Produção:** Inicia o servidor a partir do código transpilado.
  ```bash
  npm start
  ```

O servidor estará disponível em: `http://localhost:3333/api`

---

## 📡 Endpoints da API

### Jogadores (`/players`)

| Método     | Endpoint           | Descrição                                            |
| :--------- | :----------------- | :--------------------------------------------------- |
| **GET**    | `/api/players`     | Retorna a lista de todos os jogadores.               |
| **GET**    | `/api/players/:id` | Retorna os detalhes de um jogador específico por ID. |
| **POST**   | `/api/players`     | Adiciona um novo jogador.                            |
| **PATCH**  | `/api/players/:id` | Atualiza as estatísticas de um jogador existente.    |
| **DELETE** | `/api/players/:id` | Remove um jogador do sistema.                        |

### Clubes (`/clubs`)

| Método  | Endpoint     | Descrição                                                  |
| :------ | :----------- | :--------------------------------------------------------- |
| **GET** | `/api/clubs` | Retorna a lista de todos os clubes disponíveis no sistema. |

---

## 📂 Estrutura de Pastas

```text
src/
├── controllers/    # Controladores de rota
├── services/       # Lógica de negócio
├── repositories/   # Acesso a dados (Data Access Layer)
├── models/         # Definição de tipos/interfaces
├── data/           # Fontes de dados (arquivos JSON)
├── utils/          # Funções utilitárias
├── app.ts          # Configuração do Express
├── routes.ts       # Definição de rotas
└── server.ts       # Ponto de entrada (Entry point)
```

---

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo [package.json](package.json) para mais detalhes.

---

Desenvolvido com ❤️ como parte dos estudos no módulo de Node.js da **DIO**.
