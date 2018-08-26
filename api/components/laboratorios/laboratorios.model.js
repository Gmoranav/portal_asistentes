'use strict';
let mongoose = require('mongoose'); /*Conexion con el server de MongoDB*/

/*Esquema para los usuarios*/
/**
 * Cambiar exampleSchema y Template 
 */
let laboratorioSchema = new mongoose.Schema({
    /**Apartir de aqui se crean las propiedades que se le solicita al usuario*/
    /**Las propiedades para crear usuarios con rol */

    /**El example seria el input al que se le solicita al usuario */
    nombre_laboratorio : {type : String, required : true},
    cantidad_espacios : {type : String, required : true},
    sede_laboratorio : {type : String, required : true},
    estado : {type : Number, required : true}

}); 

module.exports = mongoose.model('Laboratorio', laboratorioSchema);
