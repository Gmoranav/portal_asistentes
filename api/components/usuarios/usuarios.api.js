'use strict';
const usuarioModel = require('./usuarios.model');
/*const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'grupovirtual.proyecto1@gmail.com',
        pass: 'uCenfoProyecto.1'
    }
});

let mailOptions = {
    from: 'grupovirtual.proyecto1@gmail.com',
    to: '',
    subject: 'Credenciales Portal Assietentes',
    html: ''
};*/

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
        usuario : req.body.cedula,
        contrasenna : req.body.contrasenna,
        estado : req.body.estado,
        ingresos : req.body.ingresos

    });

    nuevoUsuario.save(function(error){
        
        if(error){
            res.json({ success: false, msj: ' El usuario no pudo ser registrado : ' + error});
        }else{
         /*   mailOptions.to = nuevoUsuario.correo;
            mailOptions.html = 
            <html>
                <head>
                    <style>
                        h1{
                            background: #ff7675;
                            padding: 15px 0 15px 0;
                            text-align: center;
                        }
                    </style>
                </head>
                <body>
                    <h1>Bienvenido ${nuevoUsuario.nombre + nuevoUsuario.primer_apellido} </h1>
                    <p>Sus datos de registro son </p>
                    <table>
                        <tr>
                            <td>Nombre</td>
                            <td>${nuevoUsuario.nombre + nuevoUsuario.primer_apellido}</td>
                        </tr>
                        <tr>
                            <td>Rol</td>
                            <td>${nuevoUsuario.rol}</td>
                        </tr>
                    </table>
                    <p>Su usuario es:</p>
                    <p>${nuevoUsuario.cedula}</p>

                    <p>Su clave temporal es:</p>
                    <p>${nuevoUsuario.contrasenna}</p>

                </body>
            </html>
            ;
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    console.log(error);
                }else{
                    console.log('Email sent: ' + info.response);
                }
            });*/
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

module.exports.desactivar_usuario = function (req, res) {
    usuarioModel.findByIdAndUpdate(req.body._id, {$set: req.body},
        function (err, user) {
            if (err) {
                res.json({ success: false, msg: 'El usuario no se ha podido desactivar. ' + handleError(err) });

            } else {
                res.json({ success: true, msg: 'Se ha desactivado correctamente. ' + res });
            }
        });
};
