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
    usuarioModel.find().sort({$natural:-1}).then(
        function(usuarios){
            res.send(usuarios);
        }
    );
};

module.exports.buscar_usuario_por_id = function(req, res){
    usuarioModel.findById({_id: req.body._id}).then(
        function(usuario){
            res.send(usuario);
        }
    );
};

module.exports.modificar_usuario = function(req, res){
    /*se buscar el registro que tenga el _id y con set
    se modifica todo el cuerpo de la petición*/
    usuarioModel.findByIdAndUpdate(req.body._id, {$set: req.body},
    function(err, user){
        if(err){
            res.json({ success: false, msg: 'El usuario no se ha podido modificar. ' +
            handleError(err) });
        }else{
            res.json({success: true, msg: 'Se ha actualizado correctamente. ' + res});
        }
    });
};