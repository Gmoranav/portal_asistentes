'use strict';
const sedes_model = require('./sedes.model');


module.exports.registrar = function (req, res) {
    let nueva_sede = new sedes_model({

        nombre_sede: req.body.nombre_sede,
        provincia_sede: req.body.provincia_sede,
        canton_sede: req.body.canton_sede,
        distrito_sede: req.body.distrito_sede,
        ubicacion_sede: req.body.ubicacion_sede,
    });

    nueva_sede.save(function (error) {

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


module.exports.listar_sedes = function (req, res) {
    sedes_model.find().sort({$natural:-1}).then(
        function (sedes) {
            res.send(sedes);
        }
    );
};

//buscar  - buscar_sede_id debe ser igual al path del route
module.exports.buscar_sede_id = function(req, res){
    sedes_model.findById({_id: req.body._id}).then(  //busca por el id asignado por mongodb
        function(sede){
            res.send(sede);
        }
    );
};

//modificar (en route y api) - findByIdAndUpdate para saber cual cambiar 
module.exports.modificar_sede = function(req, res){ 
    sedes_model.findByIdAndUpdate(req.body._id, { $set: req.body },  //$set sirve para modificar (caerle encima a la informacion existente)
        
        function(err, sede){
            if (err) {
                res.json({success: false, msg: 'La sede no se pudo modificar. ' + handleError(err) });

            }else{
                res.json({success: true, msg: 'La sede se modificó con éxito' + res });
            }
        });
};

//eliminar sede
module.exports.eliminar_sede = function (req, res) {
    sedes_model.findByIdAndDelete(req.body._id,
        function (err, sede) {
            if (err) {
                res.json({ success: false, msg: 'La sede no se ha podido eliminar. ' + handleError(err) });

            } else {
                res.json({ success: true, msg: 'La sede se ha eliminado correctamente. ' + res });
            }
        });
};
