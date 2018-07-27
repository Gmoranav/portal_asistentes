'use strict';
let mongoose = require('mongoose');

let RegistrarSedeSchema = new mongoose.Schema({
    nombre_sede : {type : String, required : true},
    provincia_sede : {type : String, required : true},
    canton_sede : {type : String, required : true},
    distrito_sede : {type : String, required : true},
    ubicacion_sede : {type : String, required : true},
});

module.exports = mongoose.model('Sede' , RegistrarSedeSchema);
