/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/

'use strict';
const boton_registrar = document.querySelector('#btnRegistrar');

boton_registrar.addEventListener('click', obtener_datos);

const input_nombre_cuatri = document.querySelector('#txtNombreCuatrimestre');
const input_estado_cuatri = document.querySelector('#txtEstadoCuatrimestre');

function obtener_datos() {

    let bError = false;

    let sNombreCuatri = input_nombre_cuatri.value;
    let sEstadoCuatri = input_estado_cuatri.value;

    bError = validar();
    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar el cuatrimestre',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Listo'
        });
    } else {

        registrar_periodo(sNombreCuatri, sEstadoCuatri);

        swal({
            type: 'success',
            title: 'Transacción procesada',
            text: 'El cuatrimestre se registró adecuadamente',
            confirmButtonText: 'Listo'
        });

        limpiar_formulario();
    }
};

function validar() {
    let bError = false;


    if (input_nombre_cuatri.value == '') {

        input_nombre_cuatri.classList.add('input_error');
        bError = true;
    } else {
        input_nombre_cuatri.classList.remove('input_error');
    }

    if (input_estado_cuatri.value == '') {
        input_estado_cuatri.classList.add('input_error');
        bError = true;
    } else {
        input_estado_cuatri.classList.remove('input_error');
    }

    return bError;
};

function limpiar_formulario() {
    input_nombre_cuatri.value = '';
    input_estado_cuatri.value = '';
}

