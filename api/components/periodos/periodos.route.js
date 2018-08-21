'use strict';
const express = require('express');
const router = express.Router();
const periodos = require('./periodos.api');

//registrar
router.route('/registrar_periodo')

    .post(function(req, res){
        periodos.registrar(req, res);
    });

//listar
router.route('/listar_periodos')

    .get(function(req, res){
        periodos.listar_periodos(req, res);
    });

//buscar 
router.route('/buscar_periodo_id')
    .post(function(req, res){
        periodos.buscar_periodo_id(req, res);
    }); 

//modificar 
router.route('/modificar_periodo')
    .post(function(req, res){
        periodos.modificar_periodo(req, res);
    });




module.exports = router;

