'use strict';

let botonRegistrar = document.querySelector('#btnRegistrar');
let inputCodigoCarrera = document.querySelector('#txtCódigoCarrera');
let inputNombreCarrera = document.querySelector('#txtNombreCarrera');
let inputCreditosTotales = document.querySelector('#numCreditosTotales');
let inputFechaCreacion = document.querySelector('#txtfechaCreacion');
let selectSede = document.querySelector('#sltSede');
let inputAcreditacion = document.querySelector('#txtAcredicatacion');

botonRegistrar.addEventListener('click' , obtenerDatosCarrera);


function obtenerDatosCarrera(){
    
    let sCodigoCarrera = inputCodigoCarrera.value;
    let sNombreCarrera = inputNombreCarrera.value;
    let nCreditosTotales = inputCreditosTotales.value;
    let sFechaCreacion = inputFechaCreacion.value;
    let sltSede = selectSede.value;
    let sAcreditacion = inputAcreditacion.value;

    let bError= validar();

    if (bError == false){

        registrar_carrera(sCodigoCarrera, sNombreCarrera, nCreditosTotales, sFechaCreacion, sltSede, sAcreditacion);
        
        swal({
            type: 'success',
            title: 'Se registró la carrera con éxito!',
            confirmButtonText: 'Entendido'
        });

        limpiarFormulario();

        
    
    }else{

        swal({
            type: 'warning',
            title: 'No se pudo registrar el curso',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Entendido'
        });


    };


};


function validar(){
    let bError = false;
    let regExpNumeros = /^[0-9]+$/;
    let regExpOpciones = /^[si,Si|no,No]+$/;

    if (inputCodigoCarrera.value == ''){
        
        bError= true;
        inputCodigoCarrera.classList.add('input_error');
    }else{
        inputCodigoCarrera.classList.remove('input_error');
    }; 

    if(inputNombreCarrera.value == ''){

        bError= true;
        inputNombreCarrera.classList.add('input_error');
    }else{
        inputNombreCarrera.classList.remove('input_error');
    };

    if(inputCreditosTotales.value == '' || regExpNumeros.test(inputCreditosTotales.value) == false){

        bError=true;
        inputCreditosTotales.classList.add('input_error');
    }else{
        inputCreditosTotales.classList.remove('input_error');
    };

    if(inputFechaCreacion.value == ''){
        
        bError=true;
        inputFechaCreacion.classList.add('input_error');
    }else{
        inputFechaCreacion.classList.remove('input_error');
    };

    if (selectSede.value = ''){

        bError= true;
        selectSede.classList.add('input_error');
    }else{
        selectSede.classList.remove('input_error');
    };

    if (inputAcreditacion.value = '' || regExpOpciones.test(inputAcreditacion.value) == false) {
        
        bError= true;
        inputAcreditacion.classList.add('input_error');
    }else{
        inputAcreditacion.classList.remove('input_error');
    };

    return bError;
};

function limpiarFormulario(){
    inputCodigoCarrera.value = '';
    inputNombreCarrera.value = '';    
    inputCreditosTotales.value = '';
    inputFechaCreacion.value = '';
    selectSede.value = '';
    inputAcreditacion.value = ''; 
};
