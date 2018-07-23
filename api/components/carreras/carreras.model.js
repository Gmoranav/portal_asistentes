'use strict';

let mongoose = require('mongoose');

let carreraSchema = new mongoose.Schema({

    codigo_carrera : {type: String, required: true},
    nombre_carrera : {type: String, required: true},
    creditos_totales : {type: Number, required: true},
    fecha_creacion: {type: String, required: true},
    slt_sede: {type: String}

});

module.exports = mongoose.model('Carrera', carreraSchema);
