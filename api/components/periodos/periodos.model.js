'use strict';
let mongoose = require('mongoose');

let RegistrarPeriodoSchema = new mongoose.Schema({
    nombrePeriodo : {type : String, required : true},
    estadoPeriodo : {type : String, required : true},
});

//Periodo debe ir en singular y en mayuscula
//El nombre de la coleccion debe coincidir con el nombre en la base de datos
module.exports = mongoose.model('Periodo' , RegistrarPeriodoSchema);