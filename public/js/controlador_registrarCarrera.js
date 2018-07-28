'use strict';

let botonRegistrar = document.querySelector('#btnRegistrar');
let inputCodigoCarrera = document.querySelector('#txtCódigoCarrera');
let inputNombreCarrera = document.querySelector('#txtNombreCarrera');
let inputCreditosTotales = document.querySelector('#numCreditosTotales');
let inputFechaCreacion = document.querySelector('#txtfechaCreacion');
let selectSede = document.querySelector('#sltSede');
let selectAcreditacion = document.querySelector('#sltAcredicatacion');

botonRegistrar.addEventListener('click' , obtenerDatosCarrera);


function obtenerDatosCarrera(){
    
    let sCodigoCarrera = inputCodigoCarrera.value;
    let sNombreCarrera = inputNombreCarrera.value;
    let nCreditosTotales = inputCreditosTotales.value;
    let sFechaCreacion = inputFechaCreacion.value;
    let sltSede = selectSede.value;
    let sAcreditacion = selectAcreditacion.value;

    let bError= validar();
    let respuesta;

    if (bError == true){

        swal({
            type: 'warning',
            title: 'No se pudo registrar el curso',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Entendido'
        });

    
    }else{

        respuesta = registrar_carrera(sCodigoCarrera, sNombreCarrera, nCreditosTotales, sFechaCreacion, sltSede, sAcreditacion);
        
        
        if (respuesta.success == true) {    
            
            swal({
            type: 'success',
            title: 'Transacción Procesada',
            text: "Se registró la carrera con éxito!",
            showCancelButton: true,
            confirmButtonText: 'Volver a la lista',
            cancelButtonText: 'Continuar Aqui',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ecf0f1',
            }).then((result) => {
                if(result.value){

                    window.location.href = "carrera_listar.html";
                }

            });
            
        }else{

            swal({
                type: 'warning',
                title: 'No se pudo registrar el curso',
                text: 'Por favor revise los campos resaltados',
                confirmButtonText: 'Entendido'
            });


        }
       

        limpiarFormulario();

    };


};


function validar(){
    let bError = false;
    let regExpNumeros = /^[0-9]+$/;

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

    if (selectAcreditacion.value = '') {
        
        bError= true;
        selectAcreditacion.classList.add('input_error');
    }else{
        selectAcreditacion.classList.remove('input_error');
    };

    return bError;
};

function limpiarFormulario(){
    inputCodigoCarrera.value = '';
    inputNombreCarrera.value = '';    
    inputCreditosTotales.value = '';
    inputFechaCreacion.value = '';
    selectSede.value = '';
    sltAcredicatacion.value = ''; 
};