'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const variables = require('./config/variables');

const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');

//invocando o express
const app = express();

//configuração de parser do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//configuração do mongoose
mongoose.connect(variables.Database.connection);

app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);

module.exports = app;