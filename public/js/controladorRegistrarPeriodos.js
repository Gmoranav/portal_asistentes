/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/

'use strict';
const botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener('click', obtenerDatos);

const inputNombreCuatri = document.querySelector('#txtNombreCuatrimestre');
const inputEstadoCuatri = document.querySelector('#txtEstadoCuatrimestre');

function obtenerDatos() {

    let bError = false;

    let sNombreCuatri = inputNombreCuatri.value;
    let sEstadoCuatri = inputEstadoCuatri.value;

    bError = validar();
    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar el cuatrimestre',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Listo'
        });
    } else {

        registrarPeriodo(sNombreCuatri, sEstadoCuatri);

        swal({
            type: 'success',
            title: 'Transacción procesada',
            text: 'El cuatrimestre se registró adecuadamente',
            confirmButtonText: 'Listo'
        });

        limpiarFormulario();
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

