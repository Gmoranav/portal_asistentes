'use strict';
const express = require('express');
const router = express.Router();
const gruposApi = require('./grupos.api');

router.route('/registrar_grupo')
    .post(function(req, res){
        gruposApi.registrar_grupos(req, res); /**el registrar viene del API en la linea 8 */
});

    
router.route('/listar_grupos')
    .get(function(req, res){
        gruposApi.listar_grupos(req, res); /**el listar_examples viene del API en la linea 36 */
});

router.route('/buscar_grupo_por_id')
    .post(function (req, res) {
        gruposApi.buscar_grupo_por_id(req, res);
});

router.route('/modificar_grupo')
    .post(function (req, res) {
        gruposApi.modificar_grupo(req, res);
});



router.route('/desactivar_grupo')
.post(function (req, res) {
    gruposApi.desactivar_grupo(req, res);
});

module.exports = router;
