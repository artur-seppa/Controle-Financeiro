# Controle-Financeiro

Sistema simples de cadastro de entradas e saídas de recursos financeiros. 

## Funcionalidades
- Os usuários podem registrar suas entradas e saídas financeiras.
- Visualização do total de entradas, saídas e saldo restante na conta.
- Opção para excluir registros de transações financeiras.
## Tecnologias Utilizadas
- React
- React Hooks
- styled-components
- LocalStorage
- Docker

## Como Rodar o Projeto

Siga os passos abaixo para rodar a aplicação localmente:

1. Clone este repositório.
   ```bash
   git clone https://github.com/artur-seppa/Controle-Financeiro.git
   ```

2. Navegue até o diretório do projeto
   ```bash
   cd Controle-Financeiro/app
   ```

3. Instale as dependências.
   ```bash
   npm install
   ```

4. Inicie a aplicação.
   ```bash
   npm start
   ```

Agora você pode acessar a aplicação em http://localhost:3000.

## Ambiente de Desenvolvimento com Docker

Para facilitar o desenvolvimento, disponibilizei um ambiente Docker. Siga os passos abaixo:

1. Certifique-se de ter o Docker instalado em sua máquina.
2. No diretório raiz do projeto, execute o seguinte comando para subir o container docker junto com a imagem.

 ```bash
    docker-compose up --build
   ```

A aplicação estará disponível em http://localhost:3000.

