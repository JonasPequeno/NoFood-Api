'use strict'

const mongoose = require('mongoose');

const schema = mongoose.Schema;

const produtoModel = new schema({
    nome: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    descricao: {
        required: true,
        type: String,
    },
    ativa: {
        type: Boolean,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    ativa: {
        type: Boolean,
        required: true,
    },
    foto: {
        type: String,
        required: true,
    }
}, { versionKey: false });


produtoModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('Produto', produtoModel);
