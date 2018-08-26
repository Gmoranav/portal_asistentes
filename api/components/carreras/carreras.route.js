'use strict';

const express = require('express');
const router = express.Router();
const carrerasApi = require('./carreras.api');

router.route('/registrar_carrera')
    .post(function (req, res) {
        carrerasApi.registrar(req, res);
    });

router.route('/listar_carreras')
    .get(function (req, res) {
        carrerasApi.listar_carreras(req, res);
    });

router.route('/buscar_carrera_id')
    .post(function (req, res) {
        carrerasApi.buscar_carrera_id(req, res);
    });

router.route('/modificar_carrera')
    .post(function (req, res) {
        carrerasApi.modificar_carrera(req, res);
    });

router.route('/desactivar_carrera')
    .post(function (req, res) {
        carrerasApi.desactivar_carrera(req, res);
    });

module.exports = router;