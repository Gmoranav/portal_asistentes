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

const inputPrimerNombre = document.querySelector('#txtPrimerNombre');
const inputSegundoNombre = document.querySelector('#txtSegundoNombre');
const inputPrimerApellido = document.querySelector('#txtPrimerApellido');
const inputSegundoApellido = document.querySelector('#txtSegundoApellido');
const inputCurso = document.querySelector('#txtCurso');
const inputPeriodo = document.querySelector('#txtPeriodo');
const inputGrupo = document.querySelector('#txtGrupo');
const inputCantidadAlumnos = document.querySelector('#numCantidadAlumnos');
const inputHorario = document.querySelector('#txtHorario');

//const inputFiltro = document.querySelector('#txtFiltro'); esto lo vemos con el profe el miercoles
/*esto lo vemos el miercoles con el profe
inputFiltro.addEventListener('keyup' , function(){
    imprimirListaPersonas(inputFiltro.value)
});*/
function obtenerDatosFormulario(){

    let bError = false;
    let sPrimerNombre = inputPrimerNombre.value;
    let sSegundoNombre = inputSegundoNombre.value;
    let sPrimerApellido = inputPrimerApellido.value;
    let sSegundoApellido = inputSegundoApellido.value;
    let sCurso  = inputCurso .value;
    let sPeriodo  = inputPeriodo .value;
    let sGrupo  = inputGrupo .value;
    let nCantidadAlumnos = Number(inputCantidadAlumnos.value);
    let shorario = inputHorario.value;

    botonRegistrar.addEventListener('click' , obtenerDatosFormulario);

    bError = validar();
    if(bError == true){
        swal({
            type : 'Aviso',
            title : 'No se pudo registrar el example',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText : 'Listo'
        });

    }else{
        registrarSolicitudes(sPrimerNombre, sPrimerApellido, sSegundoApellido, nCantidadAlumnos, shorario);
        swal({
            type : 'Éxito',
            title : 'Transacción procesada',
            text: 'La solicitúd se registró adecuadamente',
            confirmButtonText : 'Listo'
        });
        limpiarFormulario();
    }
};


botonRegistrar.addEventListener('click' , obtenerDatosFormulario);

function imprimirListaSolicitudes(/*pFiltro*/){

    let tbody = document.querySelector('#tblSolicitudes tbody')
    if(!pFiltro){
        pFiltro = '';
    }
    tbody.innerHTML = '';
    for(let i = 0; i < listaSolicitudes.length; i++){

        if(listaExamples[i]['nombre_completo'].toLowerCase().includes(pFiltro.toLowerCase())){
            let fila = tbody.insertRow();

            let cNombre = fila.insertCell();
            let cEmail = fila.insertCell();
            let cTelefono = fila.insertCell();
            let cEdad = fila.insertCell();

            cNombre.innerHTML = listaExamples[i]['nombre_completo'];
            cEmail.innerHTML = listaExamples[i]['correo'];
            cTelefono.innerHTML = listaExamples[i]['telefono'];
            cEdad.innerHTML = listaExamples[i]['edad'];
        }
    }
};

function listarSolicitudes(){

        let listaSolicitudes = obtenerListaSolicitudes();
        imprimirListaSolicitudes();
}

function validar(){
    let bError = false;
    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;
    if(inputPrimerNombre.value == '' || (regexSoloLetras.test(inputPrimerNombre.value)==false) ){
        inputPrimerNombre.classList.add('error_input');
        bError = true;
    }else{
        inputPrimerNombre.classList.remove('error_input');
    }
    if(inputPrimerApellido.value == ''){
        inputPrimerApellido.classList.add('error_input');
        bError = true;
    }else{
        inputPrimerApellido.classList.remove('error_input');
    }

    if(inputSegundoApellido.value == ''){
        inputSegundoApellido.classList.add('error_input');
        bError = true;
    }else{
        inputSegundoApellido.classList.remove('error_input');
    }
    if(inputCantidadAlumnos.value == '' || (regexSoloNumeros.test(inputCantidadAlumnos.value) == false) || Number(inputCantidadAlumnos.value) < Number(inputCantidadAlumnos.min)  || Number(inputCantidadAlumnos.value) > Number(inputCantidadAlumnos.max)){
        inputCantidadAlumnos.classList.add('error_input');
        bError = true;
    }else{
        inputCantidadAlumnos.classList.remove('error_input');
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
    inputPeriodo.value = '';
    inputCantidadAlumnos.value = 0;
    inputHorario.value = '';
}
