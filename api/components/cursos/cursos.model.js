'use strict';

let mongoose = require('mongoose');

let cursoSchema = new mongoose.Schema({

    nombre_curso : {type: String, required: true},
    codigo_curso : {type: String, required: true},
    cantidad_creditos : {type: Number, required: true},
    estado: {type: Number, required : true}

});

module.exports = mongoose.model('Curso', cursoSchema);
