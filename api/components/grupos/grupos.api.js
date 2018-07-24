'use strict';

/**
 * la const exampleModel se cambia en 
 */
const grupoModel = require('./grupos.model');

module.exports.registrar = function(req, res){
    
    /**Todo para registrar un usuario va aqui */
    let nuevoGrupo = new grupoModel({

        /**Este es el mismo input que el de model.js */
        nombre : req.body.nombre,
        laboratorio : req.body.laboratorio,
        profesor : req.body.profesor,
        cantidad_de_estudiantes : req.body.cantidad_de_estudiantes,
        horario : req.body.horario

    });

    nuevoGrupo.save(function(error){
        
        if(error){
            res.json({
                success : false,
                msj : ' El usuario no pudo ser registrado : ' + error
            });
        }else{
            res.jason({
                success : true,
                msj : ' El usuario ha sido registrado de forma exitosa'
            });
        }

    });
};

module.exports.listar_grupos = function(req, res){
    grupoModel.find().sort({nombre : 'asc'}).then(
        function(grupos){
            res.send(grupos);
        }
    ); 
};