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
    
    periodos_model.find().sort({$natural:-1}).then(
          
          function(periodos){
             res.send(periodos);
          }
    );
};

//buscar
module.exports.buscar_periodo_id = function(req, res){
    periodos_model.findById({_id : req.body._id}).then(  //donde el _id concuerde con lo que se le esta pasando por req.body.NOMBRE_PERIODO
        function(periodo){
            res.send(periodo);
        }
    );
};

//modificar (en route y api) - findByIdAndUpdate para saber cual cambiar 
module.exports.modificar_periodo = function(req, res){ 
    periodos_model.findByIdAndUpdate(req.body._id, { $set: req.body },
        
        function(err, periodo){
            if (err) {
                res.json({success: false, msg: 'El periodo no se pudo modificar. ' + handleError(err) });

            }else{
                res.json({success: true, msg: 'El periodo se modificó con éxito' + res });
            }
        });
};


//eliminar periodo
module.exports.eliminar_periodo = function (req, res) {
    periodos_model.findByIdAndDelete(req.body._id,
        function (err, periodo) {
            if (err) {
                res.json({ success: false, msg: 'El laboratorio no se ha podido eliminar. ' + handleError(err) });

            } else {
                res.json({ success: true, msg: 'Se ha eliminado correctamente. ' + res });
            }
        });
};
