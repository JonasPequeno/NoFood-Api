'use strict'

//definindo minha classe
function categoriaController() { };

categoriaController.prototype.post = async (req, res) => { };

categoriaController.prototype.put = async (req, res) => { };

categoriaController.prototype.get = async (req, res) => {
    res.status(200).send('Olá categoria');
};

categoriaController.prototype.getById = async (req, res) => {
    res.status(200).send(`Olá ${req.params.id}`);
};

categoriaController.prototype.delete = async (req, res) => { }


module.exports = categoriaController;
