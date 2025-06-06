
# 🔗 Encurtador de Links

Este projeto é uma API RESTful desenvolvida em Node.js e TypeScript, com o objetivo de encurtar URLs longas, fornecendo uma versão curta e redirecionando para a original.

## 🚀 Instalação e Execução

1. **Clone o repositório:**

```bash
git clone https://github.com/RubemRibeiro/encurtador-de-links.git
cd encurtador-de-links
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure as variáveis de ambiente:**

Crie um arquivo `.env` na raiz do projeto e defina as variáveis necessárias, como a URL de conexão com o banco de dados.

4. **Inicie o servidor:**

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`.

## 🧪 Exemplos de Uso

### Encurtar uma URL:

```bash
POST /api/shorten
Content-Type: application/json

{
  "originalUrl": "https://www.exemplo.com"
}
```

**Resposta:**

```json
{
  "shortUrl": "http://localhost:3000/abc123"
}
```

### Acessar a URL encurtada:

```bash
GET /abc123
```

**Resposta:**

Redirecionamento (HTTP 302) para `https://www.exemplo.com`.

## 📦 Dependências

- **express**: Framework web para Node.js.
- **mongoose**: ODM para MongoDB, facilitando a modelagem de dados.
- **dotenv**: Carrega variáveis de ambiente de um arquivo `.env`.
- **shortid**: Gera identificadores curtos e únicos para as URLs.



## 📚 Documentação Extensiva

### Estrutura do Projeto:

```bash
encurtador-de-links/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── app.ts
├── .env
├── package.json
└── tsconfig.json
```

### Scripts Disponíveis:

- `npm run dev`: Inicia o servidor em modo de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm start`: Inicia o servidor em modo de produção.




