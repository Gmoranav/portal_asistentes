'use strict';

let banderaModificar = false;

const botonRegistrar = document.querySelector('#btnRegistrar');
const botonModificar = document.querySelector('#btnModificar');

//botonModificar.hidden = true;

const inputCodigoCarrera = document.querySelector('#txtCódigoCarrera');
const inputNombreCarrera = document.querySelector('#txtNombreCarrera');
const inputCreditosTotales = document.querySelector('#numCreditosTotales');
const inputFechaCreacion = document.querySelector('#txtfechaCreacion');
const selectSede = document.querySelector('#sltSede');
const selectAcreditacion = document.querySelector('#sltAcredicatacion');
const inputId = document.querySelector('#txtId')

botonRegistrar.addEventListener('click', obtenerDatosCarrera);
botonModificar.addEventListener('click', obtenerDatosCarreraModificar);

function obtenerDatosCarrera() {


    let bError = validar();
    let respuesta;

    if (bError == true) {

        swal({
            type: 'warning',
            title: 'No se pudo registrar la carrera',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Aceptar'
        });


    } else {


        let sCodigoCarrera = inputCodigoCarrera.value;
        let sNombreCarrera = inputNombreCarrera.value;
        let nCreditosTotales = inputCreditosTotales.value;
        let sFechaCreacion = inputFechaCreacion.value;
        let sltSede = selectSede.value;
        let sAcreditacion = selectAcreditacion.value;
        let estado = 1;

        respuesta = registrar_carrera(sCodigoCarrera, sNombreCarrera, nCreditosTotales, sFechaCreacion, sltSede, sAcreditacion, estado);


        if (respuesta.success == true) {

            swal({
                type: 'success',
                title: 'Transacción Procesada',
                text: "Se registró la carrera con éxito!",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: 'Volver a la lista',
                cancelButtonText: 'Continuar Aqui',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#556566',
            }).then((result) => {
                if (result.value) {

                    window.location.href = "carrera_listar.html";
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


    };


};


function obtenerDatosCarreraModificar() {

    let sCodigoCarrera = inputCodigoCarrera.value;
    let sNombreCarrera = inputNombreCarrera.value;
    let nCreditosTotales = inputCreditosTotales.value;
    let sFechaCreacion = inputFechaCreacion.value;
    let sltSede = selectSede.value;
    let sAcreditacion = selectAcreditacion.value;
    let _id = JSON.parse(localStorage.getItem("carreraParaModificar"))[6];

    let bError = validar();
    let respuesta;

    if (bError == true) {

        swal({
            type: 'warning',
            title: 'No se pudo modificar la carrera',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Aceptar'
        });


    } else {

        respuesta = modificar_carrera(_id, sCodigoCarrera, sNombreCarrera, nCreditosTotales, sFechaCreacion, sltSede, sAcreditacion);


        if (respuesta.success == true) {

            swal({
                type: 'success',
                title: 'Transacción Procesada',
                text: "Se modificó la carrera con éxito!",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: 'Volver a la lista',
                cancelButtonText: 'Continuar Aqui',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#556566',
            }).then((result) => {
                if (result.value) {

                    window.location.href = "carrera_listar.html";
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
    };

};


banderaModificar = JSON.parse(localStorage.getItem("estadoBanderaModificar"));

if (banderaModificar == true) {
    window.onload = function () {
        cargar_datos_modificar();
    };

    function cargar_datos_modificar() {

        let carrera = [];

        carrera = getCarreraParaModificar();

        if (carrera[0] != undefined) {

            inputCodigoCarrera.value = carrera[0];
            inputNombreCarrera.value = carrera[1];
            inputCreditosTotales.value = carrera[2];
            inputFechaCreacion.value = carrera[3];
            selectSede.value = carrera[4];
            sltAcredicatacion.value = carrera[5];
            inputId.value = carrera[6];

            carrera = [];
            botonModificar.hidden = false;
            botonRegistrar.hidden = true;

        };

    };
};

function getCarreraParaModificar() {
    return JSON.parse(localStorage.getItem("carreraParaModificar"));
};

function validar() {
    let bError = false;
    let regExpNumeros = /^[0-9]+$/;

    if (inputCodigoCarrera.value == '') {

        bError = true;
        inputCodigoCarrera.classList.add('input_error');
    } else {
        inputCodigoCarrera.classList.remove('input_error');
    };

    if (inputNombreCarrera.value == '') {

        bError = true;
        inputNombreCarrera.classList.add('input_error');
    } else {
        inputNombreCarrera.classList.remove('input_error');
    };

    if (inputCreditosTotales.value == '' || regExpNumeros.test(inputCreditosTotales.value) == false) {

        bError = true;
        inputCreditosTotales.classList.add('input_error');
    } else {
        inputCreditosTotales.classList.remove('input_error');
    };

    if (inputFechaCreacion.value == '') {

        bError = true;
        inputFechaCreacion.classList.add('input_error');
    } else {
        inputFechaCreacion.classList.remove('input_error');
    };

    if (selectSede.value == '') {

        bError = true;
        selectSede.classList.add('input_error');
    } else {
        selectSede.classList.remove('input_error');
    };

    if (selectAcreditacion.value == '') {

        bError = true;
        selectAcreditacion.classList.add('input_error');
    } else {
        selectAcreditacion.classList.remove('input_error');
    };

    return bError;
};

function limpiarFormulario() {
    inputCodigoCarrera.value = '';
    inputNombreCarrera.value = '';
    inputCreditosTotales.value = '';
    inputFechaCreacion.value = '';
    selectSede.value = '';
    sltAcredicatacion.value = '';
};