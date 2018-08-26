/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/

'use strict';

//dejar este nombre del botón igual a como está aquí y dejarlo igual en el HTML: btnRegistrar
const botonRegistrar = document.querySelector('#btnRegistrar');

//estos nombres cambiarlos por lo que corresponda en el html
//manejarlos en singular

const inputPrimerNombre = document.querySelector('#txtPrimerNombre');
const inputSegundoNombre = document.querySelector('#txtSegundoNombre');
const inputPrimerApellido = document.querySelector('#txtPrimerApellido');
const inputSegundoApellido = document.querySelector('#txtSegundoApellido');
//const inputCurso = document.querySelector('#txtCurso');
//const inputPeriodo = document.querySelector('#txtPeriodo');
const inputGrupo = document.querySelector('#txtGrupo');
//const inputCantidadAlumnos = document.querySelector('#numCantidadAlumnos');
//const inputHorario = document.querySelector('#txtHorario');

//const inputFiltro = document.querySelector('#txtFiltro'); esto lo vemos con el profe el miercoles

/*esto lo vemos el miercoles con el profe
inputFiltro.addEventListener('keyup' , function(){
    imprimirListaPersonas(inputFiltro.value)
});*/

botonRegistrar.addEventListener('click' , obtenerDatosFormulario);

//el nombre de esta función se mantiene
function obtenerDatosFormulario(){



    //nombrar estas variables con el mismo nombre de las "const" de arriba
    let sPrimerNombre = inputPrimerNombre.value;
    let sSegundoNombre = inputSegundoNombre.value;
    let sPrimerApellido = inputPrimerApellido.value;
    let sSegundoApellido = inputSegundoApellido.value;
    //let sCurso  = inputCurso .value;
    //let sPeriodo  = inputPeriodo .value;
    let sGrupo  = inputGrupo .value;
    //let nCantidadAlumnos = Number(inputCantidadAlumnos.value);
    //let shorario = inputHorario.value;

    if(sSegundoNombre == ''){
        sSegundoNombre = ' ';
    }

    if(sGrupo == ''){
        sGrupo = ' ';
    }



    let bError = false;

    bError = validar();
    let respuesta;


    if(bError == true){

        swal({
            type : 'warning',
            title : 'No se pudo registrar la solicitud', //cambiar example según lo que se esté registrando
            text: 'Por favor revise los campos resaltados', //
            confirmButtonText : 'Aceptar'
        });

    }else{

        //cambiar Example y parámetros de la función por lo que se esté registrando, pornerlo en singular
        respuesta = registrarSolicitudes(sPrimerNombre, sSegundoNombre, sPrimerApellido, sSegundoApellido, sCurso, sPeriodo, sGrupo,
        nCantidadAlumnos, shorario);

        if (respuesta.success == true){

             //esta funcion está en el servicio
            swal({
                type: 'success',
                title: 'Transacción Procesada',
                text: "Se registró la solicitud con éxito!",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: 'Volver a la lista',
                cancelButtonText: 'Continuar Aqui',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#556566',
                }).then((result) => {
                    if(result.value){

                        window.location.href = "solicitud-asistente_listar.html";
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


        //este nombre queda igual
        limpiarFormulario();
    }




};

//en esta función solo hay que cambiar los input por lo que se requiera, todo lo demas queda igual
function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;


    //Validación del nombre completo
    if(inputPrimerNombre.value == '' /*|| (regexSoloLetras.test(inputPrimerNombre.value)==false)*/ ){
        inputPrimerNombre.classList.add('input_error');
        bError = true;
    }else{
        inputPrimerNombre.classList.remove('input_error');
    }

    //Validación primer apellido
    if(inputPrimerApellido.value == ''){
        inputPrimerApellido.classList.add('input_error');
        bError = true;
    }else{
        inputPrimerApellido.classList.remove('input_error');
    }

    //Validación segundo apellido
    if(inputSegundoApellido.value == ''){
        inputSegundoApellido.classList.add('input_error');
        bError = true;
    }else{
        inputSegundoApellido.classList.remove('input_error');
    }

    return bError;
};

//en esta función solo hay que cambiar los input por lo que se requiera, todo lo demas queda igual
function limpiarFormulario(){
    inputPrimerNombre.value = '';
    inputSegundoNombre.value = '';
    inputPrimerApellido.value ='';
    inputSegundoApellido.value = '';
    inputCurso.value = '';
    inputGrupo.value = '';
    //inputPeriodo.value = '';
    //inputCantidadAlumnos.value = 0;
    //inputHorario.value = '';
}



function cargar_pagina(){
    window.location.replace('solicitud_registrar.html');
};

window.onload = function() {
    cargarDatosRegistrar();
   };

function cargarDatosRegistrar(){

    let usuario = [];


    usuario = getSolicitudParaModificar();
    if (solicitud[0]!='undefined'){


        inputNombre.value = solicitud[0];
        inputSegundoNombre.value = solicitud[1];
        inputPrimerApellido.value = solicitud[2];
        inputSegundoApellido.value = solicitud[3];
        inputCedula.value = solicitud[4];
        inputFechaIngreso.value = solicitud[5];
        inputRol.value = solicitud[6];
        inputDireccion.value = solicitud[7];
        inputDistrito.value = solicitud[8];
        inputCanton.value = solicitud[9];
        inputProvincia.value = solicitud[10];
        inputTelefono.value = solicitud[11];
        inputCorreo.value = solicitud[12];
        inputId.value = solicitud[13];


        solicitud = [];
        localStorage.setItem("solicitudParaModificar", JSON.stringify(solicitud));
        botonModificar.hidden = false;
        botonRegistrar.hidden = true;
    }
};

function getSolicitudParaModificar() {
    return JSON.parse(localStorage.getItem("solicitudParaModificar"));
}
