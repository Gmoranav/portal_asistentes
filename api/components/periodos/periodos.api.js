'use strict';
//la siguiente constante hace referencia al archivo de periodos.model
const periodos_model = require ('./periodos.model');

//se va a exportar REGISTRAR (funcion) - debe recibir la peticion y la respuesta
module.exports.registrar = function (req, res){
    let nuevo_periodo = new periodos_model({
        // estas propiedades vienen del periodos.model.js 
        nombre_periodo : req.body.nombre_periodo, 
        estado_periodo : req.body.estado_periodo,
    });
    nuevo_periodo.save(function(error){

        if(error){
            res.json({
                success : false,
                msj : 'El periodo no se registró : ' + error
          });
        }else{
            res.json({
                success : true,
                msj : 'El periodo se registró éxitosamente'
        });
        }
    });
};
module.exports.listar_periodos = function(req, res){
    
    periodos_model.find().sort({nombre_periodo : 'asc'}).then(
          
          function(periodos){
             res.send(periodos);
          }
    );
};
