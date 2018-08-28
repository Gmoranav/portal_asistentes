'use strict';

window.addEventListener('load', buscar_por_id);

const inputimagenUrl = document.querySelector('#imageUpload2');
const inputNombre = document.querySelector('#txtNombre2');
const inputSegundoNombre = document.querySelector('#txtSegundoNombre2');
const inputPrimerApellido = document.querySelector('#txtPrimerApellido2');
const inputSegundoApellido = document.querySelector('#txtSegundoApellido2');
const inputCedula = document.querySelector('#txtCedula2');
const inputFechaIngreso = document.querySelector('#txtFechaIngreso2');
const inputRol = document.querySelector('#txtRol2');
const inputDireccion = document.querySelector('#txtDireccion2');
const inputDistrito = document.querySelector('#txtDistrito2');
const inputCanton = document.querySelector('#txtCanton2');
const inputProvincia = document.querySelector('#txtProvincia2');
const inputTelefono = document.querySelector('#txtTelefono2');
const inputCorreo = document.querySelector('#txtCorreo2');
const inputId = document.querySelector('#txtId2');

//buscar_por_id();


function buscar_por_id() {
    let _id = JSON.parse(localStorage.getItem('idUsuario'));
    let usuario = obtener_usuario_por_id(_id);
    let datosUsuario = [];

    datosUsuario[0] = usuario['nombre'];
    datosUsuario[1] = usuario['segundo_nombre'];
    datosUsuario[2] = usuario['primer_apellido'];
    datosUsuario[3] = usuario['segundo_apellido'];
    datosUsuario[4] = usuario['cedula'];
    datosUsuario[5] = usuario['fecha_ingreso'];
    datosUsuario[6] = usuario['rol'];
    datosUsuario[7] = usuario['direccion'];
    datosUsuario[8] = usuario['distrito'];
    datosUsuario[9] = usuario['canton'];
    datosUsuario[10] = usuario['provincia'];
    datosUsuario[11] = usuario['telefono'];
    datosUsuario[12] = usuario['correo'];
    datosUsuario[13] = usuario['_id'];
    datosUsuario[14] = usuario['foto'];


      
    inputNombre.value = datosUsuario[0];   
   // inputNombre.value = usuario['nombre'];       
    inputSegundoNombre.value = datosUsuario[1];
    inputPrimerApellido.value = datosUsuario[2];
    inputSegundoApellido.value = datosUsuario[3];
    inputCedula.value = datosUsuario[4];
    inputFechaIngreso.value = datosUsuario[5];
    inputRol.value = datosUsuario[6];
    inputDireccion.value = datosUsuario[7];
    inputDistrito.value = datosUsuario[8];
    inputCanton.value = datosUsuario[9];
    inputProvincia.value = datosUsuario[10];
    inputTelefono.value = datosUsuario[11];
    inputCorreo.value = datosUsuario[12];
    inputId.value = datosUsuario[13];
    inputimagenUrl.value = datosUsuario[14]; 


    console.log(datosUsuario);


};


