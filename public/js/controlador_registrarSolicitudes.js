/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/
'use strict';
//let banderaModificar = false;

const botonRegistrar = document.querySelector('#btnRegistrar');
const botonModificar = document.querySelector('#btnModificar');

const inputPrimerNombre = document.querySelector('#txtPrimerNombre');
const inputSegundoNombre = document.querySelector('#txtSegundoNombre');
const inputPrimerApellido = document.querySelector('#txtPrimerApellido');
const inputSegundoApellido = document.querySelector('#txtSegundoApellido');
const inputCurso = document.querySelector('#txtCurso');
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
//if (botonModificar){
  botonModificar.addEventListener('click' , obtenerDatosFormularioModicar);
//}
function obtenerDatosFormulario(){

    let sPrimerNombre = inputPrimerNombre.value;
    let sSegundoNombre = inputSegundoNombre.value;
    let sPrimerApellido = inputPrimerApellido.value;
    let sSegundoApellido = inputSegundoApellido.value;
    let sCurso  = inputCurso.value;
    let sGrupo  = inputGrupo.value;
    let sPeriodo  = 'Cuatrimestral 2 - 2018';
    let nCantidadAlumnos  = 36;
    let sHorario  = 'Test';
    let nCedulaPostulante  = 456456;
    let nCedulaProfesor  = 456456;
    let nEstatus  = 1;
    let sCarrera  = ' ';
    let sFechaDeIngreso  = ' ';
    let nTelefono  = ' ';
    let sCorreoElectronico  =' ';
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
            title : 'No se pudo registrar la solicitud',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText : 'Aceptar'
        });

    }else{

        respuesta = registrarSolicitudes(sPrimerNombre, sSegundoNombre, sPrimerApellido, sSegundoApellido, sCurso, sGrupo, sPeriodo,
        nCantidadAlumnos, sHorario, nCedulaPostulante, nCedulaProfesor, nEstatus,sCarrera , sFechaDeIngreso, nTelefono, sCorreoElectronico);

        if (respuesta.success == true){
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
        limpiarFormulario();
        botonModificar.hidden = true;
        botonRegistrar.hidden = true;
    }
};

function obtenerDatosFormularioModicar(){

    let sPrimerNombre = inputPrimerNombre.value;
    let sSegundoNombre = inputSegundoNombre.value;
    let sPrimerApellido = inputPrimerApellido.value;
    let sSegundoApellido = inputSegundoApellido.value;
    let sCurso  = inputCurso.value;
    //let sPeriodo  = inputPeriodo.value;
    let sGrupo  = inputGrupo.value;
    //let nCantidadAlumnos = Number(inputCantidadAlumnos.value);
    //let shorario = inputHorario.value;
    //let sCedula  = inputGrupo .value;
    let _id = JSON.parse(localStorage.getItem("solicitudParaModificar"))[14];

        let bError = validar();
    let respuesta;

    if(sSegundoNombre == ''){
        sSegundoNombre = ' ';
    }

    if(sGrupo == ''){
        sGrupo = ' ';
    }
    //let bError = false;

    if(bError == true){

        swal({
            type : 'warning',
            title : 'No se pudo registrar la solicitud',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText : 'Aceptar'
        });

    } else {

        //cambiar Example y parámetros de la función por lo que se esté registrando, pornerlo en singular
        respuesta = modificarSolicitudes(_id, sPrimerNombre, sSegundoNombre, sPrimerApellido, sSegundoApellido/*, sCurso,sPeriodo, sGrupo
        /*nCantidadAlumnos, shorario*/);

        if (respuesta.success == true){

            swal({
                type: 'success',
                title: 'Transacción Procesada',
                text: "Se modificó la solicitud con éxito!",
                confirmButtonText: 'Entendido',
                confirmButtonColor: '#3085d6',
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

        limpiarFormulario();
        botonModificar.hidden = false;
        botonRegistrar.hidden = true;
    };
};

function cargarPagina(){
    window.location.replace('solicitud-asistente_registrar.html');
};
  window.onload = function() {
      cargarDatosModificar();
  };


function cargarDatosModificar(){

    let solicitud = [];

    solicitud = getSolicitudParaModificar();
    if (solicitud[0]!='undefined'){
        if (inputPrimerNombre){

        inputPrimerNombre.value = solicitud[0];
        inputSegundoNombre.value = solicitud[1];
        inputPrimerApellido.value = solicitud[2];
        inputSegundoApellido.value = solicitud[3];
        inputCurso.value = solicitud[4];
        inputGrupo.value = solicitud[5];
        inputId.value = solicitud[14];
        //inputCedulaProfesor.value = solicitud[6];
        solicitud = [];
        localStorage.setItem("solicitudParaModificar", JSON.stringify(solicitud));
      //  botonModificar.hidden = false;
      //  botonRegistrar.hidden = true;
      }
    }
};

function getSolicitudParaModificar() {
    return JSON.parse(localStorage.getItem("solicitudParaModificar"));
}


function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    if(inputPrimerNombre.value == '' ){//|| (regexSoloLetras.test(inputPrimerNombre.value)==false) ){
        inputPrimerNombre.classList.add('input_error');
        bError = true;
    }else{
        inputPrimerNombre.classList.remove('input_error');
    }
    if(inputPrimerApellido.value == ''){
        inputPrimerApellido.classList.add('input_error');
        bError = true;
    }else{
        inputPrimerApellido.classList.remove('input_error');
    }
    if(inputSegundoApellido.value == ''){
        inputSegundoApellido.classList.add('input_error');
        bError = true;
    }else{
        inputSegundoApellido.classList.remove('input_error');
    }
    return bError;
};

function limpiarFormulario(){
    inputPrimerNombre.value = '';
    inputSegundoNombre.value = '';
    inputPrimerApellido.value ='';
    inputSegundoApellido.value = '';
    inputCurso.value = '';
    inputGrupo.value = '';
    //    inputGrupo.value = '';

    //inputPeriodo.value = '';
    //inputCantidadAlumnos.value = 0;
    //inputHorario.value = '';
}
