'use strict';
let mongoose = require('mongoose');

let RegistrarSedeSchema = new mongoose.Schema({
    nombreSede : {type : String, required : true},
    provinciaSede : {type : String, required : true},
    cantonSede : {type : String, required : true},
    distritoSede : {type : String, required : true},
    ubicacionSede : {type : String, required : true},
});

module.exports = mongoose.model('Sede' , RegistrarSedeSchema);