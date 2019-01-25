
'use strict'

require('../models/usuario-model');
const base = require('../bin/base/repositor-base');

const modelo = 'Usuario';

class usuarioRepository {

    constructor() {
        this._base = new base(modelo);
    }

    async create(usuario) {
        return this._base.create(usuario);
    }

    async getAll() {
        return await this._base.getAll();
    }

    async getById(id) {
        return await this._base.getById(id);
    }

    async update(id, usuario) {
        return await this._base.update(id, usuario);
    }

    async delete(id) {
        return await this._base.delete(id);
    }
}

module.exports = usuarioRepository;

