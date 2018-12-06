'use strict'

//definindo minha classe
function produtoController() { };

produtoController.prototype.post = async (req, res) => { };

produtoController.prototype.put = async (req, res) => { };

produtoController.prototype.get = async (req, res) => {
    res.status(200).send('Olá produto');
};

produtoController.prototype.getById = async (req, res) => {
    res.status(200).send(`Olá ${req.params.id}`);
};

produtoController.prototype.delete = async (req, res) => { }


module.exports = produtoController;
