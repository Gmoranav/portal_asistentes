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

router.route('/buscar_usuario_id')
    .post(function(req, res){
    usuariosApi.buscar_usuario_por_id(req, res);
});

router.route('/modificar_usuario')
    .post(function(req, res){
    usuariosApi.modificar_usuario(req, res);
});

router.route('/desactivar_usuario')
.post(function (req, res) {
    usuariosApi.desactivar_usuario(req, res);
});


//para cambiar contrasena 
router.route('/cambiar_contrasenna')
.post(function(req, res){  //metodo post
    usuariosApi.cambiar_contrasenna(req, res);
    console.log("usuarios.route:  completado")
});

//para recuperar contrasena 
router.route('/recuperar_contrasenna')
.post(function(req, res){  //metodo post
    usuariosApi.recuperar_contrasenna(req, res);
    console.log("usuarios.route:  completado")
});

module.exports = router;



