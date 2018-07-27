'use strict';
const express = require('express');
const router = express.Router();

const periodos = require('./periodos.api');

router.route('/registrar_periodo')

    .post(function(req, res){
        periodos.registrar(req, res);
    });


//Periodo debe ir en singular y en mayuscula
//El nombre de la coleccion debe coincidir con el nombre en la base de datos
module.exports = mongoose.model('Periodo' , RegistrarPeriodoSchema);
