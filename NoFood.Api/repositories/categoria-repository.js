'use strict'

require('../models/categoria-model');
const base = require('../bin/base/repositor-base');
const modelo = 'Categoria'

class categoriaRepository {

    constructor() {
        this._base = new base(modelo);
    }

    async create(categoria) {
        return this._base.create(categoria);
    }

    async getAll() {
        return await this._base.getAll();
    }

    async getById(id) {
        return await this._base.getById(id);
    }

    async update(id, categoria) {
        return await this._base.update(id, categoria);
    }

    async delete(id) {
        return await this._base.delete(id);
    }
}


module.exports = categoriaRepository;
