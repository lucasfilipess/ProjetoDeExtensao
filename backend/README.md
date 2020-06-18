# Backend

Este é o backend da aplicação, feito em NodeJS utilizando o Express.
No modelo [**REST**](https://www.youtube.com/watch?v=ghTrp1x_1As&vl=pt) fica responsáveis pelas regras de negócio e conexão como banco de dados e se comunica com o frontend através de requisições http.
Na fase de desenvolvimento esta comunicação é feita em localhost através da porta 3333 que está selecionada por padrão em **src** > **server**

# Install

Para rodar a aplicação será necessário ter instalado em sua máquina a última versão do [**NoodeJs**](https://nodejs.org/pt-br/download/package-manager/) aconselho utilizar um gerenciador de pacotes para isso.

Clone o repositório usando git clone https://github.com/Lucas-FilipeSS/ProjetoExtensao.git.
Depois navegue até a pasta do backend e utilize o comando "**npm install**" ou "**yarn install**" se for o caso, após instalar os node modules utilize "**npm start**" ou "**yarn start**", a aplicação estará disponível em http://localhost:3333

knex migrate:make migration_name
