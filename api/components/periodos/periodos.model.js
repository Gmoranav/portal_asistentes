'use strict';
let mongoose = require('mongoose');

let periodoSchema = new mongoose.Schema({
    nombre_periodo : {type : String, required : true},
    estado_periodo : {type : String, required : true},
    estado : {type : Number, required : true}
});

//Periodo debe ir en singular y en mayuscula
//El nombre de la coleccion debe coincidir con el nombre en la base de datos
module.exports = mongoose.model('Periodo' , periodoSchema);
