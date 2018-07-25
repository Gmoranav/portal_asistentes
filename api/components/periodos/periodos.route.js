'use strict';
const express = require('express');
const router = express.Router();

const periodos = require('./periodos.api');

router.route('/registrar_periodo')

    .post(function(req, res){
        periodos.registrar(req, res);
    });




/*misma funcion para LISTAR
router.route('listar_periodos')
    //el metodo .get para obtener informacion de la base de datos (listar)
    .get(function(req, res){
        periodos.listar_periodos(req, res);
    }); */


//la informacion de los metodos se exporta al backEnd con la siguiente instruccion:
module.exports = router;



/**
 *PARA LEVANTAR EL SERVIDOR, ESCRIBIR: 'node server.js' EN LA CONSOLA Y DARLE ENTER
 *(Debe mostrar un mensaje de conexion establecida)
 */

    

