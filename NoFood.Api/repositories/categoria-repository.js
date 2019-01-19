'use strict'

require('../models/categoria-model');

const mongoose = require('mongoose');
const CategoriaModel = mongoose.model('Categoria');

class categoriaRepository {

    constructor() {

    }

    async create(data) {
        let modelo = new CategoriaModel(data);
        let resultado = await modelo.save();
        return resultado;
    };

    async update(id, data) {
        await CategoriaModel.findOneAndUpdate(id, { $set: data });
        return CategoriaModel.findById(id);
    };

    async getAll() {
        return await CategoriaModel.find();
    }

    async getById(id) {
        return await CategoriaModel.findById(id);
    }

    async delete(id) {
        return await CategoriaModel.findByIdAndRemove(id);
    }
}


module.exports = categoriaRepository;
