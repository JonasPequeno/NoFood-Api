
'use strict'

require('../models/produto-model');
const base = require('../bin/base/repositor-base');

const modelo = 'Categoria';

class produtoRepository {

    constructor() {
        this._base = new base(modelo);
    }

    async create(produto) {
        return this._base.create(produto);
    }

    async getAll() {
        return await this._base.getAll();
    }

    async getById(id) {
        return await this._base.getById(id);
    }

    async update(id, produto) {
        return await this._base.update(id, produto);
    }

    async delete(id) {
        return await this._base.delete(id);
    }
}

module.exports = produtoRepository;

