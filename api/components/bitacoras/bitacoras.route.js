'use strict';
const express = require('express');
const router = express.Router();
const bitacorasApi = require('./bitacoras.api');

router.route('/registrar_bitacora')
    .post(function(req, res){
    bitacorasApi.registrar_bitacora(req, res);
});

router.route('/agregar_registros')
    .post(function(req, res){
    bitacorasApi.agregar_registros(req, res);
});

router.route('/listar_bitacoras')
    .get(function(req, res){
    bitacorasApi.listar_bitacoras(req, res);
});

router.route('/buscar_bitacoras_id')
    .post(function(req, res){
    bitacorasApi.buscar_bitacoras_por_id(req, res);
});

router.route('/modificar_bitacora')
    .post(function(req, res){
    bitacorasApi.modificar_bitacora(req, res);
});

module.exports = router;