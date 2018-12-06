'use strict'

//configurações do express
const app = require('./bin/express');
const variables = require('./bin/config/variables');

app.listen(variables.Api.port, () => {
    console.log(`Servidor rodando na porta -> ${variables.Api.port}`);    
});