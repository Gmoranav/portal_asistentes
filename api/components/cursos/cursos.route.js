'use strict';
const express = require('express');
const router = express.Router();
const cursos = require('./cursos.api');

router.route('/registrar_curso')
    .post(function(req, res){
        cursos.registrar(req, res); 
});


module.exports = router;
