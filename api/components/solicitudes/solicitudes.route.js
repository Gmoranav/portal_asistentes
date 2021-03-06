'use strict';
const express = require('express');
const router = express.Router();
const solicitudesApi = require('./solicitudes.api');

router.route('/registrar_solicitud')
    .post(function(req, res){
        solicitudesApi.registrar_solicitud(req, res);
    });

router.route('/listar_solicitudes')
    .get(function(req, res){
        solicitudesApi.listar_solicitudes(req, res);
    });

router.route('/buscar_solicitud_id')
    .post(function(req, res){
      solicitudesApi.buscar_solicitud_id(req, res);
    });

router.route('/modificar_solicitud')
    .post(function (req, res){
      solicitudesApi.modificar_solicitud(req, res);
    });
router.route('/desactivar_solicitud')
    .post(function (req, res) {
        solicitudesApi.desactivar_solicitud(req, res);
    });
router.route('/modificar_solicitud_por_decanatura')
    .post(function (req, res) {
        solicitudesApi.modificar_solicitud_por_decanatura(req, res);
    });
router.route('/aceptar_solicitud_por_rectoria')
    .post(function (req, res) {
        solicitudesApi.aceptar_solicitud_por_rectoria(req, res);
    });
module.exports = router;
