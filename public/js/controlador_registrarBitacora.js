
'use strict';


const botonRegistrar = document.querySelector('#btnRegistrar');
const botonModificar = document.querySelector('#btnModificar');

botonModificar.hidden = true;

const inputFecha = document.querySelector('#txtFecha');
const inputHoraInicio = document.getElementById('#tmHoraInicio');
const inputHoraFin= document.querySelector('#tmHoraFin');
const inputDescripcion = document.querySelector('#txtDescripcion');
const inputId = document.querySelector('#txtId');

botonRegistrar.addEventListener('click' , obtenerDatosFormulario);
botonModificar.addEventListener('click' , obtenerDatosModificar);

function obtenerDatosFormulario(){
    
    let bError = false;
    let respuesta;

    
    bError = validar();
    if(bError == true){
        swal({
            type: 'warning',
            title: 'No se pudo registrar la actividad',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Aceptar'
        });
        
    }else{
   
        
        let sFecha = inputFecha.value; 
        let tmHoraInicio = inputHoraInicio.value;
        let tmHoraFin = inputHoraFin.value;
        let sDescripcion = inputDescripcion.value;
       
        
        respuesta = registrarBitacora(sFecha, tmHoraInicio, tmHoraFin, sDescripcion, estado);//esta funcion está en el servicio

        if (respuesta.success = true){
            swal({
                type: 'success',
                title: 'Transacción Procesada',
                text: "Se realizó un registro en la bitácora con éxito!",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: 'Volver a la lista',
                cancelButtonText: 'Continuar Aqui',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#556566',
                }).then((result) => {
                    if(result.value){
    
                        window.location.href = "bitacora_listar.html";
                    }
    
                });
        }else{
            swal({
                type : 'error',
                title : 'Problemas de conexión', 
                text: 'Por favor contactar al administrador', 
                confirmButtonText : 'Aceptar'
            });
        }

        limpiarFormulario();
    }
    
};



function obtenerDatosModificar(){
    
    let bError = false;
    let respuesta;

    
    bError = validar();
    if(bError == true){
        swal({
            type: 'warning',
            title: 'No se pudo registrar el usuario',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Aceptar'
        });
        
    }else{
   
        
        let sNombre = inputNombre.value; 
        let sSegundoNombre = inputSegundoNombre.value;
        let sPrimerApellido = inputPrimerApellido.value;
        let sSegundoApellido = inputSegundoApellido.value;
        let sCedula = inputCedula.value;
        let dFechaIngreso = inputFechaIngreso.value;
        let sltRol = inputRol.value;
        let sDireccion = inputDireccion.value;
        let sDistrito = inputDistrito.value;
        let sCanton = inputCanton.value;
        let sltProvincia = inputProvincia.value;
        let sTelefono = inputTelefono.value;
        let sCorreo = inputCorreo.value;
        let _id = inputId.value;

        
        respuesta = modificarUsuarios(_id, inputimagenUrl.src, sNombre, sSegundoNombre, sPrimerApellido, sSegundoApellido, sCedula, dFechaIngreso, sltRol, 
                          sDireccion, sDistrito, sCanton, sltProvincia, sTelefono, sCorreo);//esta funcion está en el servicio

        if (respuesta.success = true){
            swal({
                type: 'success',
                title: 'Transacción Procesada',
                text: "El usuario se modificó con éxito!",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: 'Volver a la lista',
                cancelButtonText: 'Continuar Aqui',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#556566',
                }).then((result) => {
                    if(result.value){
    
                        window.location.href = "usuario_listar.html";
                    }
    
                });
        }else{
            swal({
                type : 'error',
                title : 'Problemas de conexión', 
                text: 'Por favor contactar al administrador', 
                confirmButtonText : 'Aceptar'
            });
        }

        limpiarFormulario();
        botonModificar.hidden = true;
        botonRegistrar.hidden = false;
    }
    
};


function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;

    //Validación de la fecha
    if(inputFecha.value == '' ){
        inputFecha.classList.add('input_error');
        bError = true;
    }else{
        inputFecha.classList.remove('input_error');
    }
    //Validación de la descripcion
    if(sDescripcion.value == '' || (regexSoloLetras.test(sDescripcion.value)==false)){
        sDescripcion.classList.add('input_error');
        bError = true;
    }else{
        sDescripcion.classList.remove('input_error');
    }

    return bError;
};

function limpiarFormulario(){

    inputFecha = '';
    inputHoraInicio.value = ''; 
    inputHoraFin.value = '';
    inputDescripcion.value = '';
    inputId.value = '';
};


function cargar_pagina(){
    window.location.replace('bitacora_registrar.html');
};

window.onload = function() {
    cargar_datos_modificar();
   };

function cargar_datos_modificar(){
    
    let usuario = [];

    
    usuario = getUsuarioParaModificar();


    if (usuario[0] != undefined){
   
        inputNombre.value = usuario[0]; 
        inputSegundoNombre.value = usuario[1];
        inputPrimerApellido.value = usuario[2];
        inputSegundoApellido.value = usuario[3];
        inputCedula.value = usuario[4];
        inputFechaIngreso.value = usuario[5];
        inputRol.value = usuario[6];
        inputDireccion.value = usuario[7];
        inputDistrito.value = usuario[8];
        inputCanton.value = usuario[9];
        inputProvincia.value = usuario[10];
        inputTelefono.value = usuario[11];
        inputCorreo.value = usuario[12];
        inputId.value = usuario[13];
        document.querySelector('#imageUpload').src = usuario[14];


        usuario = [];
        localStorage.setItem("usuarioParaModificar", JSON.stringify(usuario));
        botonModificar.hidden = false;
        botonRegistrar.hidden = true;
    }
};

function getUsuarioParaModificar() {
    return JSON.parse(localStorage.getItem("usuarioParaModificar"));
}


    
