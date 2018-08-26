'use strict';
const express = require('express');
const router = express.Router();
const sedes = require('./sedes.api');

//registrar
router.route('/registrar_sede')
    .post(function (req, res) {
        sedes.registrar_sede(req, res);
    });

//listar
router.route('/listar_sedes')
    .get(function (req, res) {
        sedes.listar_sedes(req, res);
    });

//buscar sede
router.route('/buscar_sede_id')
    .post(function (req, res) {
        sedes.buscar_sede_id(req, res);
    });

//modificar sede
router.route('/modificar_sede')  //el archivo "./sedes.api" es el que responde a esta ruta
    .post(function (req, res) {
        sedes.modificar_sede(req, res);
    });

//desactivar
router.route('/desactivar_sede')
    .post(function (req, res) {
        sedes.desactivar_sede(req, res);
    });


module.exports = router;
