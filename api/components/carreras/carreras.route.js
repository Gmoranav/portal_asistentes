'use strict';

const express = require('express');
const router = express.Router();
const carreras = require('./carreras.api');

router.route('/registrar_carrera')
    .post(function(req, res){
    carreras.registrar(req, res);
    });


module.exports = router;
