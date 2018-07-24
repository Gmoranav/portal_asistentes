'use strict';
const usuarioModel = require('./usuarios.model');

module.exports.registrar_usuario = function(req, res){
    /**Todo para registrar un usuario va aqui */
    let nuevoUsuario = new usuarioModel({

        foto : req.body.foto,
        nombre : req.body.nombre,
        segundo_nombre : req.body.segundo_nombre,
        primer_apellido : req.body.primer_apellido,
        segundo_apellido : req.body.segundo_apellido,
        cedula : req.body.cedula,
        fecha_ingreso : req.body.fecha_ingreso,
        rol : req.body.rol,
        direccion : req.body.direccion,
        distrito : req.body.distrito,
        canton : req.body.canton,
        provincia : req.body.provincia,
        telefono : req.body.telefono,
        correo : req.body.correo,
        usuario : req.body.usuario,
        contrasenna : req.body.contrasenna,
        estado : req.body.estado

    });

    nuevoUsuario.save(function(error){
        
        if(error){
            res.json({ success: false, msj: ' El usuario no pudo ser registrado : ' + error});
        }else{
            res.json({ success: true, msj: ' El usuario ha sido registrado de forma exitosa'});
        }
    });
};

module.exports.listar_usuarios = function(req, res){
    usuarioModel.find().sort({primer_apellido : 'asc'}).then(
        function(usuarios){
            res.send(usuarios);
        }
    );
};