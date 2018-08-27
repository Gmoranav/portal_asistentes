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
      cedula_asistente : {type : String, required : true},

      nombre_curso : {type : String},
      grupo : {type : String},
      periodo : {type : String},

  /*
      cantidad_alumnos : {type : Number, required : true},
      horario : {type : String, required : true}
      profesores:[{
        nombre_profesor: {type : String, required : true},
        cedula_profesor: {type : Number, required : true},
      }]
    }
  */
      cedula_profesor: {type : Number/*, required : true*/},
      estado : {type : Number/*, required : true*/},
/******************************************************************************/
      carrera : {type : String},
      fecha_de_ingreso : {type : String},
      teléfono : {type : Number},
      correo_electrónico : {type : String},

      cursos_llevados:[
        {
         código_curso : {type : String},
         nota_del_cursos : {type : String},
         ha_sido_asistente : {type : Boolean}
         }
       ]
});

/*Test = el nombre de la carpeta que estamos trabajando en mayuscula y singular*/
module.exports = mongoose.model('Solicitud', solicitudSchema);
