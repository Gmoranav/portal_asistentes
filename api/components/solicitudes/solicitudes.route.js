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

  router.route('/eliminar_solicitud')
  .post(function (req, res) {
      solicitudesApi.eliminar_solicitud(req, res);
  });

/*
router.route('/buscar_usuario_id')
    .post(function(req, res){
    usuariosApi.buscar_usuario_por_id(req, res);
});

router.route('/modificar_usuario')
    .post(function(req, res){
    usuariosApi.modificar_usuario(req, res);
});

*/


module.exports = router;
