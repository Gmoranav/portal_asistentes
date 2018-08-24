'use strict'
const nodeMailer = require('nodemailer');

//Primero permitir el acceso de aplicaciones menos seguras (dar click en el siguente link: https://myaccount.google.com/lesssecureapps
// y seleccionar SI. 

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'grupovirtual.proyecto1@gmail.com', // desde esta direccion se envian los correo (poner la direccion de correo de gmail)
        pass: 'uCenfoProyecto.1'  //contrasena del correo
    } 
});


let mailOptions = {
    from: 'grupovirtual.proyecto1@gmail.com', //poner el mismo correo que en la linea 10 (correo del equipo)
    to: '',
    subject: '',
    html: ''
};

module.exports.envio=function(datos) {

    mailOptions.to = datos.to;
    mailOptions.subject = datos.subject; //subject del email
    mailOptions.html =
        `<html>  
            <head>
                ${datos.head}
            </head>
            <body>
                ${datos.body} 
            </body>
        </html>`;
    transporter.sendMail(mailOptions, function (error, info) {  //transporter es la constante que se define al inicio 
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};