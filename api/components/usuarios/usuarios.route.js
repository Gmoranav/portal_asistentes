'use strict';
const express = require('express');
const router = express.Router();
const usuariosApi = require('./usuarios.api');

router.route('/registrar_usuario')
    .post(function(req, res){
        usuariosApi.registrar_usuario(req, res);
    });

router.route('/listar_usuarios')
    .get(function(req, res){
        usuariosApi.listar_usuarios(req, res);
    });

module.exports = router;