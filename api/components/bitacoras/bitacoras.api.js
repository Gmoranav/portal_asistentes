'use strict';
const bitacoraModel = require('./bitacoras.model');

module.exports.registrar_bitacora = function(req, res){
    /**Todo para registrar un usuario va aqui */
    let nuevaBitacora = new bitacoraModel({
        
        cedula_profesor : req.body.cedula_profesor,
        cedula_asistente : req.body.cedula_asistente,
        primer_nombre_asistente : req.body.primer_nombre_asistente,
        segundo_nombre_asistente : req.body.segundo_nombre_asistente,
        primer_apellido_asistente : req.body.primer_apellido_asistente,
        segundo_apellido_asistente : req.body.segundo_apellido_asistente,
        curso : req.body.curso,
        grupo : req.body.grupo,
        estado : req.body.estado
    });

    nuevaBitacora.save(function(error){
        
        if(error){
            res.json({ success: false, msj: ' La bitácora no se pudo registrar : ' + error});
        }else{
            res.json({ success: true, msj: ' La bitácora se ha sido registrado de forma exitosa'});
        }
    });
};

module.exports.listar_bitacoras = function(req, res){
    bitacoraModel.find().sort({$natural:-1}).then(
        function(bitacoras){
            res.send(bitacoras);
        }
    );
};

module.exports.buscar_bitacora_por_id = function(req, res){
    bitacoraModel.findById({_id: req.body._id}).then(
        function(bitacora){
            res.send(bitacora);
        }
    );
};

module.exports.modificar_bitacora = function(req, res){
    /*se buscar el registro que tenga el _id y con set
    se modifica todo el cuerpo de la petición*/
    bitacoraModel.findByIdAndUpdate(req.body._id, {$set: req.body},
    function(err, user){
        if(err){
            res.json({ success: false, msg: 'La bitácora no se ha podido modificar. ' +
            handleError(err) });
        }else{
            res.json({success: true, msg: 'Se ha actualizado correctamente. ' + res});
        }
    });
};

module.exports.agregar_registros = function (req, res){

    bitacoraModel.update(
        { _id: req.body._id },
        {
            $push:
            {
                'registros':
                {
                    fecha : req.body.fecha,
                    hora_inicio : req.body.hora_inicio,
                    hora_fin : req.body.hora_fin,
                    descripcion : req.body.descripcion
                }
            }
        },
        function (error){
            if (error) {
                res.json({success: false, msg: 'No se pudo agregar' + 
                'el registro, ocurrió el siguiente error: '+ error});
            }else{
                res.json({ success: true, msg: 'El registro se agregó con éxito'});
            }
        }
    )
};

module.exports.desactivar_bitacora = function (req, res) {
    bitacoraModel.findByIdAndUpdate(req.body._id, {$set: req.body},
        function (err, user) {
            if (err) {
                res.json({ success: false, msg: 'La bitacora no se ha podido desactivar. ' + handleError(err) });

            } else {
                res.json({ success: true, msg: 'Se ha desactivado correctamente. ' + res });
            }
        });
};

module.exports.aprobar_bitacora = function (req, res) {
    bitacoraModel.findByIdAndUpdate(req.body._id, {$set: req.body},
        function (err, user) {
            if (err) {
                res.json({ success: false, msg: 'La bitacora no se ha podido aprobar. ' + handleError(err) });

            } else {
                res.json({ success: true, msg: 'Se ha aprobado correctamente. ' + res });
            }
        });
};


module.exports.rechazar_bitacora = function (req, res) {
    bitacoraModel.findByIdAndUpdate(req.body._id, {$set: req.body},
        function (err, user) {
            if (err) {
                res.json({ success: false, msg: 'La bitacora no se ha podido rechazar. ' + handleError(err) });

            } else {
                res.json({ success: true, msg: 'Se ha rechazado la bitácora. ' + res });
            }
        });
};
