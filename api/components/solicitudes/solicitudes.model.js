'use strict';
let mongoose = require('mongoose'); /*Conexion con el server de MongoDB*/

/*Esquema para los usuarios*/
let solicitudSchema = new mongoose.Schema({
    /**Apartir de aqui se crean las propiedades que se le solicita al usuario*/
    /**Las propiedades para crear usuarios con rol */

    primer_nombre : {type : String, required : true},
    segundo_nombre : {type : String},
    primer_apellido : {type : String, required : true},
    segundo_apellido : {type : String, required : true},
    curso : {type : String},
    periodo : {type : String},
    grupo : {type : String},
    cantidad_alumnos : {type : Number, required : true},
    horario : {type : String, required : true}



    /*crear uno por input*/
    /*grupos : [grupo : {type : String},]*/


});

/*Test = el nombre de la carpeta que estamos trabajando en mayuscula y singular*/
module.exports = mongoose.model('Solicitud', solicitudSchema);
