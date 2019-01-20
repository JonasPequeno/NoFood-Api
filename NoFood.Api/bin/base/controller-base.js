
'use strict'

exports.post = async (repository, validationContract, req, res) => {
    try {
        let data = req.body;
        if (!validationContract.isValid()) {
            req.status(400).send({mensage: "Existem dados inválidos na sua requisição!"});
        }
    } catch (error) {

    }
}
exports.put = async (repository, validationContract, req, res) => {

}
exports.get = async (repository, req, res) => {

}
exports.getById = async (repository, req, res) => {

}
exports.delete = async (repository, req, res) => {

}