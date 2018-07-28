'use strict';
const express = require('express');
const router = express.Router();

const periodos = require('./periodos.api');

router.route('/registrar_periodo')

    .post(function(req, res){
        periodos.registrar(req, res);
    });



router.route('/listar_periodos')

    .get(function(req, res){
        periodos.listar_periodos(req, res);
    });



module.exports = router;

