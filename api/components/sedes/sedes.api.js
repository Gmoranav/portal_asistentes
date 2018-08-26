'use strict';
//la siguiente constante hace referencia al archivo de sedes.model
const sedesModel = require('./sedes.model');

//se va a exportar registrar_sede (funcion) - debe recibir la peticion y la respuesta
module.exports.registrar_sede = function (req, res) {
    let nuevaSede = new sedesModel({
        // estas propiedades vienen del sedes.model.js   
        nombre_sede: req.body.nombre_sede,
        provincia_sede: req.body.provincia_sede,
        canton_sede: req.body.canton_sede,
        distrito_sede: req.body.distrito_sede,
        ubicacion_sede: req.body.ubicacion_sede,
        estado : req.body.estado,
    });
    nuevaSede.save(function (error) {

        if (error) {
            res.json({
                success: false,
                msj: 'La sede no se registró : ' + error
            });
        } else {
            res.json({
                success: true,
                msj: 'La sede se registró éxitosamente'
            });
        }
    });
};

//listar
module.exports.listar_sedes = function (req, res) {
    sedesModel.find().sort({$natural:-1}).then(
        function (sedes) {
            res.send(sedes);
        }
    );
};

//buscar  - buscar_sede_id debe ser igual al path del route
module.exports.buscar_sede_id = function(req, res){
    sedesModel.findById({_id: req.body._id}).then(  //busca por el id asignado por mongodb
        function(sede){
            res.send(sede);
        }
    );
};

//modificar (en route y api) - findByIdAndUpdate para saber cual cambiar 
module.exports.modificar_sede = function(req, res){ 
    sedesModel.findByIdAndUpdate(req.body._id, { $set: req.body },  //$set sirve para modificar (caerle encima a la informacion existente)
        
        function(err, sede){
            if (err) {
                res.json({success: false, msg: 'La sede no se pudo modificar. ' + handleError(err) });

            }else{
                res.json({success: true, msg: 'La sede se modificó con éxito' + res });
            }
        });
};

//desactivar sede
module.exports.desactivar_sede = function (req, res) {
    sedesModel.findByIdAndUpdate(req.body._id, {$set: req.body},
        function (err, sede) {
            if (err) {
                res.json({ success: false, msg: 'La sede no se ha podido eliminar. ' + handleError(err) });

            } else {
                res.json({ success: true, msg: 'La sede se ha eliminado correctamente. ' + res });
            }
        });
};
