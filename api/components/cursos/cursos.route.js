'use strict';
const express = require('express');
const router = express.Router();
const cursos = require('./cursos.api');

router.route('/registrar_curso')
    .post(function(req, res){
        cursos.registrar(req, res); 
});

router.route('/listar_cursos')
    .get(function(req, res){
        cursos.listar_cursos(req, res);

    });

router.route('/buscar_curso_id')
    .post(function(req,res){
        cursos.buscar_curso_id(req,res);  
    });    

router.route('/modificar_curso')
    .post(function(req,res){
        cursos.modificar_curso(req,res);
    });

router.route('/desactivar_curso')
    .post(function(req,res){
        cursos.desactivar_curso(req,res);
    });


module.exports = router;
