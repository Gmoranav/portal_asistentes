/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/
//modificar_solicitud_por_decanatura

'use strict';

//let banderaModificar = false;
//modalRectoria

//dejar este nombre del botón igual a como está aquí y dejarlo igual en el HTML: btnRegistrar
const botonAprobarDecanatura = document.querySelector('#btnAprobarDecanatura');
const botonAprobarRectoria = document.querySelector('#btnAprobarRectoria');

//estos nombres cambiarlos por lo que corresponda en el html
//manejarlos en singular

const inputCarrera = document.querySelector('#txtCarrera');
const inputFechaDeIngreso = document.querySelector('#txtFechaDeIngreso');
const inputTelefono = document.querySelector('#txtTelefono');
const inputCorreoElectronico = document.querySelector('#txtCorreoElectronico');

//const inputFiltro = document.querySelector('#txtFiltro'); esto lo vemos con el profe el miercoles

botonAprobarDecanatura.addEventListener('click' , AprobarDecanatura);

function AprobarDecanatura(){
     obtenerDatosExtraPostulante();

     //if()

}

//el nombre de esta función se mantiene
function obtenerDatosExtraPostulante(){

  //let _id = this.dataset._id;
  //let _id = inputId.value;

    //nombrar estas variables con el mismo nombre de las "const" de arriba
    let sInputCarrera = inputCarrera.value;
    let sInputFechaDeIngreso = inputFechaDeIngreso.value;
    let sInputTelefono = inputTelefono.value;
    let sInputCorreoElectronico = inputCorreoElectronico.value;
    let nEstado = '2';

    let _id = getIdSolicitud();//JSON.parse(localStorage.getItem("IdParaAprobar"));
    console.log(_id);

    //bError = validar();
    let respuesta;



    let bError = false;

    if(bError == true){

        swal({
            type : 'warning',
            title : 'No se pudo registrar la solicitud', //cambiar example según lo que se esté registrando
            text: 'Por favor revise los campos resaltados', //
            confirmButtonText : 'Aceptar'
        });

    } else {

        //cambiar Example y parámetros de la función por lo que se esté registrando, pornerlo en singular
        respuesta = modificar_solicitud_por_decanatura(_id, nEstado, sInputCarrera, sInputFechaDeIngreso, sInputTelefono, sInputCorreoElectronico);

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
        limpiarFormularioSolicitud();
    };
};
/*
function generar_bitacora(){

    let bitacora = [];

    bitacora = getinfoBitacoraGenerada();

    let scedula_profesor : bitacora[0];
    let scedula_asistente  : bitacora[1];
    let sprimer_nombre : bitacora[2];
    let ssegundo_nombre : bitacora[3];
    let sprimer_apellido : bitacora[4];
    let ssegundo_apellido : bitacora[5];
    let scurso : bitacora[6];
    let sgrupo : bitacora[7];
    let sestado : bitacora[8];

    registrar_bitacora(scedula_profesor, scedula_asistente, sprimer_nombre,
        ssegundo_nombre, sprimer_apellido, ssegundo_apellido, scurso, sgrupo, sestado)
};*/

function getSolicitudParaModificar() {
    return JSON.parse(localStorage.getItem("solicitudParaModificar"));
}
//en esta función solo hay que cambiar los input por lo que se requiera, todo lo demas
//queda igual
/*
function validar(){
    let bError = false;
    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;
    if(inputPrimerNombre.value == '' /*|| (regexSoloLetras.test(inputPrimerNombre.value)==false)*/ // ){
/*        inputPrimerNombre.classList.add('input_error');
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
}
*/
//en esta función solo hay que cambiar los input por lo que se requiera, todo lo demas queda igual
function limpiarFormularioSolicitud(){
    inputCarrera.value = '';
    inputFechaDeIngreso.value = '';
    inputTelefono.value ='';
    inputCorreoElectronico.value = '';
    //    inputGrupo.value = '';

    //inputPeriodo.value = '';
    //inputCantidadAlumnos.value = 0;
    //inputHorario.value = '';
}
