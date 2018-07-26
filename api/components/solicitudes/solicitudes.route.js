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


module.exports = router;
