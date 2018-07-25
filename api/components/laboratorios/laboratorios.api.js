'use strict';

/**
 * la const exampleModel se cambia en 
 */
const laboratorioModel = require('./laboratorios.model');

module.exports.registrar_laboratorios = function(req, res){
    
    /**Todo para registrar un usuario va aqui */
    let nuevoLaboratorio = new laboratorioModel({

        /**Este es el mismo input que el de model.js */
        nombre_laboratorio : req.body.nombre_laboratorio,
        cantidad_espacios : req.body.cantidad_espacios
    });

    nuevoLaboratorio.save(function(error){
        
        if(error){
            res.json({
                success : false,
                msj : ' El laboratorio no pudo ser registrado : ' + error
            });
        }else{
            res.json({
                success : true,
                msj : ' El laboratorio ha sido registrado de forma exitosa'
            });
        }

    });
};

module.exports.listar_laboratorios = function(req, res){
    laboratorioModel.find().sort({nombre : 'asc'}).then(
        function(laboratorios){
            res.send(laboratorios);
        }
    ); 
};