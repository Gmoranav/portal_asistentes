'use strict';

let boton_recuperarContrasenna = document.querySelector('#enviarCorreo');

boton_recuperarContrasenna.addEventListener("click", obtenerCorreo);

function obtenerCorreo(){
    let cedula = document.querySelector('#txtCedula').value;  //valor para buscar si el usuario esta registrado en la db
    let respuesta;

    
    respuesta = recuperarContrasenna(cedula);

        if (respuesta = "Usuario no encontrado"){
            swal({
                title: "Error!",
                text: "La solicitud no pudo ser completada!",
                icon: "warning",
                button: "Aww yiss!",
              });
        } else{
            swal({
                title: "Correo enviado!",
                text: "La nueva contraseña ha sido enviada a la dirección de correo electronico registrada en el sistema",
                icon: "success",
                button: "Aww yiss!",
              });
        }
} 