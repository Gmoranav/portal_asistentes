'use strict';
const express = require('express');
const router = express.Router();
const gruposApi = require('./laboratorios.api');

router.route('/registrar_laboratorio')
    .post(function(req, res){
        gruposApi.registrar(req, res); /**el registrar viene del API en la linea 8 */
});

    
router.route('/listar_laboratorio')
    .get(function(req, res){
        gruposApi.listar_laboratorio(req, res); /**el listar_examples viene del API en la linea 36 */
});

module.exports = router;