/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/

'use strict';

let banderaModificar = false;

const botonRegistrar = document.querySelector('#btnRegistrar');
const botonModificar = document.querySelector('#btnModificar');

botonModificar.hidden = true;

const inputNombreCuatri = document.querySelector('#txtNombreCuatrimestre');
const inputEstadoCuatri = document.querySelector('#txtEstadoCuatrimestre');
const inputId = document.querySelector('#txtID');

botonRegistrar.addEventListener('click', obtenerDatos);
botonModificar.addEventListener('click', obtenerDatosModificar);


function obtenerDatos() {

    //limpiarFormulario();

    let bError = false;
    let respuesta;

    bError = validar();

    if (bError == true) {

        swal({
            type: 'warning',
            title: 'No se pudo registrar el periodo',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Aceptar'
        });

    } else {

        let sNombreCuatri = inputNombreCuatri.value;
        let sEstadoCuatri = inputEstadoCuatri.value;
        let estado = 1;

        //funcion que va al servicio_RegistrarPeriodo.js
        respuesta = registrarPeriodo(sNombreCuatri, sEstadoCuatri, estado);

        if (respuesta.success == true) {

            swal({
                type: 'success',
                title: 'Transacción Procesada',
                text: "Se registró el periodo con éxito!",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: 'Volver a la lista',
                cancelButtonText: 'Continuar Aqui',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#556566',
            }).then((result) => {
                if (result.value) {

                    window.location.href = "periodo_listar.html";
                }
            });

        } else {

            swal({
                type: 'error',
                title: 'Problemas de conexión',
                text: 'Por favor contactar al administrador',
                confirmButtonText: 'Aceptar'
            });

        }

        limpiarFormulario();
    }
};

function obtenerDatosModificar() {

    let bError = false;
    let respuesta;

    bError = validar();
    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar el periodo',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Aceptar'
        });

    } else {

        let sNombreCuatri = inputNombreCuatri.value;
        let sEstadoCuatri = inputEstadoCuatri.value;
        let _id = JSON.parse(localStorage.getItem("periodoParaModificar"))[2];  //aqui trae el _id

        respuesta = modificarPeriodo(_id, sNombreCuatri, sEstadoCuatri);//esta funcion está en el servicio_RegistrarPeriodo.js

        if (respuesta.success = true) {
            swal({
                type: 'success',
                title: 'Transacción Procesada',
                text: "El periodo se modificó con éxito!",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: 'Entendido',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#556566',
            }).then((result) => {
                if (result.value) {

                    window.location.href = "periodo_listar.html";
                }

            });
        } else {
            swal({
                type: 'error',
                title: 'Problemas de conexión',
                text: 'Por favor contactar al administrador',
                confirmButtonText: 'Aceptar'
            });
        }

        limpiarFormulario();
        botonModificar.hidden = true;
        botonRegistrar.hidden = false;
    }

};

function validar() {
    let bError = false;


    if (inputNombreCuatri.value == '') {

        inputNombreCuatri.classList.add('input_error');
        bError = true;
    } else {
        inputNombreCuatri.classList.remove('input_error');
    }

    if (inputEstadoCuatri.value == '') {
        inputEstadoCuatri.classList.add('input_error');
        bError = true;
    } else {
        inputEstadoCuatri.classList.remove('input_error');
    }

    return bError;
};

function limpiarFormulario() {

    inputNombreCuatri.value = '';
    inputEstadoCuatri.value = '';
}

// ***  inicio: para enviar la informacion para modificar al formulario.  (del controlador_ListarPeriodo.js) *** 
banderaModificar = JSON.parse(localStorage.getItem("estadoBanderaModificar"));

if (banderaModificar == true) {
    window.onload = function () {
        cargar_datos_modificar();
    };

    function cargar_datos_modificar() {

        let periodo = [];
        periodo = getPeriodoParaModificar();

        if (periodo[0] != undefined) {

            inputNombreCuatri.value = periodo[0];
            inputEstadoCuatri.value = periodo[1];

            periodo = [];
            botonModificar.hidden = false;
            botonRegistrar.hidden = true;
        }
    }
};

function getPeriodoParaModificar() {
    return JSON.parse(localStorage.getItem("periodoParaModificar"));
}
// fin: enviar info del listar al form 
