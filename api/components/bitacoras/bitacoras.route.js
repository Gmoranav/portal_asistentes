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

router.route('/buscar_bitacora_por_id')
    .post(function(req, res){
    bitacorasApi.buscar_bitacora_por_id(req, res);
});

router.route('/modificar_bitacora')
    .post(function(req, res){
    bitacorasApi.modificar_bitacora(req, res);
});

router.route('/aprobar_bitacora')
    .post(function(req, res){
    bitacorasApi.aprobar_bitacora(req, res);
});

router.route('/desactivar_bitacora')
    .post(function(req, res){
    bitacorasApi.desactivar_bitacora(req, res);
});

router.route('/rechazar_bitacora')
    .post(function(req, res){
    bitacorasApi.rechazar_bitacora(req, res);
});


module.exports = router;
