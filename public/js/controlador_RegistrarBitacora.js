
'use strict';


const botonRegistrar = document.querySelector('#btnAgregarRegistrosBitacora');
const botonModificar = document.querySelector('#btnModificarRegistrosBitacora');

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
        let estado = 0;
       
        
        respuesta = registrar_bitacora(sFecha, tmHoraInicio, tmHoraFin, sDescripcion, estado);//esta funcion está en el servicio

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

        let sFecha = inputFecha.value; 
        let tmHoraInicio = inputHoraInicio.value;
        let tmHoraFin = inputHoraFin.value;
        let sDescripcion = inputDescripcion.value;     
        let _id = inputId.value;

        
        respuesta = modificar_bitacoras(_id, sFecha, tmHoraInicio, tmHoraFin, sDescripcion);//esta funcion está en el servicio

        if (respuesta.success = true){
            swal({
                type: 'success',
                title: 'Transacción Procesada',
                text: "La bitácora se modificó con éxito!",
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
    
    let bitacora = [];

    
    bitacora = getBitacoraParaModificar();


    if (bitacora[0] != undefined){

        inputFecha.value = bitacora[0]; 
        inputHoraInicio.value = bitacora[1];
        inputHoraFin.value = bitacora[2];
        inputDescripcion.value = bitacora[3];
        inputId.value = bitacora[4];
        
        bitacora = [];
        localStorage.setItem("bitacoraParaModificar", JSON.stringify(bitacora));
        botonModificar.hidden = false;
        botonRegistrar.hidden = true;
    }
};

function getBitacoraParaModificar() {
    return JSON.parse(localStorage.getItem("bitacoraParaModificar"));
}


    
