'use strict'

const express = require('express');
const controller = require('../controllers/categoria-controller');

let _crt = new controller();

const router = express.Router();

router.get('/', _crt.get);
router.get('/:id', _crt.getById);
router.put('/:id', _crt.put);
router.delete('/:id', _crt.delete);
router.post('/', _crt.get);

module.exports = router;