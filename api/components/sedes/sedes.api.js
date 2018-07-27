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
    sedes_model.find().sort({ nombre_sede: 'asc' }).then(
        function (sedes) {
            res.send(sedes);
        }
    );
};
