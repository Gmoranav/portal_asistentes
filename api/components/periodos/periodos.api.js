'use strict';
//la siguiente constante hace referencia al archivo de periodos.model
const periodosModel = require ('./periodos.model');

//se va a exportar registrar_periodo (funcion) - debe recibir la peticion y la respuesta
module.exports.registrar_periodo = function (req, res){
    let nuevoPeriodo = new periodosModel({
        // estas propiedades vienen del periodos.model.js 
        nombre_periodo : req.body.nombre_periodo, 
        estado_periodo : req.body.estado_periodo,
        estado : req.body.estado,
    });
    nuevoPeriodo.save(function(error){

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
    
    periodosModel.find().sort({$natural:-1}).then(
          
          function(periodos){
             res.send(periodos);
          }
    );
};

//buscar
module.exports.buscar_periodo_id = function(req, res){
    periodosModel.findById({_id : req.body._id}).then(  //donde el _id concuerde con lo que se le esta pasando por req.body.NOMBRE_PERIODO
        function(periodo){
            res.send(periodo);
        }
    );
};

//modificar (en route y api) - findByIdAndUpdate para saber cual cambiar 
module.exports.modificar_periodo = function(req, res){ 
    periodosModel.findByIdAndUpdate(req.body._id, {$set: req.body},
        
        function(err, periodo){
            if (err) {
                res.json({success: false, msg: 'El periodo no se pudo modificar. ' + 
                handleError(err) });
                
            }else{
                res.json({success: true, msg: 'El periodo se modificó con éxito' + res });
            }
        });
};


//desactivar periodo
module.exports.desactivar_periodo = function (req, res) {
    periodosModel.findByIdAndUpdate(req.body._id, {$set: req.body},
        function (err, periodo) {
            if (err) {
                res.json({ success: false, msg: 'El laboratorio no se ha podido eliminar. ' + handleError(err) });

            } else {
                res.json({ success: true, msg: 'Se ha eliminado correctamente. ' + res });
            }
        });
};
