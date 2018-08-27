
'use strict';

llenar_select_cursos();

const selectCursos = document.querySelector('#sltCurso');
const botonRegistrar = document.querySelector('#btnAgregarRegistrosBitacora');
const botonModificar = document.querySelector('#btnModificarRegistrosBitacora');

botonModificar.hidden = true;

const inputFecha = document.querySelector('#txtFecha');
const inputHoraInicio = document.querySelector('#txtHoraInicio');
const inputHoraFin = document.querySelector('#txtHoraFin');
//const inputHoraInicio = document.getElementById('#tmHoraInicio');
//const inputHoraFin= document.getElementById('#tmHoraFin');
const inputDescripcion = document.querySelector('#txtDescripcion');
const inputId = document.querySelector('#txtId');

botonRegistrar.addEventListener('click' , obtenerDatosFormulario);
//botonModificar.addEventListener('click' , obtenerDatosModificar);

function obtenerDatosFormulario(){
    let cursoId = selectCursos.value;
    let bError = false;
    let respuesta;

    
    bError = validar();
    if(bError == true){
        swal({
            type: 'warning',
            title: 'No se pudo registrar la actividad',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Aceptar'
        });
        
    }else{
   
        
        let sFecha = inputFecha.value; 
        let sHoraInicio = inputHoraInicio.value;
        let sHoraFin = inputHoraFin.value;
        let sDescripcion = inputDescripcion.value;
       
        
        respuesta = agregar_registros(cursoId, sFecha, sHoraInicio, sHoraFin, sDescripcion);//esta funcion está en el servicio

        if (respuesta.success = true){
            swal({
                type: 'success',
                title: 'Transacción Procesada',
                text: "Se realizó un registro en la bitácora con éxito!",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: 'Volver a la lista',
                cancelButtonText: 'Continuar Aqui',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#556566',
                }).then((result) => {
                    if(result.value){
    
                        window.location.href = "bitacora_listar.html";
                    }
    
                });
        }else{
            swal({
                type : 'error',
                title : 'Problemas de conexión', 
                text: 'Por favor contactar al administrador', 
                confirmButtonText : 'Aceptar'
            });
        }

        limpiarFormulario();
    }
    
};



/*function obtenerDatosModificar(){
    
    let bError = false;
    let respuesta;

    
    bError = validar();
    if(bError == true){
        swal({
            type: 'warning',
            title: 'No se pudo registrar el usuario',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Aceptar'
        });
        
    }else{

        let sFecha = inputFecha.value; 
        let tmHoraInicio = inputHoraInicio.value;
        let tmHoraFin = inputHoraFin.value;
        let sDescripcion = inputDescripcion.value;     
        let _id = inputId.value;

        
        respuesta = modificar_bitacoras(_id, sFecha, tmHoraInicio, tmHoraFin, sDescripcion);//esta funcion está en el servicio

        if (respuesta.success = true){
            swal({
                type: 'success',
                title: 'Transacción Procesada',
                text: "La bitácora se modificó con éxito!",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: 'Volver a la lista',
                cancelButtonText: 'Continuar Aqui',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#556566',
                }).then((result) => {
                    if(result.value){
    
                        window.location.href = "bitacora_listar.html";
                    }
    
                });
        }else{
            swal({
                type : 'error',
                title : 'Problemas de conexión', 
                text: 'Por favor contactar al administrador', 
                confirmButtonText : 'Aceptar'
            });
        }

        limpiarFormulario();
        botonModificar.hidden = true;
        botonRegistrar.hidden = false;
    }
    
};*/


function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;

    //Validación de la fecha
    if(inputFecha.value == '' ){
        inputFecha.classList.add('input_error');
        bError = true;
    }else{
        inputFecha.classList.remove('input_error');
    }
    //Validación de la descripcion
    if(inputDescripcion.value == '' || (regexSoloLetras.test(inputDescripcion.value)==false)){
        inputDescripcion.classList.add('input_error');
        bError = true;
    }else{
        inputDescripcion.classList.remove('input_error');
    }
    //Validación de la hora inicio
    if(inputHoraInicio.value == '' ){
        inputHoraInicio.classList.add('input_error');
        bError = true;
    }else{
        inputHoraInicio.classList.remove('input_error');
    }
    //Validación de la hora fin
    if(inputHoraFin.value == '' ){
        inputHoraFin.classList.add('input_error');
        bError = true;
    }else{
        inputHoraFin.classList.remove('input_error');
    }
    return bError;
};

function limpiarFormulario(){

    inputFecha = '';
    inputHoraInicio.value = ''; 
    inputHoraFin.value = '';
    inputDescripcion.value = '';
    inputId.value = '';
};


/*function cargar_pagina(){
    window.location.replace('bitacora_registrar.html');
};

window.onload = function() {
    cargar_datos_modificar();
   };

function cargar_datos_modificar(){
    
    let bitacora = [];

    
    bitacora = getBitacoraParaModificar();


    if (bitacora[0] != undefined){

        inputFecha.value = bitacora[0]; 
        inputHoraInicio.value = bitacora[1];
        inputHoraFin.value = bitacora[2];
        inputDescripcion.value = bitacora[3];
        inputId.value = bitacora[4];
        
        bitacora = [];
        localStorage.setItem("bitacoraParaModificar", JSON.stringify(bitacora));
        botonModificar.hidden = false;
        botonRegistrar.hidden = true;
    }
};*/


function llenar_select_cursos(){
    let lista_Cursos = getListaCursos();
    for(let i = 0; i < lista_Cursos.length; i++){
        let nuevoCurso = new Option(lista_Cursos[i]['curso']);// texto a visualizar
        nuevoCurso.value = lista_Cursos[i]['_id'];

        selectCursos.options.add(nuevoCurso);
    }
};


function getListaCursos(){
    let info_usuario = getCedulaUsuario();

    let lista_bitacoras = obtenerListaBitacoras();
    let cursos = [];

    switch (info_usuario[1]) {
        case 'AsistenteProfesor':
            for (let i = 0; i < lista_bitacoras.length; i++) {
                if (lista_bitacoras[i]["cedula_asistente"] == info_usuario[0]) {
                    console.log(lista_bitacoras[i]["cedula_asistente"]);
                    cursos [i][0]=lista_bitacoras[i]["curso"];
                    cursos [i][1]=lista_bitacoras[i]["_id"];
                }//fin if
            }//fin for
            break;
        case 'Profesor':
            for (let i = 0; i < lista_bitacoras.length; i++) {
                if (lista_bitacoras[i]["cedula_profesor"] == info_usuario[0]) {
                    console.log(lista_bitacoras[i]["cedula_profesor"]);
                    cursos [i][0]=lista_bitacoras[i]["curso"];
                    cursos [i][1]=lista_bitacoras[i]["_id"];
                }//fin if
            }//fin for
            break;
        //case 'AsistenteDecanatura' || 'AsistenteDecanatura' || 'Rectoría':
        default:
            for (let i = 0; i < lista_bitacoras.length; i++) {
                cursos [i][0]=lista_bitacoras[i]["curso"];
                cursos [i][1]=lista_bitacoras[i]["_id"];
            }//fin for
            break;
    }
    return cursos;
};