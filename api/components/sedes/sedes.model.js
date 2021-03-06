'use strict';
let mongoose = require('mongoose');  //mongoose es el que nos permite conectarnos a la base de datos

let sedeSchema = new mongoose.Schema({
    nombre_sede : {type : String, required : true},
    provincia_sede : {type : String, required : true},
    canton_sede : {type : String, required : true},
    distrito_sede : {type : String, required : true},
    ubicacion_sede : {type : String, required : true},
    estado : {type : Number, required : true}

});

module.exports = mongoose.model('Sede' , sedeSchema);
