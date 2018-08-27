'use strict';

let botonContinuar = document.querySelector('#cambiarContrasenna');
let botonCancelar = document.querySelector('#cancelarEnvioC');

botonCancelar.addEventListener('click', cancelarCambioContrasenna);
botonContinuar.addEventListener('click', cambioContrasenna);

let inputNuevaContrasenna = document.querySelector('#txtContraseña1');
let inputRepetirContrasenna = document.querySelector('#txtContraseña2');
//const inputId = document.querySelector('#txtID');

function cancelarCambioContrasenna(){
    window.location.href = "inicioSesion.html";
}

function cambioContrasenna() {

    let bError = false;
    let respuesta;

    bError = validar();

    if (bError == true) {

        swal({
            type: 'warning',
            title: 'No se pudo cambiar la contraseña',
            text: 'Verifique los campos Contraseña y Confirmar contraseña. (Recuerde que la contraseña deberá contener entre 8 y 10 caractéres)',
            confirmButtonText: 'Aceptar'
        });

    } else {

        let nuevaContrasenna = inputNuevaContrasenna.value;
        let ingresos = 2;
        let idUsuario; //cedula del usuario que va a cambiar la contrasena 

        //funcion que va al servicio_CambiarContrasenna.js
        //cedula = JSON.parse(localStorage.getItem('usuario'));
        idUsuario = JSON.parse(localStorage.getItem('idUsuario'));
        respuesta = registrarNuevaContrasenna(idUsuario, nuevaContrasenna, ingresos);

        swal({
            type: 'success',
            title: 'La contraseña se cambió éxitosamente',
            text: 'El cambio de la contraseña ha sido completado',
            confirmButtonText: 'Aceptar'
        });

        window.location.href = "inicioSesion.html";
        
    }
};


function validar() {
    let bError = false;
    let totalValores = $('#txtContraseña1').val().length;

    console.log("el pass tiene:"+ totalValores);

    if (inputNuevaContrasenna.value == '') {

        inputNuevaContrasenna.classList.add('input_error');
        bError = true;
    } else {
        inputNuevaContrasenna.classList.remove('input_error');
    }

    if (inputRepetirContrasenna.value == '') {
        inputRepetirContrasenna.classList.add('input_error');
        bError = true;
    } else {
        inputRepetirContrasenna.classList.remove('input_error');
    }

    if(inputNuevaContrasenna.value != inputRepetirContrasenna.value ){
        inputNuevaContrasenna.classList.add('input_error');
        inputRepetirContrasenna.classList.add('input_error');
        bError = true;
    } else{
        inputNuevaContrasenna.classList.remove('input_error');
        inputRepetirContrasenna.classList.remove('input_error');
      }

      if(totalValores <8 || totalValores >10){
        /*
        swal({
            type: 'error',
            title: 'La contraseña debe tener entre 8 y 10 caracteres',
            text: 'seleccione una nueva contraseña',
            confirmButtonText: 'Aceptar'
        }); */

        inputNuevaContrasenna.classList.add('input_error');
        inputRepetirContrasenna.classList.add('input_error');

        bError = true;
    } else{
            inputNuevaContrasenna.classList.remove('input_error');
            inputRepetirContrasenna.classList.remove('input_error');
          }
      

    

    return bError;
};
