'use strict';

let mongoose = require('mongoose');

let cursoSchema = new mongoose.Schema({

    nombre_curso : {type: String, required: true},
    codigo_curso : {type: String, required: true},
    slt_sede : {type: String},
    cantidad_creditos : {type: Number, required: true},
    slt_carreraCurso : {type: String}

});

module.exports = mongoose.model('Curso', cursoSchema);
