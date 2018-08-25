'use strict';

let botonRegistrar = document.querySelector('#btnRegistrar');
let botonModificar = document.querySelector('#btnModificar');
let inputNombreCurso = document.querySelector('#txtNombreCurso');
let inputCodigoCurso = document.querySelector('#txtCodigoCurso');
let inputCantidadCreditos = document.querySelector('#numCantidadCreditos');
let inputId = document.querySelector('#txtId')

botonRegistrar.addEventListener('click' , obtenerDatosCurso);
botonModificar.addEventListener('click' , obtenerDatosCursoModificar);

function obtenerDatosCurso(){

    let sNombreCurso = inputNombreCurso.value;
    let sCodigoCurso = inputCodigoCurso.value;
    let nCantidadCreditos = inputCantidadCreditos.value;

    let bError = validar();
    let respuesta;

    if(bError == true){

        swal({
            type: 'warning',
            title: 'No se pudo registrar el curso',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Aceptar'
        });

       
        
    }else{


        respuesta = registrar_curso(sNombreCurso , sCodigoCurso, nCantidadCreditos);
        
        if (respuesta.success == true){

            swal({
                type: 'success',
                title: 'Transacción Procesada',
                text: "Se registró el curso con éxito!",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: 'Volver a la lista',
                cancelButtonText: 'Continuar Aqui',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#556566',
                }).then((result) => {
                    if(result.value){
    
                        window.location.href = "curso_listar.html";
                    }
    
                });


        }else{
            
            swal({
                type: 'error',
                title: 'Problemas de conexión',
                text: 'Por favor contactar al administrador',
                confirmButtonText: 'Aceptar'
            });
        }
        
    };

    limpiarFormulario();

};


function obtenerDatosCursoModificar(){

    let sNombreCurso = inputNombreCurso.value;
    let sCodigoCurso = inputCodigoCurso.value;
    let nCantidadCreditos = inputCantidadCreditos.value;
    let _id = inputId.value;

    let bError = validar();
    let respuesta;

    if(bError == true){

        swal({
            type: 'warning',
            title: 'No se pudo registrar el curso',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Aceptar'
        });

       
        
    }else{


        respuesta = registrar_curso(_id, sNombreCurso , sCodigoCurso, nCantidadCreditos);
        
        if (respuesta.success == true){

            swal({
                type: 'success',
                title: 'Transacción Procesada',
                text: "Se registró el curso con éxito!",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: 'Volver a la lista',
                cancelButtonText: 'Continuar Aqui',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#556566',
                }).then((result) => {
                    if(result.value){
    
                        window.location.href = "curso_listar.html";
                    }
    
                });


        }else{
            
            swal({
                type: 'error',
                title: 'Problemas de conexión',
                text: 'Por favor contactar al administrador',
                confirmButtonText: 'Aceptar'
            });
        }
        
    };

    limpiarFormulario();
    botonModificar.hidden = true;
    botonRegistrar.hidden = false;

};

function cargar_pagina() {
    window.location.replace('curso_registrar.html');
};

window.onload = function() {
    cargar_datos_modificar();
};

function cargar_datos_modificar(){

    let curso = [];

    curso = getCursoParaModificar();

    if (curso[0] != undefined) {

        inputNombreCurso.value = curso[0];    
        inputCodigoCurso.value = curso[1];
        inputCantidadCreditos.value = curso[2];
        inputId.value = curso[3];
   
        curso = [];
        localStorage.setItem("CursoParaModificar", JSON.stringify(curso));
        botonModificar.hidden = false;
        botonRegistrar.hidden = true;
    }

};

function getCursoParaModificar(){
    return JSON.parse(localStorage.getItem("CursoParaModificar"));
};


/**Validación */

function validar(){
    let bError = false;
    let regExpNumeros = /^[0-9]+$/;

    if(inputNombreCurso.value == ''){
        
        bError=true;
        inputNombreCurso.classList.add('input_error');

    }else{
        inputNombreCurso.classList.remove('input_error');
    };

    if(inputCodigoCurso.value == ''){

        bError=true;
        inputCodigoCurso.classList.add('input_error');

    }else{
        inputCodigoCurso.classList.remove('input_error');
    };

    /**Validación con numeros*/
    if(inputCantidadCreditos.value == '' || regExpNumeros.test(inputCantidadCreditos.value) == false){

        bError=true;
        inputCantidadCreditos.classList.add('input_error');

    }else{
        inputCantidadCreditos.classList.remove('input_error');
    };

    return bError;
};

function limpiarFormulario(){
    inputNombreCurso.value = '';    
    inputCodigoCurso.value = '';
    inputCantidadCreditos.value = '';
   
};
