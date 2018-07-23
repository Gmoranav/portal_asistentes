/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/

'use strict';

//dejar este nombre del botón igual a como está aquí y dejarlo igual en el HTML: btnRegistrar
const botonRegistrar = document.querySelector('#btnRegistrar');

//estos nombres cambiarlos por lo que corresponda en el html
//manejarlos en singular

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

//el nombre de esta función se mantiene
function obtenerDatosFormulario(){
    
    let bError = false;

    //nombrar estas variables con el mismo nombre de las "const" de arriba
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
            title : 'No se pudo registrar el example', //cambiar example según lo que se esté registrando
            text: 'Por favor revise los campos resaltados', //
            confirmButtonText : 'Listo'
        });
       
    }else{
        //cambiar Example y parámetros de la función por lo que se esté registrando, pornerlo en singular
        registrarSolicitudes(sPrimerNombre, sPrimerApellido, sSegundoApellido, nCantidadAlumnos, shorario);
        //esta funcion está en el servicio
        swal({
            type : 'Éxito',
            title : 'Transacción procesada',
            text: 'La solicitúd se registró adecuadamente', //cambiar example por lo que se esté registrando
            confirmButtonText : 'Listo'
        });

        //este nombre queda igual
        limpiarFormulario();
    }



    
};


botonRegistrar.addEventListener('click' , obtenerDatosFormulario);

//Cambiar Examples por lo que se vaya a listar, usar nombre en plural (ejemplo: cursos, sedes...)


function imprimirListaSolicitudes(/*pFiltro*/){
    
    let tbody = document.querySelector('#tblSolicitudes tbody')//Cambiar Examples por lo que se vaya a listar, usar nombre en plural
                                                            //(ejemplo: cursos, sedes...)
    if(!pFiltro){
        pFiltro = '';
    }
    tbody.innerHTML = '';

    //Cambiar Examples por lo que se vaya a listar, usar nombre en plural (ejemplo: cursos, sedes...)
    for(let i = 0; i < listaSolicitudes.length; i++){

        /*los nombres que están entre corchetes y comillas simples
        deben ser los mismos que están en la función registrarExamples del archivo servicio.
        Están en la sección data{}.  NO los que vienen por parámetro sino lo que se declaran en
        la función.  Se deben colocar en el mismo orden*/

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










//dejar las palabras "lista" y "listar" y cambiar Examples por lo que se esté listando
// por ejemplo: cursos, carreras, sedes.  Debe estar en plural


function listarSolicitudes(){

        let listaSolicitudes = obtenerListaSolicitudes();
        imprimirListaSolicitudes();
}




//en esta función solo hay que cambiar los input por lo que se requiera, todo lo demas queda igual
function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;





    //Validación del nombre completo
    if(inputPrimerNombre.value == '' || (regexSoloLetras.test(inputPrimerNombre.value)==false) ){
        inputPrimerNombre.classList.add('error_input');
        bError = true;
    }else{
        inputPrimerNombre.classList.remove('error_input');
    }
    //Validación del correo
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

    //Validación de la edad
    if(inputCantidadAlumnos.value == '' || (regexSoloNumeros.test(inputCantidadAlumnos.value) == false) || Number(inputCantidadAlumnos.value) < Number(inputCantidadAlumnos.min)  || Number(inputCantidadAlumnos.value) > Number(inputCantidadAlumnos.max)){
        inputCantidadAlumnos.classList.add('error_input');
        bError = true;
    }else{
        inputCantidadAlumnos.classList.remove('error_input');
    }

    return bError;
};

//en esta función solo hay que cambiar los input por lo que se requiera, todo lo demas queda igual
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

