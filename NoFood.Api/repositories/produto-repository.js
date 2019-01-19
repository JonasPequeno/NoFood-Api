'use strict'

require('../models/produto-model');
const mongoose = require('mongoose');
const ProdutoModel = mongoose.model('Produto');

class produtoRepository {
    constructor() {

    }

    async create(produto) {
        let modelo = new ProdutoModel(produto);
        await modelo.save();
    }

    async getAll() {
        return await ProdutoModel.find();
    }

    async getById(id) {
        return await ProdutoModel.findById(id);
    }

    async update(id, produto) {
        await ProdutoModel.findByIdAndUpdate(id, { $set: produto });
        return await ProdutoModel.findById(id);
    }

    async delete(id) {
        return await ProdutoModel.findByIdAndRemove(id);
    }
}

module.exports = produtoRepository;

