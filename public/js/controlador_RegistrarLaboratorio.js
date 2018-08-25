'use strict';


//dejar este nombre del botón igual a como está aquí y dejarlo igual en el HTML: btnRegistrar
const botonRegistrar = document.querySelector('#btnRegistrar');
const botonModificar = document.querySelector('#btnModificar');

botonModificar.hidden = true;



//estos nombres cambiarlos por lo que corresponda en el html
//manejarlos en singular
const inputSede = document.querySelector('#txtSedeGrupo');
const inputNombreLaboratorio = document.querySelector('#txtNombreLaboratorio');
const inputCantidadEspacios = document.querySelector('#numCantEspacios');
//const inputFiltro = document.querySelector('#txtFiltro'); esto lo vemos con el profe el miercoles


/*esto lo vemos el miercoles con el profe
inputFiltro.addEventListener('keyup' , function(){
    imprimirListaPersonas(inputFiltro.value)
});*/

botonRegistrar.addEventListener('click' , obtenerDatosFormulario);
botonModificar.addEventListener('click' , modificarDatosLaboratorio);

//el nombre de esta función se mantiene
function obtenerDatosFormulario(){
    
    let bError = false;

    //nombrar estas variables con el mismo nombre de las "const" de arriba
    let sNombreLaboratorio = inputNombreLaboratorio.value;
    let sCantidadEspacios = inputCantidadEspacios.value;
    let sSedeLab = inputSede.value;

    
    
    bError = validar();
    let respuesta;

    if(bError == true){

        swal({
            type : 'warning',
            title : 'No se pudo registrar el laboratorio', //cambiar example según lo que se esté registrando
            text: 'Por favor revise los campos resaltados', //
            confirmButtonText : 'Aceptar'
        });
       
    }else{

        //cambiar Example y parámetros de la función por lo que se esté registrando, pornerlo en singular
        respuesta = registrarLaboratorio(sNombreLaboratorio, sCantidadEspacios, sSedeLab);//esta funcion está en el servicio
       
        if(respuesta.success == true){

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
                    if(result.value){
    
                        window.location.href = "laboratorio_listar.html";
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
    };
    
};

function modificarDatosLaboratorio(){
    
    let bError = false;

    //nombrar estas variables con el mismo nombre de las "const" de arriba
    let sNombreLaboratorio = inputNombreLaboratorio.value;
    let sCantidadEspacios = inputCantidadEspacios.value;
    let sSedeLab = inputSede.value;

    
    
    bError = validar();
    let respuesta;

    if(bError == true){

        swal({
            type : 'warning',
            title : 'No se pudo registrar el laboratorio', //cambiar example según lo que se esté registrando
            text: 'Por favor revise los campos resaltados', //
            confirmButtonText : 'Aceptar'
        });
       
    }else{

        //cambiar Example y parámetros de la función por lo que se esté registrando, pornerlo en singular
        respuesta = modificarLaboratorio(sNombreLaboratorio, sCantidadEspacios, sSedeLab);//esta funcion está en el servicio
       
        if(respuesta.success == true){

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
                    if(result.value){
    
                        window.location.href = "laboratorio_listar.html";
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
        botonModificar.hidden = true;
        botonRegistrar.hidden = false;
    };
    
};

//en esta función solo hay que cambiar los input por lo que se requiera, todo lo demas queda igual
function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del nombre del grupo
    if(inputNombreLaboratorio.value == ''){
        inputNombreLaboratorio.classList.add('input_error');
        bError = true;
    }else{
        inputNombreLaboratorio.classList.remove('input_error');
    }
    //Validación del laboratorio
    if(inputCantidadEspacios.value == '' || (regexSoloNumeros.test(inputCantidadEspacios.value) == false)){
        inputCantidadEspacios.classList.add('input_error');
        bError = true;
    }else{
        inputCantidadEspacios.classList.remove('input_error');
    }

    if(inputSede.value == '' ) {
        inputSede.classList.add('input_error');
        bError = true;
    }else{
        inputSede.classList.remove('input_error');
    }
    

    return bError;
};

//en esta función solo hay que cambiar los input por lo que se requiera, todo lo demas queda igual
function limpiarFormulario(){
    inputNombreLaboratorio.value = '';    
    inputCantidadEspacios.value = '';
    inputSede.value='';
}


function cargar_pagina_laboratorio(){
    window.location.replace('laboratorio_registrar.html');
};

window.onload = function() {
    cargar_datos_modificar_laboratorio();
};

function cargar_datos_modificar_laboratorio(){
    
    let laboratorio = [];

    
    laboratorio = getLaboratorioParaModificar();


    if (laboratorio[0] != undefined){

        inputSede.value = laboratorio[0]; 
        inputNombreLaboratorio.value = laboratorio[1];
        inputCantidadEspacios.value = laboratorio[2];


        laboratorio = [];
        localStorage.setItem("laboratorioParaModificar", JSON.stringify(laboratorio));
        botonModificar.hidden = false;
        botonRegistrar.hidden = true;
    }
};

function getLaboratorioParaModificar() {
    return JSON.parse(localStorage.getItem("laboratorioParaModificar"));
}

