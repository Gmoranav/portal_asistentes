'use strict';
const solicitudModel = require('./solicitudes.model');/*
const nodemailer = require('nodemailer');

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
    subject: 'Nueva solicitud de asistencia',
    html: ''
};*/

module.exports.registrar_solicitud = function(req, res){
    /**Todo para registrar un usuario va aqui */
    let nuevaSolicitud = new solicitudModel({
      primer_nombre : req.body.primer_nombre,
      segundo_nombre : req.body.segundo_nombre,
      primer_apellido : req.body.primer_apellido,
      segundo_apellido : req.body.segundo_apellido,
      nombre_curso : req.body.nombre_curso,
      grupo : req.body.grupo,

      periodo : req.body.periodo,
      cantidad_alumnos : req.body.cantidad_alumnos,
      horario : req.body.horario,
      cedula_postulante : req.body.cedula_postulante,

      cedula_profesor : req.body.cedula_profesor,
      estado : req.body.estado,

      carrera : req.body.carrera,
      fecha_de_ingreso : req.body.fecha_de_ingreso,
      telefono : req.body.telefono,
      correo_electronico : req.body.correo_electronico,
      /*_id : req.body._id,*/
    });

    nuevaSolicitud.save(function(error){
        if(error){
            res.json({  success : false, msg : ' La solicitud no pudo ser registrado : ' + error});
        }else{
                //success : true,
                //msj : ' La solicitud ha sido registrada de forma exitosa',
/*
                mailOptions.to = 'grupovirtual.proyecto1@gmail.com';
                mailOptions.html =`
                <html>
                <head>
                  <style>
                    h1{
                      background: #000000;
                      color: white;
                      padding: 15px;
                      text-align: center;
                    }
                  </style>
                  </head>
                  <body>
                    <h1>Nueva solicitud</h1>
                    <h2>Nueva solicitud pendiente de revisión </h2>
                    <p>Por favor ingrese en su cuenta del portal de asistente para aprobar o rechazar las solicitudes pendientes de revisión. </p>
                    <table>
                      <tr>
                        <td>Grupo</td>
                        <td>${nuevaSolicitud.grupo}</td>
                      </tr>
                      <tr>
                        <td>Curso</td>
                        <td>${nuevaSolicitud.nombre_curso}</td>
                      </tr>
                    </table>
                  </body>
                </html>
                `;
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });*/
                res.json({ success: true, msg: 'La solicitud se registró con éxito' });
                }
            });
};

module.exports.listar_solicitudes = function(req, res){
    solicitudModel.find().sort({$natural:-1}).then(
        function(solicitudes){
            res.send(solicitudes);
        }
    );
};

/*funcion para asociar*/
/*
module.exports.agregar_solicitud=function(req,res){
  userModel.update(
    {_id:req.body._id},
    $push:
    {
      'solicitudes':
      {
        curso : req.body.curso,
        periodo : req.body.periodo,
        cantidad_alumnos : req.body.cantidad_alumnos,
        horario : req.body.horario
      }
    }
  )
}
*/

module.exports.buscar_solicitud_id = function(req,res){
    solicitudModel.findById({_id: req.body._id}).then(
      function(solicitud){
        res.send(solicitud);
      }
    )
};

module.exports.modificar_solicitud = function(req, res){
  solicitudModel.findByIdAndUpdate(req.body._id,{ $set: req.body },
    function(error){
        if(error){
            res.json({
                success : false,
                msj : ' La solicitud no pudo se pudo modificar : ' + error
            });
        }else{
            res.json({
                success : true,
                msj : ' La solicitud ha sido modificada con exito'
            });
        }
    });
  };

  module.exports.modificar_solicitud_por_decanatura = function(req, res){
    solicitudModel.findByIdAndUpdate(req.body._id,{ $set: req.body },
      function(error){
          if(error){
              res.json({
                  success : false,
                  msj : ' La solicitud no pudo se pudo modificar : ' + error
              });
          }else{
                  //success : true,
                  //msj : ' La solicitud ha sido registrada de forma exitosa',
                  /*
                  mailOptions.to = 'grupovirtual.proyecto1@gmail.com';
                  mailOptions.html =`
                  <html>
                  <head>
                    <style>
                      h1{
                        background: #000000;
                        color: white;
                        padding: 15px;
                        text-align: center;
                      }
                    </style>
                    </head>
                    <body>
                      <h1>Nueva solicitud</h1>
                      <h2>Nueva solicitud pendiente de revisión</h2>
                      <p>Por favor ingrese en su cuenta del portal de asistente para aprobar o rechazar las solicitudes pendientes de revisión. </p>
                      <table>
                        <tr>
                          <td>Grupo</td>
                          <td>${nuevaSolicitud.grupo}</td>
                        </tr>
                        <tr>
                          <td>Curso</td>
                          <td>${nuevaSolicitud.nombre_curso}</td>
                        </tr>
                      </table>
                    </body>
                  </html>
                  `;
                  transporter.sendMail(mailOptions, function (error, info) {
                      if (error) {
                          console.log(error);
                      } else {
                          console.log('Email sent: ' + info.response);
                      }
                  });
                  */
                  res.json({ success: true, msg: 'El usuario se aprobó con éxito' });

          }
      });
    };

    module.exports.aceptar_solicitud_por_rectoria = function(req, res){
      solicitudModel.findByIdAndUpdate(req.body._id,{ $set: req.body },
        function(error){
            if(error){
                res.json({
                    success : false,
                    msj : ' La solicitud no pudo se pudo modificar : ' + error
                });
            }else{
                    //success : true,
                    //msj : ' La solicitud ha sido registrada de forma exitosa',
                    mailOptions.to = 'grupovirtual.proyecto1@gmail.com';
                    mailOptions.html =`
                    <html>
                    <head>
                      <style>
                        h1{
                          background: #000000;
                          color: white;
                          padding: 15px;
                          text-align: center;
                        }
                      </style>
                      </head>
                      <body>
                        <h1>Nueva solicitud</h1>
                        <h2>Nueva solicitud pendiente de revisión</h2>
                        <p>Por favor ingrese en su cuenta del portal de asistente para aprobar o rechazar las solicitudes pendientes de revisión. </p>
                        <table>
                          <tr>
                            <td>Grupo</td>
                            <td>${nuevoUsuario.curso}</td>
                          </tr>
                          <tr>
                            <td>Curso</td>
                            <td>${nuevoUsuario.grupo}</td>
                          </tr>
                        </table>
                      </body>
                    </html>
                    `;
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                    });
                    res.json({ success: true, msg: 'El usuario se aprobó con éxito' });
            }
        });
      };



  module.exports.desactivar_solicitud = function (req, res) {
      solicitudModel.findByIdAndDelete(req.body._id,
          function (err, user) {
              if (err) {
                  res.json({ success: false, msg: 'La solicitud no se ha podido desactivar. ' + handleError(err) });

              } else {
                  res.json({ success: true, msg: 'Se ha desactivado correctamente. ' + res });
              }
          });
  };

  /*
  module.exports.buscar_usuario_por_id = function(req, res){
    usuarioModel.findById({_id: req.body._id}).then(
        function(usuario){
            res.send(usuario);
        }
    );
};

module.exports.modificar_usuario = function(req, res){

    //se buscar el registro que tenga el _id y con set
    //se modifica todo el cuerpo de la petición

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
*/
