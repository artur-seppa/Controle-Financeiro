# Use uma imagem base do Node.js
FROM node:18

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json para o contêiner
COPY ./app/package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o código da aplicação para o contêiner a partir da subpasta 'app'
COPY ./app .

# Exponha a porta que o app irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação em modo de desenvolvimento
CMD ["npm", "start"]